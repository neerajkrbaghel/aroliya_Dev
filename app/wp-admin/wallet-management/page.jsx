// components/AdminWalletManagement.js
"use client";
import { useState, useEffect } from "react";
import styles from "./AdminWalletManagement.module.css";
import {
  FaWallet,
  FaMoneyBillWave,
  FaUniversity,
  FaSpinner,
  FaCheck,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

export default function AdminWalletManagement() {
  const [activeTab, setActiveTab] = useState("payouts");
  const [transactions, setTransactions] = useState([]);
  const [payoutRequests, setPayoutRequests] = useState([]);
  const [bankAccounts, setBankAccounts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    status: "all",
    page: 1,
    limit: 10,
  });
  const [rejectionReasons, setRejectionReasons] = useState({});
  const [updatingId, setUpdatingId] = useState(null);
  
  // Pagination states
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 1
  });

  useEffect(() => {
    fetchData();
  }, [activeTab, filters]);

  const fetchData = async () => {
    setLoading(true);
    const mockTransactions = [
      { id: 1, wallet: { user: { name: "John Doe", email: "john@example.com" } }, amount: 50000, type: "credit", description: "Project Payment", status: "completed", createdAt: new Date().toISOString() },
      { id: 2, wallet: { user: { name: "Jane Smith", email: "jane@example.com" } }, amount: 30000, type: "debit", description: "Withdrawal", status: "pending", createdAt: new Date(Date.now() - 86400000).toISOString() },
    ];
    const mockPayouts = [
      { id: 1, wallet: { user: { name: "Freelancer One", email: "freelancer1@example.com" } }, amount: 25000, bankDetail: { bankName: "HDFC Bank", accountNumber: "****1234" }, status: "pending", createdAt: new Date().toISOString() },
      { id: 2, wallet: { user: { name: "Freelancer Two", email: "freelancer2@example.com" } }, amount: 15000, bankDetail: { bankName: "ICICI Bank", accountNumber: "****5678" }, status: "approved", createdAt: new Date(Date.now() - 86400000).toISOString() },
    ];
    const mockBankAccounts = [
      { id: 1, wallet: { user: { name: "John Doe", email: "john@example.com" } }, bankName: "HDFC Bank", accountNumber: "XXXXXXXX1234", accountHolder: "John Doe", ifscCode: "HDFC0001234", branch: "Main Branch", isVerified: true, createdAt: new Date().toISOString() },
      { id: 2, wallet: { user: { name: "Jane Smith", email: "jane@example.com" } }, bankName: "SBI Bank", accountNumber: "XXXXXXXX5678", accountHolder: "Jane Smith", ifscCode: "SBIN0005678", branch: "Downtown", isVerified: false, createdAt: new Date(Date.now() - 86400000).toISOString() },
    ];

    switch (activeTab) {
      case "transactions":
        setTransactions(mockTransactions);
        setPagination({ page: 1, limit: 10, total: mockTransactions.length, pages: 1 });
        break;
      case "payouts":
        setPayoutRequests(mockPayouts);
        setPagination({ page: 1, limit: 10, total: mockPayouts.length, pages: 1 });
        break;
      case "bank-accounts":
        setBankAccounts(mockBankAccounts);
        setPagination({ page: 1, limit: 10, total: mockBankAccounts.length, pages: 1 });
        break;
    }
    setLoading(false);
  };

  const setRejectionReason = (payoutId, reason) => {
    setRejectionReasons((prev) => ({
      ...prev,
      [payoutId]: reason,
    }));
  };

  const updateStatus = async (type, id, status) => {
    setUpdatingId(id);
    console.log(`Updating ${type} ${id} to ${status}`);
    if (type === "payout") {
      setRejectionReasons((prev) => {
        const newReasons = { ...prev };
        delete newReasons[id];
        return newReasons;
      });
    }
    alert("Status updated successfully");
    await fetchData();
    setUpdatingId(null);
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { color: "#f59e0b", label: "Pending" },
      approved: { color: "#10b981", label: "Approved" },
      completed: { color: "#3b82f6", label: "Completed" },
      rejected: { color: "#ef4444", label: "Rejected" },
      credited: { color: "#10b981", label: "Credited" },
    };

    const config = statusConfig[status] || { color: "#6b7280", label: status };
    return (
      <span
        className={styles.statusBadge}
        style={{ backgroundColor: config.color }}
      >
        {config.label}
      </span>
    );
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Pagination functions
  const goToPage = (page) => {
    if (page >= 1 && page <= pagination.pages) {
      setFilters(prev => ({ ...prev, page }));
    }
  };

  const nextPage = () => {
    if (pagination.page < pagination.pages) {
      setFilters(prev => ({ ...prev, page: prev.page + 1 }));
    }
  };

  const prevPage = () => {
    if (pagination.page > 1) {
      setFilters(prev => ({ ...prev, page: prev.page - 1 }));
    }
  };

  const changeLimit = (newLimit) => {
    setFilters({ ...filters, limit: parseInt(newLimit), page: 1 });
  };

  // Get current data based on active tab
  const getCurrentData = () => {
    switch (activeTab) {
      case "transactions": return transactions;
      case "payouts": return payoutRequests;
      case "bank-accounts": return bankAccounts;
      default: return [];
    }
  };

  const currentData = getCurrentData();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Wallet Management</h1>
        <p>Manage transactions, payouts, and bank accounts</p>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "transactions" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("transactions")}
        >
          <FaWallet />
          Transactions
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "payouts" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("payouts")}
        >
          <FaMoneyBillWave />
          Payout Requests
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "bank-accounts" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("bank-accounts")}
        >
          <FaUniversity />
          Bank Accounts
        </button>
      </div>

      {/* Filters and Pagination Controls */}
      <div className={styles.controls}>
        <div className={styles.filters}>
          <select
            value={filters.status}
            onChange={(e) =>
              setFilters({ ...filters, status: e.target.value, page: 1 })
            }
            className={styles.filterSelect}
          >
            <option value="all">All Status</option>
            {activeTab === "bank-accounts" ? (
              <>
                <option value="pending">Pending Verification</option>
                <option value="verified">Verified</option>
              </>
            ) : (
              <>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="completed">Completed</option>
                <option value="rejected">Rejected</option>
                {activeTab === "transactions" && (
                  <option value="credited">Credited</option>
                )}
              </>
            )}
          </select>

          <select
            value={filters.limit}
            onChange={(e) => changeLimit(e.target.value)}
            className={styles.limitSelect}
          >
            <option value="5">5 per page</option>
            <option value="10">10 per page</option>
            <option value="20">20 per page</option>
            <option value="50">50 per page</option>
            <option value="100">100 per page</option>
          </select>
        </div>

        {/* Pagination Info */}
        {pagination.total > 0 && (
          <div className={styles.paginationInfo}>
            Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
            {Math.min(pagination.page * pagination.limit, pagination.total)} of{" "}
            {pagination.total} entries
          </div>
        )}
      </div>

      {/* Content */}
      <div className={styles.content}>
        {loading ? (
          <div className={styles.loading}>
            <FaSpinner className={styles.spinner} />
            <p>Loading...</p>
          </div>
        ) : (
          <>
            {/* Payout Requests Tab */}
            {activeTab === "payouts" && (
              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Amount</th>
                      <th>Bank Details</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payoutRequests.length > 0 ? (
                      payoutRequests.map((payout) => (
                        <tr key={payout.id}>
                          <td>
                            <div className={styles.userInfo}>
                              <strong>{payout.wallet.user.name}</strong>
                              <span>{payout.wallet.user.email}</span>
                            </div>
                          </td>
                          <td className={styles.amount}>
                            {formatCurrency(payout.amount)}
                          </td>
                          <td>
                            <div className={styles.bankInfo}>
                              <strong>{payout.bankDetail.bankName}</strong>
                              <span>
                                ****{payout.bankDetail.accountNumber.slice(-4)}
                              </span>
                            </div>
                          </td>
                          <td>{getStatusBadge(payout.status)}</td>
                          <td>{formatDate(payout.createdAt)}</td>
                          <td>
                            <div className={styles.payoutActions}>
                              {payout.status === "pending" ? (
                                <>
                                  <select
                                    value={payout.status}
                                    onChange={(e) =>
                                      updateStatus(
                                        "payout",
                                        payout.id,
                                        e.target.value
                                      )
                                    }
                                    className={styles.statusSelect}
                                    disabled={updatingId === payout.id}
                                  >
                                    <option value="pending">Pending</option>
                                    <option value="approved">Approve</option>
                                    <option value="completed">Complete</option>
                                    <option value="rejected">
                                      Reject & Refund
                                    </option>
                                  </select>
                                  <input
                                    type="text"
                                    placeholder="Reason for rejection (optional)"
                                    value={rejectionReasons[payout.id] || ""}
                                    onChange={(e) =>
                                      setRejectionReason(
                                        payout.id,
                                        e.target.value
                                      )
                                    }
                                    className={styles.reasonInput}
                                  />
                                  {updatingId === payout.id && (
                                    <div className={styles.updating}>
                                      <FaSpinner
                                        className={styles.smallSpinner}
                                      />
                                      Updating...
                                    </div>
                                  )}
                                </>
                              ) : (
                                <span className={styles.finalStatus}>
                                  {payout.status.charAt(0).toUpperCase() +
                                    payout.status.slice(1)}
                                  {payout.adminNotes && (
                                    <div className={styles.adminNotes}>
                                      Note: {payout.adminNotes}
                                    </div>
                                  )}
                                </span>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className={styles.noData}>
                          No payout requests found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* Bank Accounts Tab */}
            {activeTab === "bank-accounts" && (
              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Bank Name</th>
                      <th>Account Number</th>
                      <th>Account Holder</th>
                      <th>IFSC Code</th>
                      <th>Branch</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bankAccounts.length > 0 ? (
                      bankAccounts.map((bank) => (
                        <tr key={bank.id}>
                          <td>
                            <div className={styles.userInfo}>
                              <strong>{bank.wallet.user.name}</strong>
                              <span>{bank.wallet.user.email}</span>
                            </div>
                          </td>
                          <td>{bank.bankName}</td>
                          <td>
                            {bank.decryptionError ? (
                              <span className={styles.error}>Decryption Error</span>
                            ) : (
                              bank.accountNumber
                            )}
                          </td>
                          <td>
                            {bank.decryptionError ? (
                              <span className={styles.error}>Decryption Error</span>
                            ) : (
                              bank.accountHolder
                            )}
                          </td>
                          <td>
                            {bank.decryptionError ? (
                              <span className={styles.error}>Decryption Error</span>
                            ) : (
                              bank.ifscCode
                            )}
                          </td>
                          <td>
                            {bank.decryptionError ? (
                              <span className={styles.error}>Decryption Error</span>
                            ) : (
                              bank.branch
                            )}
                          </td>
                          <td>
                            {bank.isVerified ? (
                              <span className={styles.verified}>Verified</span>
                            ) : (
                              <span className={styles.pending}>Pending</span>
                            )}
                          </td>
                          <td>{formatDate(bank.createdAt)}</td>
                          <td>
                            <div className={styles.actions}>
                              <button
                                onClick={() => updateStatus('bank', bank.id, bank.isVerified ? 'rejected' : 'verified')}
                                className={`${styles.actionButton} ${bank.isVerified ? styles.reject : styles.verify}`}
                                disabled={updatingId === bank.id}
                              >
                                {updatingId === bank.id ? (
                                  <FaSpinner className={styles.smallSpinner} />
                                ) : bank.isVerified ? (
                                  <FaTimes />
                                ) : (
                                  <FaCheck />
                                )}
                                {bank.isVerified ? 'Unverify' : 'Verify'}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="9" className={styles.noData}>
                          No bank accounts found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}

            {/* Transactions Tab */}
            {activeTab === "transactions" && (
              <div className={styles.tableContainer}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>User</th>
                      <th>Amount</th>
                      <th>Type</th>
                      <th>Description</th>
                      <th>Status</th>
                      <th>Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transactions.length > 0 ? (
                      transactions.map((transaction) => (
                        <tr key={transaction.id}>
                          <td>
                            <div className={styles.userInfo}>
                              <strong>{transaction.wallet.user.name}</strong>
                              <span>{transaction.wallet.user.email}</span>
                            </div>
                          </td>
                          <td className={styles.amount}>
                            {transaction.type === 'credit' ? '+' : '-'}
                            {formatCurrency(transaction.amount)}
                          </td>
                          <td>
                            <span className={`${styles.type} ${transaction.type === 'credit' ? styles.credit : styles.debit}`}>
                              {transaction.type}
                            </span>
                          </td>
                          <td>{transaction.description}</td>
                          <td>{getStatusBadge(transaction.status)}</td>
                          <td>{formatDate(transaction.createdAt)}</td>
                          <td>
                            <div className={styles.actions}>
                              <select
                                value={transaction.status}
                                onChange={(e) => updateStatus('transaction', transaction.id, e.target.value)}
                                className={styles.statusSelect}
                                disabled={updatingId === transaction.id}
                              >
                                <option value="pending">Pending</option>
                                <option value="credited">Credited</option>
                                <option value="completed">Completed</option>
                                <option value="rejected">Rejected</option>
                              </select>
                              {updatingId === transaction.id && (
                                <div className={styles.updating}>
                                  <FaSpinner className={styles.smallSpinner} />
                                  Updating...
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className={styles.noData}>
                          No transactions found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}

        {/* Pagination Controls */}
        {pagination.pages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={prevPage}
              disabled={pagination.page === 1}
              className={styles.paginationButton}
            >
              <FaChevronLeft />
              Previous
            </button>

            <div className={styles.pageNumbers}>
              {Array.from({ length: pagination.pages }, (_, i) => i + 1)
                .filter(page => {
                  // Show first 3, last 3, and pages around current
                  if (page === 1 || page === pagination.pages) return true;
                  if (Math.abs(page - pagination.page) <= 2) return true;
                  return false;
                })
                .map((page, index, array) => {
                  // Add ellipsis for gaps
                  const showEllipsis = index > 0 && page - array[index - 1] > 1;
                  return (
                    <span key={page}>
                      {showEllipsis && <span className={styles.ellipsis}>...</span>}
                      <button
                        onClick={() => goToPage(page)}
                        className={`${styles.pageButton} ${
                          pagination.page === page ? styles.activePage : ""
                        }`}
                      >
                        {page}
                      </button>
                    </span>
                  );
                })}
            </div>

            <button
              onClick={nextPage}
              disabled={pagination.page === pagination.pages}
              className={styles.paginationButton}
            >
              Next
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}