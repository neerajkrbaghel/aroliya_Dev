"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./MyJobs.module.css";
import Banner from "../components/page";
import {
  FaBriefcase,
  FaSearch,
  FaFilter,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaClock,
  FaMoneyBillWave,
  FaUserFriends,
  FaCalendarAlt,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaDollarSign,
  FaRupeeSign,
  FaExchangeAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function MyJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [user, setUser] = useState(null);
  const [currency, setCurrency] = useState("USD"); // "USD" or "INR"
  const [exchangeRate, setExchangeRate] = useState(83.5);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const userObj = JSON.parse(userData);
        setUser(userObj);
        fetchMyJobs(userObj.id);
      } catch (parseError) {
        console.error("Error parsing user data:", parseError);
        setError("Failed to load user data");
        setLoading(false);
      }
    } else {
      setError("No user data found. Please log in.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  const fetchExchangeRate = async () => {
    try {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      if (response.ok) {
        const data = await response.json();
        setExchangeRate(data.rates.INR || 83.5);
      }
    } catch (error) {
      console.error("Error fetching exchange rate:", error);
      setExchangeRate(83.5);
    }
  };

  const fetchMyJobs = async (userId) => {
    setLoading(true);
    setError(null);
    await new Promise(r => setTimeout(r, 300));
    setJobs([
      { id: 1, title: "React Website Development", description: "Build a modern React-based website with responsive design", status: "active", budget: 5000, deadline: "2025-06-30", skills: ["React", "Node.js", "CSS"], _count: { proposals: 3 }, userId: 1 },
      { id: 2, title: "Mobile App UI Design", description: "Design beautiful UI for a cross-platform mobile application", status: "in progress", budget: 3000, deadline: "2025-05-15", skills: ["Figma", "UI/UX", "React Native"], _count: { proposals: 5 }, userId: 1 },
      { id: 3, title: "SEO Optimization", description: "Improve search engine rankings for existing website", status: "completed", budget: 1500, deadline: "2025-04-01", skills: ["SEO", "Content Writing", "Analytics"], _count: { proposals: 2 }, userId: 1 },
    ]);
    setLoading(false);
  };

  // Test API removed (no backend)

  const deleteJob = async (jobId) => {
    if (!confirm("Are you sure you want to delete this job?")) return;
    await new Promise(r => setTimeout(r, 200));
    setJobs(jobs.filter((job) => job.id !== jobId));
  };

  // FIXED: View job function with correct routing
  const viewJob = (job) => {
    // Get username from user data or job data
    const username =
      user?.username ||
      user?.name?.toLowerCase()?.replace(/\s+/g, "-") ||
      "user";

    // Route to the job details page
    router.push(`/find-work/${username}/${job.id}`);
  };

  // FIXED: Edit job function
  const editJob = (jobId) => {
    router.push(`/client-dashboard/edit-job/${jobId}`);
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || job.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "#10b981";
      case "in progress":
        return "#3b82f6";
      case "completed":
        return "#8b5cf6";
      case "cancelled":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <FaClock />;
      case "in progress":
        return <FaUserFriends />;
      case "completed":
        return <FaCheckCircle />;
      case "cancelled":
        return <FaTimesCircle />;
      default:
        return <FaBriefcase />;
    }
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return "Invalid date";
    }
  };

  // Currency conversion functions
  const convertCurrency = (amount) => {
    if (currency === "INR") {
      return Math.round(amount * exchangeRate);
    }
    return amount;
  };

  const formatCurrency = (amount) => {
    const convertedAmount = convertCurrency(amount);

    if (currency === "INR") {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(convertedAmount);
    } else {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(convertedAmount);
    }
  };

  const toggleCurrency = () => {
    setCurrency(currency === "USD" ? "INR" : "USD");
  };

  // Calculate total budget in current currency
  const calculateTotalBudget = () => {
    const totalUSD = jobs.reduce((sum, job) => sum + (job.budget || 0), 0);
    return convertCurrency(totalUSD);
  };

  // Debug removed (no backend)

  if (loading) {
    return (
      <div className={styles.myJobs}>
        <div className={styles.loadingState}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading your jobs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.myJobs}>
        <div className={styles.errorState}>
          <div className={styles.errorIcon}>
            <FaExclamationTriangle />
          </div>
          <h3>Unable to Load Jobs</h3>
          <p>{error}</p>
          <div className={styles.errorActions}>
            <button
              className={styles.retryBtn}
              onClick={() => user && fetchMyJobs(user.id)}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Banner />
      <motion.div
        className={styles.myJobs}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h1>My Jobs</h1>
            <p>Manage your job postings and track their progress</p>
          </div>
          <div className={styles.headerActions}>
            {/* Currency Converter */}
            <div className={styles.currencySection}>
              <div className={styles.currencyInfo}>
                <div className={styles.currencyDisplay}>
                  <span className={styles.currencyLabel}>Currency:</span>
                  <span className={styles.currencyValue}>
                    {currency === "USD" ? (
                      <FaDollarSign className={styles.currencyIcon} />
                    ) : (
                      <FaRupeeSign className={styles.currencyIcon} />
                    )}
                    {currency}
                  </span>
                </div>
                <span className={styles.exchangeRate}>
                  1 USD = {exchangeRate.toFixed(2)} INR
                </span>
              </div>
              <motion.button
                onClick={toggleCurrency}
                className={styles.currencyToggle}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={`Switch to ${currency === "USD" ? "INR" : "USD"}`}
              >
                <FaExchangeAlt />
                {currency === "USD" ? "Show in INR" : "Show in USD"}
              </motion.button>
            </div>

            {/* Post Job Button */}
            <motion.button
              className={styles.postJobBtn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/client-dashboard/post-job")}
            >
              <FaPlus />
              Post New Job
            </motion.button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className={styles.statsOverview}>
          <motion.div
            className={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className={styles.statIcon}
              style={{ backgroundColor: "#1e3a8a" }}
            >
              <FaBriefcase />
            </div>
            <div className={styles.statContent}>
              <h3>{jobs.length}</h3>
              <p>Total Jobs</p>
            </div>
          </motion.div>

          <motion.div
            className={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div
              className={styles.statIcon}
              style={{ backgroundColor: "#10b981" }}
            >
              <FaClock />
            </div>
            <div className={styles.statContent}>
              <h3>{jobs.filter((job) => job.status === "active").length}</h3>
              <p>Active Jobs</p>
            </div>
          </motion.div>

          <motion.div
            className={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div
              className={styles.statIcon}
              style={{ backgroundColor: "#3b82f6" }}
            >
              <FaUserFriends />
            </div>
            <div className={styles.statContent}>
              <h3>
                {jobs.reduce(
                  (acc, job) => acc + (job._count?.proposals || 0),
                  0
                )}
              </h3>
              <p>Total Proposals</p>
            </div>
          </motion.div>

          <motion.div
            className={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div
              className={styles.statIcon}
              style={{ backgroundColor: "#8b5cf6" }}
            >
              {currency === "USD" ? <FaDollarSign /> : <FaRupeeSign />}
            </div>
            <div className={styles.statContent}>
              <h3>{formatCurrency(calculateTotalBudget())}</h3>
              <p>Total Budget</p>
            </div>
          </motion.div>
        </div>


        {/* Filters and Search */}
        <div className={styles.filtersSection}>
          <div className={styles.searchBox}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search jobs by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.filterGroup}>
            <FaFilter className={styles.filterIcon} />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Jobs List */}
        <div className={styles.jobsSection}>
          {filteredJobs.length > 0 ? (
            <div className={styles.jobsGrid}>
              {filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  className={styles.jobCard}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.jobHeader}>
                    <h3 className={styles.jobTitle}>
                      {job.title || "Untitled Job"}
                    </h3>
                    <div
                      className={styles.statusBadge}
                      style={{ backgroundColor: getStatusColor(job.status) }}
                    >
                      {getStatusIcon(job.status)}
                      <span>{job.status || "draft"}</span>
                    </div>
                  </div>

                  <p className={styles.jobDescription}>
                    {job.description && job.description.length > 150
                      ? `${job.description.substring(0, 150)}...`
                      : job.description || "No description provided"}
                  </p>

                  <div className={styles.jobMeta}>
                    <div className={styles.metaItem}>
                      {currency === "USD" ? (
                        <FaDollarSign className={styles.currencyIconSmall} />
                      ) : (
                        <FaRupeeSign className={styles.currencyIconSmall} />
                      )}
                      <span>{formatCurrency(job.budget || 0)}</span>
                      {currency === "INR" && job.budget && (
                        <span className={styles.originalAmount}>
                          (${job.budget})
                        </span>
                      )}
                    </div>
                    <div className={styles.metaItem}>
                      <FaUserFriends />
                      <span>{job._count?.proposals || 0} proposals</span>
                    </div>
                    <div className={styles.metaItem}>
                      <FaCalendarAlt />
                      <span>{formatDate(job.deadline)}</span>
                    </div>
                  </div>

                  <div className={styles.skillsSection}>
                    {job.skills &&
                      job.skills.slice(0, 3).map((skill, index) => (
                        <span key={index} className={styles.skillTag}>
                          {skill}
                        </span>
                      ))}
                    {job.skills && job.skills.length > 3 && (
                      <span className={styles.moreSkills}>
                        +{job.skills.length - 3} more
                      </span>
                    )}
                    {(!job.skills || job.skills.length === 0) && (
                      <span className={styles.noSkills}>
                        No skills specified
                      </span>
                    )}
                  </div>

                  <div className={styles.jobActions}>
                    <button
                      className={styles.actionBtn}
                      onClick={() => viewJob(job)}
                    >
                      <FaEye />
                      View
                    </button>

                    <button
                      className={styles.actionBtn}
                      onClick={() => editJob(job.id)}
                    >
                      <FaEdit />
                      Edit
                    </button>

                    <button
                      className={`${styles.actionBtn} ${styles.deleteBtn}`}
                      onClick={() => deleteJob(job.id)}
                    >
                      <FaTrash />
                      Delete
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <FaBriefcase />
              </div>
              <h3>No jobs found</h3>
              <p>
                {searchTerm || statusFilter !== "all"
                  ? "Try adjusting your search or filters"
                  : "You haven't posted any jobs yet"}
              </p>
              {!searchTerm && statusFilter === "all" && (
                <button
                  className={styles.postJobBtn}
                  onClick={() => router.push("/client-dashboard/post-job")}
                >
                  <FaPlus />
                  Post Your First Job
                </button>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
