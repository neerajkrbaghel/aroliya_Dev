"use client";
import { useEffect, useState, useMemo } from "react";
import styles from "./form.module.css";
import {
  MdMessage,
  MdSearch,
  MdCalendarToday,
  MdClose,
  MdDelete,
  MdVisibility,
  MdCheckCircle,
  MdPending,
  MdFilterList,
  MdRefresh,
  MdDownload,
  MdPerson,
  MdEmail,
  MdPhone,
  MdCategory,
  MdDateRange,
  MdArrowBack,
  MdArrowForward,
  MdFirstPage,
  MdLastPage,
  MdMoreVert,
} from "react-icons/md";

export default function FormSubmissions() {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [selectedFormId, setSelectedFormId] = useState(null);
  const [stats, setStats] = useState({ total: 0, pending: 0, done: 0 });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9); // Show 9 cards (3x3 grid)

  // Fetch forms
  useEffect(() => {
    fetchForms();
  }, []);

  // Calculate stats
  useEffect(() => {
    if (forms.length > 0) {
      const total = forms.length;
      const pending = forms.filter((f) => f.status === "pending").length;
      const done = forms.filter((f) => f.status === "done").length;
      setStats({ total, pending, done });
    }
  }, [forms]);

  const fetchForms = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/formSubmit");
      const data = await res.json();
      setForms(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setForms([]);
    } finally {
      setLoading(false);
    }
  };

  // Handle View Message
  const handleViewMessage = (message, id) => {
    setSelectedMessage(message || "No message provided");
    setSelectedFormId(id);
    setIsModalOpen(true);
  };

  // Handle Delete
  const handleDelete = async (id, name) => {
    if (!confirm(`Delete submission from ${name}?`)) return;

    try {
      const res = await fetch(`/api/formSubmit?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setForms(forms.filter((form) => form.id !== id));
        // Reset to first page if current page becomes empty
        const totalPages = Math.ceil((forms.length - 1) / itemsPerPage);
        if (currentPage > totalPages) {
          setCurrentPage(totalPages || 1);
        }
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting submission");
    }
  };

  // Toggle status
  const toggleStatus = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "pending" ? "done" : "pending";
      const res = await fetch(`/api/formSubmit/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        setForms((prev) =>
          prev.map((f) => (f.id === id ? { ...f, status: newStatus } : f))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Export CSV
  const exportToCSV = () => {
    const headers = [
      "ID",
      "Name",
      "Email",
      "Phone",
      "Service",
      "Message",
      "Date",
      "Status",
    ];
    const csvData = forms.map((form) => [
      form.id,
      `"${form.name}"`,
      `"${form.email}"`,
      `"${form.phone || ""}"`,
      `"${form.serviceCategory || ""}"`,
      `"${form.message || ""}"`,
      new Date(form.createdAt).toLocaleDateString("en-IN"),
      form.status,
    ]);

    const csvContent = [
      headers.join(","),
      ...csvData.map((row) => row.join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `form-submissions-${
      new Date().toISOString().split("T")[0]
    }.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  // Filter forms
  const filteredForms = useMemo(() => {
    return forms.filter((form) => {
      const searchLower = search.toLowerCase();
      const matchesSearch =
        form.name?.toLowerCase().includes(searchLower) ||
        form.email?.toLowerCase().includes(searchLower) ||
        form.phone?.toLowerCase().includes(searchLower) ||
        form.serviceCategory?.toLowerCase().includes(searchLower) ||
        form.message?.toLowerCase().includes(searchLower);

      const matchesDate = dateFilter
        ? new Date(form.createdAt).toISOString().split("T")[0] === dateFilter
        : true;

      return matchesSearch && matchesDate;
    });
  }, [forms, search, dateFilter]);

  // Pagination calculations
  const totalItems = filteredForms.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current page items
  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredForms.slice(startIndex, endIndex);
  }, [filteredForms, currentPage, itemsPerPage]);

  // Format date and time
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  // Pagination handlers
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToFirstPage = () => goToPage(1);
  const goToLastPage = () => goToPage(totalPages);
  const goToPrevPage = () => goToPage(currentPage - 1);
  const goToNextPage = () => goToPage(currentPage + 1);

  // Generate page numbers
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

      if (endPage - startPage + 1 < maxPagesToShow) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMessage("");
    setSelectedFormId(null);
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Loading submissions...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerMain}>
          <div className={styles.headerTitle}>
            <h1>Form Submissions</h1>
            <p>Manage all contact form submissions</p>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.refreshBtn} onClick={fetchForms}>
              <MdRefresh /> <span>Refresh</span>
            </button>
            <button className={styles.exportBtn} onClick={exportToCSV}>
              <MdDownload /> <span>Export</span>
            </button>
          </div>
        </div>
      </header>

      {/* Stats Cards with Horizontal Scroll */}
      <div className={styles.statsSection}>
        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <MdMessage />
            </div>
            <div className={styles.statContent}>
              <h3>{stats.total}</h3>
              <p>Total Submissions</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <MdPending />
            </div>
            <div className={styles.statContent}>
              <h3>{stats.pending}</h3>
              <p>Pending Review</p>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <MdCheckCircle />
            </div>
            <div className={styles.statContent}>
              <h3>{stats.done}</h3>
              <p>Completed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className={styles.filtersSection}>
        <div className={styles.filtersHeader}>
          <h3>
            <MdFilterList /> Filters
          </h3>
          <button
            className={styles.clearFiltersBtn}
            onClick={() => {
              setSearch("");
              setDateFilter("");
              setCurrentPage(1);
            }}
          >
            Clear All
          </button>
        </div>

        <div className={styles.filtersGrid}>
          <div className={styles.filterGroup}>
            <label>
              <MdSearch /> Search
            </label>
            <input
              type="text"
              placeholder="Search by name, email, phone, message..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterGroup}>
            <label>
              <MdCalendarToday /> Filter by Date
            </label>
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => {
                setDateFilter(e.target.value);
                setCurrentPage(1);
              }}
              className={styles.dateInput}
            />
          </div>
        </div>
      </div>

      {/* Results Info */}
      <div className={styles.resultsInfo}>
        <div>
          <h3>
            Showing {currentItems.length} of {filteredForms.length} submissions
          </h3>
          <p>
            Page {currentPage} of {totalPages}
          </p>
        </div>

        <div className={styles.itemsPerPage}>
          <label>Show:</label>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
            className={styles.pageSelect}
          >
            <option value="6">6 per page</option>
            <option value="9">9 per page</option>
            <option value="12">12 per page</option>
            <option value="15">15 per page</option>
          </select>
        </div>
      </div>

      {/* Empty State */}
      {filteredForms.length === 0 ? (
        <div className={styles.emptyState}>
          <MdMessage className={styles.emptyIcon} />
          <h4>No submissions found</h4>
          <p>Try adjusting your search or filters</p>
          <button
            className={styles.resetBtn}
            onClick={() => {
              setSearch("");
              setDateFilter("");
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <>
          {/* Cards Container */}
          <div className={styles.cardsContainer}>
            {currentItems.map((submission) => (
              <div key={submission.id} className={styles.submissionCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardUser}>
                    <div className={styles.avatar}>
                      {submission.name.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.userInfo}>
                      <h4>{submission.name}</h4>
                      <p className={styles.cardEmail}>{submission.email}</p>
                    </div>
                  </div>
                  <span className={styles.cardId}>#{submission.id}</span>
                </div>

                <div className={styles.cardContent}>
                  <div className={styles.cardRow}>
                    <span className={styles.rowIcon}>
                      <MdPhone />
                    </span>
                    <div>
                      <label>Phone</label>
                      <span>{submission.phone || "Not provided"}</span>
                    </div>
                  </div>

                  <div className={styles.cardRow}>
                    <span className={styles.rowIcon}>
                      <MdCategory />
                    </span>
                    <div>
                      <label>Service</label>
                      <span>
                        {submission.serviceCategory || "General Inquiry"}
                      </span>
                    </div>
                  </div>

                  <div className={styles.cardRow}>
                    <span className={styles.rowIcon}>
                      <MdDateRange />
                    </span>
                    <div>
                      <label>Submitted</label>
                      <span>
                        {formatDate(submission.createdAt)} at{" "}
                        {formatTime(submission.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <button
                    className={`${styles.statusBadge} ${
                      submission.status === "done"
                        ? styles.done
                        : styles.pending
                    }`}
                    onClick={() =>
                      toggleStatus(submission.id, submission.status)
                    }
                  >
                    {submission.status === "done" ? (
                      <>
                        <MdCheckCircle /> Completed
                      </>
                    ) : (
                      <>
                        <MdPending /> Pending
                      </>
                    )}
                  </button>

                  <div className={styles.cardActions}>
                    <button
                      className={styles.viewBtn}
                      onClick={() =>
                        handleViewMessage(submission.message, submission.id)
                      }
                      title="View Message"
                    >
                      <MdVisibility />
                    </button>
                    <button
                      className={styles.deleteBtn}
                      onClick={() =>
                        handleDelete(submission.id, submission.name)
                      }
                      title="Delete"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className={styles.paginationContainer}>
              <div className={styles.paginationInfo}>
                Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, totalItems)} of{" "}
                {totalItems} entries
              </div>

              <div className={styles.paginationControls}>
                <button
                  className={`${styles.pageBtn} ${styles.firstPage}`}
                  onClick={goToFirstPage}
                  disabled={currentPage === 1}
                >
                  <MdFirstPage />
                </button>

                <button
                  className={`${styles.pageBtn} ${styles.prevPage}`}
                  onClick={goToPrevPage}
                  disabled={currentPage === 1}
                >
                  <MdArrowBack />
                </button>

                <div className={styles.pageNumbers}>
                  {getPageNumbers().map((page) => (
                    <button
                      key={page}
                      className={`${styles.pageBtn} ${styles.numberBtn} ${
                        page === currentPage ? styles.active : ""
                      }`}
                      onClick={() => goToPage(page)}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button
                  className={`${styles.pageBtn} ${styles.nextPage}`}
                  onClick={goToNextPage}
                  disabled={currentPage === totalPages}
                >
                  <MdArrowForward />
                </button>

                <button
                  className={`${styles.pageBtn} ${styles.lastPage}`}
                  onClick={goToLastPage}
                  disabled={currentPage === totalPages}
                >
                  <MdLastPage />
                </button>
              </div>

              <div className={styles.pageJump}>
                <span>Go to:</span>
                <input
                  type="number"
                  min="1"
                  max={totalPages}
                  defaultValue={currentPage}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      const page = parseInt(e.target.value);
                      if (page >= 1 && page <= totalPages) {
                        goToPage(page);
                        e.target.value = "";
                      }
                    }
                  }}
                  className={styles.pageInput}
                  placeholder={currentPage.toString()}
                />
              </div>
            </div>
          )}
        </>
      )}

      {/* Message Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.modalTitle}>
                <MdMessage />
                <div>
                  <h3>Message Details</h3>
                  <p>Submission #{selectedFormId}</p>
                </div>
              </div>
              <button className={styles.closeBtn} onClick={closeModal}>
                <MdClose />
              </button>
            </div>

            <div className={styles.modalContent}>
              <div className={styles.messageContent}>
                <h4>User Message:</h4>
                <div className={styles.messageText}>{selectedMessage}</div>
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                className={styles.copyBtn}
                onClick={() => {
                  navigator.clipboard.writeText(selectedMessage);
                  alert("Message copied to clipboard!");
                }}
              >
                Copy Message
              </button>
              <button className={styles.closeModalBtn} onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
