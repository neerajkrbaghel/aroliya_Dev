"use client";
import { useState, useEffect } from "react";
import styles from "./job.module.css";
import {
  FaSearch,
  FaFilter,
  FaEye,
  FaCheckCircle,
  FaTimesCircle,
  FaClock,
  FaFileAlt,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCalendar,
  FaDownload,
  FaSortAmountDown,
  FaSortAmountUp,
  FaChevronLeft,
  FaChevronRight,
  FaTrash,
  FaEdit,
  FaChartBar,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminApplications() {
  const [applications, setApplications] = useState([]);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [jobFilter, setJobFilter] = useState("all");

  // Sorting
  const [sortBy, setSortBy] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Selected application for detail view
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Stats
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    reviewed: 0,
    accepted: 0,
    rejected: 0,
  });

  // Available jobs (same as in application form)
  const jobs = [
    { id: "1", title: "Senior Frontend Developer (React/Next.js)" },
    { id: "2", title: "AI/ML Engineer – Data & Predictive Analytics" },
    { id: "3", title: "Senior Travel Consultant – Global Bookings" },
    { id: "4", title: "Virtual Executive Assistant" },
    { id: "5", title: "Data Analyst – Business Intelligence" },
    { id: "6", title: "UX/UI Designer – Digital Solutions" },
    { id: "7", title: "Travel Itinerary Specialist" },
    { id: "8", title: "Virtual Customer Support Agent" },
    { id: "9", title: "Backend Developer – Node.js & Express" },
    { id: "10", title: "Virtual Marketing Assistant" },
    { id: "11", title: "Travel Booking Coordinator" },
    { id: "12", title: "Full Stack Developer – React & Node" },
  ];

  useEffect(() => {
    fetchApplications();
  }, []);

  useEffect(() => {
    filterAndSortApplications();
    calculateStats();
  }, [applications, searchTerm, statusFilter, jobFilter, sortBy, sortOrder]);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/admin/applications");

      if (!response.ok) {
        throw new Error(`Failed to fetch applications: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setApplications(data.data || []);
      } else {
        throw new Error(data.error || "Failed to load applications");
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
      setError(error.message);
      setApplications([]);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSortApplications = () => {
    let filtered = [...applications];

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (app) =>
          app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          app.phone.includes(searchTerm) ||
          app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((app) => app.status === statusFilter);
    }

    // Apply job filter
    if (jobFilter !== "all") {
      filtered = filtered.filter((app) => app.jobId === jobFilter);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let valueA, valueB;

      switch (sortBy) {
        case "name":
          valueA = a.name.toLowerCase();
          valueB = b.name.toLowerCase();
          break;
        case "email":
          valueA = a.email.toLowerCase();
          valueB = b.email.toLowerCase();
          break;
        case "experience":
          valueA = a.experience;
          valueB = b.experience;
          break;
        case "createdAt":
        default:
          valueA = new Date(a.createdAt).getTime();
          valueB = new Date(b.createdAt).getTime();
          break;
      }

      if (sortOrder === "asc") {
        return valueA > valueB ? 1 : -1;
      } else {
        return valueA < valueB ? 1 : -1;
      }
    });

    setFilteredApplications(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  };

  const calculateStats = () => {
    const stats = {
      total: applications.length,
      pending: applications.filter((app) => app.status === "pending").length,
      reviewed: applications.filter((app) => app.status === "reviewed").length,
      accepted: applications.filter((app) => app.status === "accepted").length,
      rejected: applications.filter((app) => app.status === "rejected").length,
    };
    setStats(stats);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  const handleStatusUpdate = async (applicationId, newStatus) => {
    try {
      const response = await fetch("/api/admin/applications", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: applicationId, status: newStatus }),
      });

      const data = await response.json();

      if (response.ok) {
        // Update local state
        setApplications(
          applications.map((app) =>
            app.id === applicationId ? { ...app, status: newStatus } : app
          )
        );

        alert(`Application status updated to ${newStatus}`);
      } else {
        alert(data.error || "Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Failed to update status");
    }
  };

  const handleDeleteApplication = async (applicationId) => {
    if (!confirm("Are you sure you want to delete this application?")) return;

    try {
      const response = await fetch(`/api/admin/applications/${applicationId}`, {
        method: "DELETE",
      });

      const data = await response.json();

      if (response.ok) {
        setApplications(applications.filter((app) => app.id !== applicationId));
        alert("Application deleted successfully");
      } else {
        alert(data.error || "Failed to delete application");
      }
    } catch (error) {
      console.error("Error deleting application:", error);
      alert("Failed to delete application");
    }
  };

  const viewApplicationDetails = (application) => {
    setSelectedApplication(application);
    setShowDetailsModal(true);
  };

  const downloadResume = (resumeUrl) => {
    window.open(resumeUrl, "_blank");
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <FaClock className={styles.statusIconPending} />;
      case "reviewed":
        return <FaEye className={styles.statusIconReviewed} />;
      case "accepted":
        return <FaCheckCircle className={styles.statusIconAccepted} />;
      case "rejected":
        return <FaTimesCircle className={styles.statusIconRejected} />;
      default:
        return <FaClock />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "#f59e0b";
      case "reviewed":
        return "#3b82f6";
      case "accepted":
        return "#10b981";
      case "rejected":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Pagination
  const totalPages = Math.ceil(filteredApplications.length / itemsPerPage);
  const paginatedApplications = filteredApplications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Loading applications...</p>
      </div>
    );
  }

  return (
    <div className={styles.adminApplications}>
      {/* Header */}
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.headerContent}>
          <div className={styles.headerMain}>
            <h1 className={styles.headerTitle}>Job Applications</h1>
            <p className={styles.headerSubtitle}>
              Manage and review all job applications
            </p>
          </div>
          <button className={styles.refreshButton} onClick={fetchApplications}>
            Refresh
          </button>
        </div>
      </motion.header>

      {/* Error Message */}
      {error && (
        <motion.div
          className={styles.errorBanner}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaTimesCircle className={styles.errorIcon} />
          <span className={styles.errorMessage}>{error}</span>
          <button onClick={fetchApplications} className={styles.retryButton}>
            Try Again
          </button>
        </motion.div>
      )}

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <motion.div
          className={styles.statCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={styles.statIconWrapper}
            style={{ background: "linear-gradient(135deg, #3b82f6, #1e40af)" }}
          >
            <FaFileAlt className={styles.statIcon} />
          </div>
          <div className={styles.statContent}>
            <h3 className={styles.statNumber}>{stats.total}</h3>
            <p className={styles.statLabel}>Total Applications</p>
          </div>
        </motion.div>

        <motion.div
          className={styles.statCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div
            className={styles.statIconWrapper}
            style={{ background: "linear-gradient(135deg, #f59e0b, #d97706)" }}
          >
            <FaClock className={styles.statIcon} />
          </div>
          <div className={styles.statContent}>
            <h3 className={styles.statNumber}>{stats.pending}</h3>
            <p className={styles.statLabel}>Pending Review</p>
          </div>
        </motion.div>

        <motion.div
          className={styles.statCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <div
            className={styles.statIconWrapper}
            style={{ background: "linear-gradient(135deg, #10b981, #047857)" }}
          >
            <FaCheckCircle className={styles.statIcon} />
          </div>
          <div className={styles.statContent}>
            <h3 className={styles.statNumber}>{stats.accepted}</h3>
            <p className={styles.statLabel}>Accepted</p>
          </div>
        </motion.div>

        <motion.div
          className={styles.statCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <div
            className={styles.statIconWrapper}
            style={{ background: "linear-gradient(135deg, #ef4444, #b91c1c)" }}
          >
            <FaTimesCircle className={styles.statIcon} />
          </div>
          <div className={styles.statContent}>
            <h3 className={styles.statNumber}>{stats.rejected}</h3>
            <p className={styles.statLabel}>Rejected</p>
          </div>
        </motion.div>
      </div>

      {/* Filters */}
      <motion.div
        className={styles.filtersSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className={styles.searchContainer}>
          <div className={styles.searchBox}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by name, email, phone, or job title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>

        <div className={styles.filterControls}>
          <div className={styles.filterGroup}>
            <FaFilter className={styles.filterIcon} />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="reviewed">Reviewed</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <FaFilter className={styles.filterIcon} />
            <select
              value={jobFilter}
              onChange={(e) => setJobFilter(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">All Jobs</option>
              {jobs.map((job) => (
                <option key={job.id} value={job.id}>
                  {job.title}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.sortGroup}>
            <select
              value={sortBy}
              onChange={(e) => handleSort(e.target.value)}
              className={styles.sortSelect}
            >
              <option value="createdAt">Sort by Date</option>
              <option value="name">Sort by Name</option>
              <option value="email">Sort by Email</option>
              <option value="experience">Sort by Experience</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className={styles.sortOrderButton}
            >
              {sortOrder === "asc" ? <FaSortAmountUp /> : <FaSortAmountDown />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Applications Table */}
      <div className={styles.applicationsSection}>
        <div className={styles.tableHeader}>
          <h3>Applications ({filteredApplications.length})</h3>
          <span className={styles.tableInfo}>
            Showing {paginatedApplications.length} of{" "}
            {filteredApplications.length} applications
          </span>
        </div>

        <div className={styles.tableWrapper}>
          {paginatedApplications.length === 0 ? (
            <div className={styles.emptyState}>
              <FaFileAlt className={styles.emptyIcon} />
              <h4>No applications found</h4>
              <p>Try adjusting your search or filters</p>
            </div>
          ) : (
            <table className={styles.applicationsTable}>
              <thead>
                <tr>
                  <th>
                    <button
                      className={styles.sortableHeader}
                      onClick={() => handleSort("name")}
                    >
                      Applicant
                      {sortBy === "name" && (
                        <span className={styles.sortIndicator}>
                          {sortOrder === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </button>
                  </th>
                  <th>Job Position</th>
                  <th>
                    <button
                      className={styles.sortableHeader}
                      onClick={() => handleSort("experience")}
                    >
                      Experience
                      {sortBy === "experience" && (
                        <span className={styles.sortIndicator}>
                          {sortOrder === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </button>
                  </th>
                  <th>Status</th>
                  <th>
                    <button
                      className={styles.sortableHeader}
                      onClick={() => handleSort("createdAt")}
                    >
                      Date Applied
                      {sortBy === "createdAt" && (
                        <span className={styles.sortIndicator}>
                          {sortOrder === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </button>
                  </th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedApplications.map((application) => (
                  <motion.tr
                    key={application.id}
                    className={styles.tableRow}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ backgroundColor: "#f8fafc" }}
                  >
                    <td className={styles.tableCell}>
                      <div className={styles.applicantInfo}>
                        <div className={styles.applicantAvatar}>
                          <FaUser />
                        </div>
                        <div className={styles.applicantDetails}>
                          <strong className={styles.applicantName}>
                            {application.name}
                          </strong>
                          <div className={styles.applicantContact}>
                            <FaEnvelope className={styles.contactIcon} />
                            <span>{application.email}</span>
                          </div>
                          <div className={styles.applicantContact}>
                            <FaPhone className={styles.contactIcon} />
                            <span>{application.phone}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={styles.tableCell}>
                      <div className={styles.jobInfo}>
                        <span className={styles.jobTitle}>
                          {application.jobTitle}
                        </span>
                        <span className={styles.jobId}>
                          ID: {application.jobId}
                        </span>
                      </div>
                    </td>
                    <td className={styles.tableCell}>
                      <div className={styles.experienceBadge}>
                        {application.experience} years
                      </div>
                    </td>
                    <td className={styles.tableCell}>
                      <div className={styles.statusCell}>
                        <div
                          className={styles.statusBadge}
                          style={{
                            backgroundColor: getStatusColor(application.status),
                          }}
                        >
                          {getStatusIcon(application.status)}
                          <span className={styles.statusText}>
                            {application.status.charAt(0).toUpperCase() +
                              application.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className={styles.tableCell}>
                      <div className={styles.dateCell}>
                        <FaCalendar className={styles.dateIcon} />
                        {formatDate(application.createdAt)}
                      </div>
                    </td>
                    <td className={styles.tableCell}>
                      <div className={styles.actionCell}>
                        <button
                          className={styles.actionButton}
                          onClick={() => viewApplicationDetails(application)}
                          title="View Details"
                        >
                          <FaEye />
                        </button>
                        <button
                          className={styles.actionButton}
                          onClick={() => downloadResume(application.resumeUrl)}
                          title="Download Resume"
                        >
                          <FaDownload />
                        </button>
                        <div className={styles.statusDropdown}>
                          <select
                            value={application.status}
                            onChange={(e) =>
                              handleStatusUpdate(application.id, e.target.value)
                            }
                            className={styles.statusSelect}
                            style={{
                              color: getStatusColor(application.status),
                            }}
                          >
                            <option value="pending">Pending</option>
                            <option value="reviewed">Reviewed</option>
                            <option value="accepted">Accepted</option>
                            <option value="rejected">Rejected</option>
                          </select>
                        </div>
                        <button
                          className={`${styles.actionButton} ${styles.deleteButton}`}
                          onClick={() =>
                            handleDeleteApplication(application.id)
                          }
                          title="Delete Application"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={styles.pageButton}
            >
              <FaChevronLeft /> Previous
            </button>

            <div className={styles.pageNumbers}>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .slice(
                  Math.max(0, currentPage - 3),
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
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={styles.pageButton}
            >
              Next <FaChevronRight />
            </button>
          </div>
        )}
      </div>

      {/* Application Details Modal */}
      <AnimatePresence>
        {showDetailsModal && selectedApplication && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowDetailsModal(false)}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={styles.modalHeader}>
                <h2>Application Details</h2>
                <button
                  className={styles.modalCloseButton}
                  onClick={() => setShowDetailsModal(false)}
                >
                  ×
                </button>
              </div>

              <div className={styles.modalBody}>
                <div className={styles.modalSection}>
                  <h3>
                    <FaUser /> Personal Information
                  </h3>
                  <div className={styles.modalGrid}>
                    <div className={styles.modalItem}>
                      <strong>Full Name:</strong> {selectedApplication.name}
                    </div>
                    <div className={styles.modalItem}>
                      <strong>Email:</strong> {selectedApplication.email}
                    </div>
                    <div className={styles.modalItem}>
                      <strong>Phone:</strong> {selectedApplication.phone}
                    </div>
                    <div className={styles.modalItem}>
                      <strong>Years of Experience:</strong>{" "}
                      {selectedApplication.experience} years
                    </div>
                  </div>
                </div>

                <div className={styles.modalSection}>
                  <h3>
                    <FaBriefcase /> Job Information
                  </h3>
                  <div className={styles.modalGrid}>
                    <div className={styles.modalItem}>
                      <strong>Position:</strong> {selectedApplication.jobTitle}
                    </div>
                    <div className={styles.modalItem}>
                      <strong>Job ID:</strong> {selectedApplication.jobId}
                    </div>
                    <div className={styles.modalItem}>
                      <strong>Status:</strong>
                      <div
                        className={styles.modalStatusBadge}
                        style={{
                          backgroundColor: getStatusColor(
                            selectedApplication.status
                          ),
                        }}
                      >
                        {getStatusIcon(selectedApplication.status)}
                        <span>
                          {selectedApplication.status.charAt(0).toUpperCase() +
                            selectedApplication.status.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className={styles.modalItem}>
                      <strong>Applied On:</strong>{" "}
                      {formatDate(selectedApplication.createdAt)}
                    </div>
                  </div>
                </div>

                <div className={styles.modalSection}>
                  <h3>
                    <FaFileAlt /> Cover Letter
                  </h3>
                  <div className={styles.coverLetter}>
                    {selectedApplication.coverLetter ||
                      "No cover letter provided"}
                  </div>
                </div>

                <div className={styles.modalSection}>
                  <h3>
                    <FaDownload /> Resume
                  </h3>
                  <div className={styles.resumeSection}>
                    <button
                      className={styles.downloadResumeButton}
                      onClick={() =>
                        downloadResume(selectedApplication.resumeUrl)
                      }
                    >
                      <FaDownload /> Download Resume
                    </button>
                    <p className={styles.resumeInfo}>
                      Resume URL: {selectedApplication.resumeUrl}
                    </p>
                  </div>
                </div>

                <div className={styles.modalSection}>
                  <h3>Update Status</h3>
                  <div className={styles.statusUpdate}>
                    <select
                      value={selectedApplication.status}
                      onChange={(e) => {
                        handleStatusUpdate(
                          selectedApplication.id,
                          e.target.value
                        );
                        setSelectedApplication({
                          ...selectedApplication,
                          status: e.target.value,
                        });
                      }}
                      className={styles.statusUpdateSelect}
                      style={{
                        color: getStatusColor(selectedApplication.status),
                      }}
                    >
                      <option value="pending">Pending</option>
                      <option value="reviewed">Reviewed</option>
                      <option value="accepted">Accepted</option>
                      <option value="rejected">Rejected</option>
                    </select>
                    <button
                      className={styles.saveStatusButton}
                      onClick={() => {
                        handleStatusUpdate(
                          selectedApplication.id,
                          selectedApplication.status
                        );
                      }}
                    >
                      Save Status
                    </button>
                  </div>
                </div>
              </div>

              <div className={styles.modalFooter}>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className={styles.modalCloseAction}
                >
                  Close
                </button>
                <button
                  className={styles.modalDeleteButton}
                  onClick={() => {
                    if (
                      confirm(
                        "Are you sure you want to delete this application?"
                      )
                    ) {
                      handleDeleteApplication(selectedApplication.id);
                      setShowDetailsModal(false);
                    }
                  }}
                >
                  <FaTrash /> Delete Application
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
