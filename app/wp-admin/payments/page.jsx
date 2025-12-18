"use client";
import { useState, useEffect } from "react";
import styles from "./payments.module.css";
import {
  FiDollarSign,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiSearch,
  FiFilter,
  FiRefreshCw,
  FiUser,
  FiCalendar,
  FiTrendingUp,
  FiArrowUp,
  FiArrowDown,
  FiEye,
  FiDownload,
  FiBarChart2,
  FiChevronLeft,
  FiChevronRight,
  FiMoreVertical,
} from "react-icons/fi";

export default function PaymentsPage() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [updatingTransaction, setUpdatingTransaction] = useState(null);
  const [user, setUser] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    if (user) {
      fetchTransactions();
    }
  }, [user]);

  useEffect(() => {
    filterTransactions();
  }, [transactions, searchTerm, statusFilter, typeFilter]);

  const fetchTransactions = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/transactions");

      if (!response.ok) {
        throw new Error("Failed to fetch transactions");
      }

      const data = await response.json();
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      alert("Failed to load transactions");
    } finally {
      setLoading(false);
    }
  };

  const filterTransactions = () => {
    let filtered = transactions;

    if (searchTerm) {
      filtered = filtered.filter(
        (transaction) =>
          transaction.user?.name
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          transaction.user?.email
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          transaction.paymentId
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          transaction.orderId?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter(
        (transaction) => transaction.status === statusFilter
      );
    }

    if (typeFilter !== "all") {
      filtered = filtered.filter(
        (transaction) => transaction.type === typeFilter
      );
    }

    setFilteredTransactions(filtered);
    setCurrentPage(1);
  };

  const updateTransactionStatus = async (transactionId, newStatus) => {
    try {
      setUpdatingTransaction(transactionId);

      const response = await fetch("/api/admin/transactions", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          transactionId,
          status: newStatus,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update transaction status");
      }

      const updatedTransaction = await response.json();

      setTransactions((prevTransactions) =>
        prevTransactions.map((transaction) =>
          transaction.id === transactionId ? updatedTransaction : transaction
        )
      );

      alert("Transaction status updated successfully");
    } catch (error) {
      console.error("Error updating transaction status:", error);
      alert("Failed to update transaction status");
    } finally {
      setUpdatingTransaction(null);
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: {
        class: styles.statusPending,
        icon: <FiClock size={14} />,
        label: "Pending",
      },
      completed: {
        class: styles.statusCompleted,
        icon: <FiCheckCircle size={14} />,
        label: "Completed",
      },
      failed: {
        class: styles.statusFailed,
        icon: <FiXCircle size={14} />,
        label: "Failed",
      },
    };

    const config = statusConfig[status] || statusConfig.pending;

    return (
      <span className={`${styles.statusBadge} ${config.class}`}>
        {config.icon}
        {config.label}
      </span>
    );
  };

  const getTypeBadge = (type) => {
    const typeConfig = {
      credit: {
        class: styles.typeCredit,
        icon: <FiArrowDown size={12} />,
        label: "Credit",
      },
      debit: {
        class: styles.typeDebit,
        icon: <FiArrowUp size={12} />,
        label: "Debit",
      },
    };

    const config = typeConfig[type] || typeConfig.credit;

    return (
      <span className={`${styles.typeBadge} ${config.class}`}>
        {config.icon}
        {config.label}
      </span>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const exportToCSV = () => {
    const headers = [
      "User",
      "Amount",
      "Type",
      "Status",
      "Date",
      "Payment ID",
      "Order ID",
    ];
    const csvData = filteredTransactions.map((transaction) => [
      transaction.user?.name || "N/A",
      transaction.amount,
      transaction.type,
      transaction.status,
      formatDateTime(transaction.createdAt),
      transaction.paymentId || "N/A",
      transaction.orderId || "N/A",
    ]);

    const csvContent = [
      headers.join(","),
      ...csvData.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `transactions-${
      new Date().toISOString().split("T")[0]
    }.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const stats = {
    total: transactions.length,
    pending: transactions.filter((t) => t.status === "pending").length,
    completed: transactions.filter((t) => t.status === "completed").length,
    failed: transactions.filter((t) => t.status === "failed").length,
    totalRevenue: transactions
      .filter((t) => t.status === "completed" && t.type === "credit")
      .reduce((sum, transaction) => sum + transaction.amount, 0),
    credits: transactions.filter((t) => t.type === "credit").length,
    debits: transactions.filter((t) => t.type === "debit").length,
  };

  const paginatedTransactions = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Loading transactions...</p>
      </div>
    );
  }

  return (
    <div className={styles.paymentsContainer}>
      {/* Header Section */}
      <div className={styles.headerSection}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <h1>Transaction Management</h1>
            <p>Monitor and manage all payment transactions in real-time</p>
          </div>
          <div className={styles.headerActions}>
            <button
              className={styles.exportButton}
              onClick={exportToCSV}
              disabled={filteredTransactions.length === 0}
            >
              <FiDownload size={isMobile ? 16 : 18} />
              <span className={styles.buttonText}>Export CSV</span>
            </button>
            <button
              className={styles.refreshButton}
              onClick={fetchTransactions}
              disabled={loading}
            >
              <FiRefreshCw
                size={isMobile ? 16 : 18}
                className={loading ? styles.spinning : ""}
              />
              <span className={styles.buttonText}>Refresh</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <div className={`${styles.statCard} ${styles.revenueCard}`}>
          <div className={styles.statIcon}>
            <FiTrendingUp size={isMobile ? 20 : 24} />
          </div>
          <div className={styles.statInfo}>
            <h3>{formatCurrency(stats.totalRevenue)}</h3>
            <p>Total Revenue</p>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiBarChart2 size={isMobile ? 20 : 24} />
          </div>
          <div className={styles.statInfo}>
            <h3>{stats.total}</h3>
            <p>Total Transactions</p>
            <span className={styles.statSubtext}>
              {stats.credits} credits • {stats.debits} debits
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiCheckCircle size={isMobile ? 20 : 24} />
          </div>
          <div className={styles.statInfo}>
            <h3>{stats.completed}</h3>
            <p>Completed</p>
            <span className={styles.statSubtext}>
              {((stats.completed / stats.total) * 100 || 0).toFixed(1)}% success
              rate
            </span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIcon}>
            <FiClock size={isMobile ? 20 : 24} />
          </div>
          <div className={styles.statInfo}>
            <h3>{stats.pending}</h3>
            <p>Pending</p>
            <span className={styles.statSubtext}>Needs attention</span>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className={styles.filtersSection}>
        <div className={styles.filtersHeader}>
          <div className={styles.searchContainer}>
            <div className={styles.searchBox}>
              <FiSearch size={isMobile ? 16 : 20} />
              <input
                type="text"
                placeholder="Search transactions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>

          <div className={styles.filterControls}>
            <button
              className={styles.filterToggle}
              onClick={() => setShowFilters(!showFilters)}
            >
              <FiFilter size={isMobile ? 16 : 18} />
              <span className={styles.buttonText}>Filters</span>
            </button>
          </div>
        </div>

        {showFilters && (
          <div className={styles.filterOptions}>
            <div className={styles.filterGroup}>
              <label>Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className={styles.filterSelect}
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="failed">Failed</option>
              </select>
            </div>

            <div className={styles.filterGroup}>
              <label>Type</label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className={styles.filterSelect}
              >
                <option value="all">All Types</option>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
              </select>
            </div>

            <button
              className={styles.clearFilters}
              onClick={() => {
                setStatusFilter("all");
                setTypeFilter("all");
                setSearchTerm("");
              }}
            >
              Clear All
            </button>
          </div>
        )}
      </div>

      {/* Transactions Container */}
      <div className={styles.transactionsContainer}>
        <div className={styles.transactionsHeader}>
          <div className={styles.tableTitle}>
            <h3>Transaction History</h3>
            <span className={styles.resultCount}>
              Showing {filteredTransactions.length} of {transactions.length}{" "}
              transactions
            </span>
          </div>
        </div>

        {/* Desktop Table View - Made Responsive */}
        <div className={styles.tableWrapper}>
          <div className={styles.tableResponsive}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.customerColumn}>Customer</th>
                  <th className={styles.amountColumn}>Amount</th>
                  <th className={styles.typeColumn}>Type</th>
                  <th className={styles.statusColumn}>Status</th>
                  <th className={styles.dateColumn}>Date</th>
                  <th className={styles.paymentColumn}>Payment Info</th>
                  <th className={styles.actionColumn}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedTransactions.length === 0 ? (
                  <tr>
                    <td colSpan="7" className={styles.emptyState}>
                      <div className={styles.emptyContent}>
                        <FiDollarSign size={48} />
                        <h4>No transactions found</h4>
                        <p>Try adjusting your search criteria or filters</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  paginatedTransactions.map((transaction) => (
                    <tr key={transaction.id} className={styles.tableRow}>
                      <td className={styles.customerColumn}>
                        <div className={styles.customerCell}>
                          <div className={styles.userAvatar}>
                            {transaction.user?.name?.charAt(0) || (
                              <FiUser size={16} />
                            )}
                          </div>
                          <div className={styles.userInfo}>
                            <span className={styles.userName}>
                              {transaction.user?.name || "Unknown User"}
                            </span>
                            <span className={styles.userEmail}>
                              {transaction.user?.email || "No email"}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className={styles.amountColumn}>
                        <div className={styles.amountCell}>
                          <span
                            className={`${styles.amount} ${
                              transaction.type === "credit"
                                ? styles.amountCredit
                                : styles.amountDebit
                            }`}
                          >
                            {formatCurrency(transaction.amount)}
                          </span>
                          {transaction.description && (
                            <span className={styles.description}>
                              {transaction.description}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className={styles.typeColumn}>
                        <div className={styles.typeCell}>
                          {getTypeBadge(transaction.type)}
                        </div>
                      </td>
                      <td className={styles.statusColumn}>
                        <div className={styles.statusCell}>
                          {getStatusBadge(transaction.status)}
                        </div>
                      </td>
                      <td className={styles.dateColumn}>
                        <div className={styles.dateCell}>
                          <FiCalendar size={14} />
                          <span className={styles.dateText}>
                            {formatDate(transaction.createdAt)}
                          </span>
                          <span className={styles.dateTime}>
                            {formatDateTime(transaction.createdAt)}
                          </span>
                        </div>
                      </td>
                      <td className={styles.paymentColumn}>
                        <div className={styles.paymentCell}>
                          {transaction.paymentId && (
                            <div className={styles.paymentId}>
                              <strong>PID:</strong>{" "}
                              <span className={styles.idText}>
                                {transaction.paymentId.slice(-8)}
                              </span>
                            </div>
                          )}
                          {transaction.orderId && (
                            <div className={styles.orderId}>
                              <strong>OID:</strong>{" "}
                              <span className={styles.idText}>
                                {transaction.orderId.slice(-8)}
                              </span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className={styles.actionColumn}>
                        <div className={styles.actionCell}>
                          {transaction.status === "pending" ? (
                            <div className={styles.actionButtons}>
                              <button
                                onClick={() =>
                                  updateTransactionStatus(
                                    transaction.id,
                                    "completed"
                                  )
                                }
                                disabled={
                                  updatingTransaction === transaction.id
                                }
                                className={styles.approveBtn}
                                title="Approve transaction"
                              >
                                {updatingTransaction === transaction.id ? (
                                  <div className={styles.spinner}></div>
                                ) : (
                                  <FiCheckCircle size={16} />
                                )}
                                <span className={styles.buttonText}>
                                  Approve
                                </span>
                              </button>
                              <button
                                onClick={() =>
                                  updateTransactionStatus(
                                    transaction.id,
                                    "failed"
                                  )
                                }
                                disabled={
                                  updatingTransaction === transaction.id
                                }
                                className={styles.rejectBtn}
                                title="Reject transaction"
                              >
                                {updatingTransaction === transaction.id ? (
                                  <div className={styles.spinner}></div>
                                ) : (
                                  <FiXCircle size={16} />
                                )}
                                <span className={styles.buttonText}>
                                  Reject
                                </span>
                              </button>
                            </div>
                          ) : (
                            <button
                              className={styles.viewBtn}
                              onClick={() =>
                                setSelectedTransaction(transaction)
                              }
                            >
                              <FiEye size={16} />
                              <span className={styles.buttonText}>View</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View */}
        {isMobile && (
          <div className={styles.cardsContainer}>
            {paginatedTransactions.length === 0 ? (
              <div className={styles.emptyStateCard}>
                <FiDollarSign size={48} />
                <h4>No transactions found</h4>
                <p>Try adjusting your search criteria or filters</p>
              </div>
            ) : (
              <div className={styles.cardsList}>
                {paginatedTransactions.map((transaction) => (
                  <div key={transaction.id} className={styles.transactionCard}>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardCustomer}>
                        <div className={styles.userAvatar}>
                          {transaction.user?.name?.charAt(0) || (
                            <FiUser size={16} />
                          )}
                        </div>
                        <div className={styles.cardUserInfo}>
                          <span className={styles.userName}>
                            {transaction.user?.name || "Unknown User"}
                          </span>
                          <span className={styles.userEmail}>
                            {transaction.user?.email?.split("@")[0] ||
                              "No email"}
                          </span>
                        </div>
                      </div>
                      <div className={styles.cardBadges}>
                        {getTypeBadge(transaction.type)}
                        {getStatusBadge(transaction.status)}
                      </div>
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.cardAmount}>
                        <span
                          className={`${styles.amount} ${
                            transaction.type === "credit"
                              ? styles.amountCredit
                              : styles.amountDebit
                          }`}
                        >
                          {formatCurrency(transaction.amount)}
                        </span>
                        {transaction.description && (
                          <span className={styles.cardDescription}>
                            {transaction.description}
                          </span>
                        )}
                      </div>

                      <div className={styles.cardDetails}>
                        <div className={styles.cardDetailItem}>
                          <FiCalendar size={14} />
                          <span>{formatDate(transaction.createdAt)}</span>
                        </div>
                        {transaction.paymentId && (
                          <div className={styles.cardDetailItem}>
                            <strong>PID:</strong>
                            <span>{transaction.paymentId.slice(-8)}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className={styles.cardFooter}>
                      {transaction.status === "pending" ? (
                        <div className={styles.cardActions}>
                          <button
                            onClick={() =>
                              updateTransactionStatus(
                                transaction.id,
                                "completed"
                              )
                            }
                            disabled={updatingTransaction === transaction.id}
                            className={styles.approveBtn}
                          >
                            {updatingTransaction === transaction.id ? (
                              <div className={styles.spinner}></div>
                            ) : (
                              <FiCheckCircle size={16} />
                            )}
                            Approve
                          </button>
                          <button
                            onClick={() =>
                              updateTransactionStatus(transaction.id, "failed")
                            }
                            disabled={updatingTransaction === transaction.id}
                            className={styles.rejectBtn}
                          >
                            {updatingTransaction === transaction.id ? (
                              <div className={styles.spinner}></div>
                            ) : (
                              <FiXCircle size={16} />
                            )}
                            Reject
                          </button>
                        </div>
                      ) : (
                        <button
                          className={styles.viewBtn}
                          onClick={() => setSelectedTransaction(transaction)}
                        >
                          <FiEye size={16} />
                          View Details
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Pagination */}
        {filteredTransactions.length > 0 && (
          <div className={styles.paginationContainer}>
            <div className={styles.pagination}>
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={styles.pageButton}
              >
                <FiChevronLeft size={18} />
                <span className={styles.buttonText}>Previous</span>
              </button>
              <div className={styles.pageNumbers}>
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .slice(
                    Math.max(0, currentPage - 2),
                    Math.min(totalPages, currentPage + 2)
                  )
                  .map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`${styles.pageButton} ${
                        currentPage === page ? styles.activePage : ""
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <span className={styles.pageDots}>...</span>
                )}
                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <button
                    onClick={() => setCurrentPage(totalPages)}
                    className={`${styles.pageButton} ${
                      currentPage === totalPages ? styles.activePage : ""
                    }`}
                  >
                    {totalPages}
                  </button>
                )}
              </div>
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={styles.pageButton}
              >
                <span className={styles.buttonText}>Next</span>
                <FiChevronRight size={18} />
              </button>
            </div>
            <div className={styles.pageInfo}>
              Page {currentPage} of {totalPages} • {filteredTransactions.length}{" "}
              transactions
            </div>
          </div>
        )}
      </div>

      {/* Transaction Detail Modal */}
      {selectedTransaction && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h3>Transaction Details</h3>
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedTransaction(null)}
              >
                ×
              </button>
            </div>
            <div className={styles.modalContent}>
              <div className={styles.modalBody}>
                <div className={styles.modalRow}>
                  <span className={styles.modalLabel}>Customer:</span>
                  <span className={styles.modalValue}>
                    {selectedTransaction.user?.name || "Unknown User"}
                  </span>
                </div>
                <div className={styles.modalRow}>
                  <span className={styles.modalLabel}>Email:</span>
                  <span className={styles.modalValue}>
                    {selectedTransaction.user?.email || "No email"}
                  </span>
                </div>
                <div className={styles.modalRow}>
                  <span className={styles.modalLabel}>Amount:</span>
                  <span
                    className={`${styles.modalValue} ${
                      selectedTransaction.type === "credit"
                        ? styles.modalAmountCredit
                        : styles.modalAmountDebit
                    }`}
                  >
                    {formatCurrency(selectedTransaction.amount)}
                  </span>
                </div>
                <div className={styles.modalRow}>
                  <span className={styles.modalLabel}>Type:</span>
                  <span className={styles.modalValue}>
                    {selectedTransaction.type}
                  </span>
                </div>
                <div className={styles.modalRow}>
                  <span className={styles.modalLabel}>Status:</span>
                  <span className={styles.modalValue}>
                    {getStatusBadge(selectedTransaction.status)}
                  </span>
                </div>
                <div className={styles.modalRow}>
                  <span className={styles.modalLabel}>Date:</span>
                  <span className={styles.modalValue}>
                    {formatDateTime(selectedTransaction.createdAt)}
                  </span>
                </div>
                {selectedTransaction.paymentId && (
                  <div className={styles.modalRow}>
                    <span className={styles.modalLabel}>Payment ID:</span>
                    <span className={styles.modalValue}>
                      {selectedTransaction.paymentId}
                    </span>
                  </div>
                )}
                {selectedTransaction.orderId && (
                  <div className={styles.modalRow}>
                    <span className={styles.modalLabel}>Order ID:</span>
                    <span className={styles.modalValue}>
                      {selectedTransaction.orderId}
                    </span>
                  </div>
                )}
                {selectedTransaction.description && (
                  <div className={styles.modalRow}>
                    <span className={styles.modalLabel}>Description:</span>
                    <span className={styles.modalValue}>
                      {selectedTransaction.description}
                    </span>
                  </div>
                )}
              </div>
              <div className={styles.modalFooter}>
                <button
                  className={styles.modalCloseButton}
                  onClick={() => setSelectedTransaction(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
