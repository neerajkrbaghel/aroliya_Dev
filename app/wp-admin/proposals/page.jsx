"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaSearch,
  FaFilter,
  FaEye,
  FaFileAlt,
  FaUser,
  FaDollarSign,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaHistory,
  FaConnectdevelop,
  FaProjectDiagram,
  FaCalendar,
  FaChartLine,
  FaDatabase,
  FaRocket,
  FaPlus,
  FaMinus,
  FaRedo,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaEdit,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import styles from "./AdminProposals.module.css";

export default function AdminProposalsPage() {
  const [user, setUser] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [filteredProposals, setFilteredProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [connectHistory, setConnectHistory] = useState([]);
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [stats, setStats] = useState({
    totalProposals: 0,
    pending: 0,
    accepted: 0,
    rejected: 0,
    totalConnectsUsed: 0,
    totalBidAmount: 0,
    averageBidAmount: 0,
    totalProjects: 0,
    activeProjects: 0,
    completedProjects: 0,
    totalPlatformConnects: 0,
    conversionRate: 0,
  });
  const router = useRouter();

  // Check for mobile
    // 🔒 Lock body scroll when modal is open
  useEffect(() => {
    if (showDetailsModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showDetailsModal]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Fetch data on component mount
  useEffect(() => {
    fetchInitialData();
  }, []);

  useEffect(() => {
    filterProposals();
    calculateStats();
  }, [proposals, searchTerm, filterStatus]);

  const fetchInitialData = async () => {
    try {
      setError("");
      setUser({
        name: "Admin User",
        email: "admin@example.com",
        role: "admin",
      });

      await fetchAllProposals();
      await fetchConnectHistory();
    } catch (error) {
      console.error("Error in fetchInitialData:", error);
      setError("Failed to load data. Please try again.");
    }
  };

  const fetchAllProposals = async () => {
    try {
      setLoading(true);
      // Add mock data for testing if API fails
      if (process.env.NODE_ENV === "development") {
        // Mock data for development
        const mockProposals = [
          {
            id: "1",
            job: {
              title: "Website Development",
              category: "Web Development",
              budget: 5000,
              user: {
                name: "Acme Corp",
                email: "contact@acmecorp.com",
              },
            },
            freelancer: {
              name: "John Smith",
              email: "john@example.com",
              profile: {
                skills: ["React", "Node.js", "MongoDB"],
              },
            },
            client: {
              name: "Acme Corp",
              email: "contact@acmecorp.com",
            },
            bidAmount: 4500,
            timeframe: 30,
            totalConnectsUsed: 2,
            status: "accepted",
            hasProject: true,
            projectStatus: "active",
            coverLetter:
              "I have extensive experience in building modern web applications with React and Node.js. I've completed similar projects for various clients and I'm confident I can deliver a high-quality website within the specified timeline.",
            createdAt: new Date().toISOString(),
          },
          {
            id: "2",
            job: {
              title: "Mobile App Design",
              category: "UI/UX Design",
              budget: 3000,
              user: {
                name: "Tech Startup",
                email: "hello@techstartup.com",
              },
            },
            freelancer: {
              name: "Sarah Johnson",
              email: "sarah@example.com",
              profile: {
                skills: ["Figma", "Adobe XD", "Prototyping"],
              },
            },
            client: {
              name: "Tech Startup",
              email: "hello@techstartup.com",
            },
            bidAmount: 2800,
            timeframe: 21,
            totalConnectsUsed: 1,
            status: "pending",
            hasProject: false,
            coverLetter:
              "As a UI/UX designer with 5 years of experience, I specialize in creating intuitive and beautiful mobile interfaces. I've worked on various mobile apps in the fintech and e-commerce sectors.",
            createdAt: new Date(Date.now() - 86400000).toISOString(),
          },
          {
            id: "3",
            job: {
              title: "E-commerce Platform",
              category: "Full Stack",
              budget: 8000,
              user: {
                name: "Fashion Store",
                email: "info@fashionstore.com",
              },
            },
            freelancer: {
              name: "Michael Chen",
              email: "michael@example.com",
              profile: {
                skills: ["PHP", "Laravel", "MySQL", "Vue.js"],
              },
            },
            client: {
              name: "Fashion Store",
              email: "info@fashionstore.com",
            },
            bidAmount: 7500,
            timeframe: 45,
            totalConnectsUsed: 3,
            status: "completed",
            hasProject: true,
            projectStatus: "completed",
            coverLetter:
              "I've built several e-commerce platforms from scratch using Laravel and Vue.js. I understand the complexities of payment integration, inventory management, and user experience that are crucial for e-commerce success.",
            createdAt: new Date(Date.now() - 172800000).toISOString(),
          },
        ];

        setProposals(mockProposals);
        setLoading(false);
        return;
      }

      const response = await fetch(
        "/api/proposals?limit=100&includeStats=true"
      );

      if (!response.ok) {
        throw new Error(`API responded with status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success && data.proposals) {
        setProposals(data.proposals);
        if (data.stats) {
          setStats((prev) => ({
            ...prev,
            totalProjects: data.stats.totalProjects || 0,
            totalPlatformConnects: data.stats.totalConnectsUsed || 0,
          }));
        }
      } else {
        throw new Error("Invalid response format from API");
      }
    } catch (error) {
      console.error("Error fetching proposals:", error);
      setError(`Failed to load proposals: ${error.message}`);
      setProposals([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchConnectHistory = async () => {
    try {
      const mockHistory = [
        {
          id: 1,
          type: "usage",
          amount: -1,
          description: "Proposal submission",
          userName: "John Doe",
          createdAt: new Date().toISOString(),
          projectDetails: {
            jobTitle: "Website Development",
            clientName: "Acme Corp",
          },
        },
        {
          id: 2,
          type: "bonus",
          amount: 5,
          description: "Welcome bonus",
          userName: "Jane Smith",
          createdAt: new Date(Date.now() - 86400000).toISOString(),
        },
        {
          id: 3,
          type: "usage",
          amount: -2,
          description: "Premium job application",
          userName: "Robert Wilson",
          createdAt: new Date(Date.now() - 172800000).toISOString(),
        },
      ];
      setConnectHistory(mockHistory);
    } catch (error) {
      console.error("Error fetching connect history:", error);
      setConnectHistory([]);
    }
  };

  const filterProposals = () => {
    let filtered = proposals;

    if (filterStatus !== "all") {
      filtered = filtered.filter(
        (proposal) => proposal.status === filterStatus
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (proposal) =>
          proposal.job?.title
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          proposal.freelancer?.name
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          proposal.client?.name
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          proposal.coverLetter
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          proposal.job?.category
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProposals(filtered);
    setCurrentPage(1);
  };

  const calculateStats = () => {
    const totalProposals = proposals.length;
    const pending = proposals.filter((p) => p.status === "pending").length;
    const accepted = proposals.filter((p) => p.status === "accepted").length;
    const rejected = proposals.filter((p) => p.status === "rejected").length;

    const totalConnectsUsed = proposals.reduce(
      (sum, p) => sum + (p.totalConnectsUsed || 1),
      0
    );

    const totalBidAmount = proposals.reduce(
      (sum, p) => sum + (p.bidAmount || 0),
      0
    );

    const averageBidAmount =
      proposals.length > 0 ? totalBidAmount / proposals.length : 0;

    const projectsFromProposals = proposals.filter((p) => p.hasProject);
    const activeProjects = projectsFromProposals.filter(
      (p) => p.projectStatus === "active"
    ).length;
    const completedProjects = projectsFromProposals.filter(
      (p) => p.projectStatus === "completed"
    ).length;

    const conversionRate =
      totalProposals > 0 ? (accepted / totalProposals) * 100 : 0;

    setStats((prev) => ({
      ...prev,
      totalProposals,
      pending,
      accepted,
      rejected,
      totalConnectsUsed,
      totalBidAmount,
      averageBidAmount: Math.round(averageBidAmount),
      activeProjects,
      completedProjects,
      conversionRate: Math.round(conversionRate * 100) / 100,
    }));
  };

  const getClientInfo = (proposal) => {
    return (
      proposal.client ||
      proposal.job?.user || { name: "Unknown", email: "Unknown" }
    );
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <FaClock className={styles.statusIconPending} />;
      case "accepted":
        return <FaCheckCircle className={styles.statusIconAccepted} />;
      case "rejected":
        return <FaTimesCircle className={styles.statusIconRejected} />;
      case "completed":
        return <FaCheckCircle className={styles.statusIconCompleted} />;
      default:
        return <FaExclamationTriangle className={styles.statusIconDefault} />;
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { className: styles.statusBadgePending, label: "Pending" },
      accepted: { className: styles.statusBadgeAccepted, label: "Accepted" },
      rejected: { className: styles.statusBadgeRejected, label: "Rejected" },
      completed: { className: styles.statusBadgeCompleted, label: "Completed" },
    };

    const config = statusConfig[status] || {
      className: styles.statusBadgeDefault,
      label: status,
    };

    return (
      <span className={`${styles.statusBadge} ${config.className}`}>
        {getStatusIcon(status)}
        <span className={styles.statusLabel}>{config.label}</span>
      </span>
    );
  };

  const handleViewDetails = async (proposal) => {
    setSelectedProposal(proposal);
    setShowDetailsModal(true);
  };

  const getSkillsArray = (skills) => {
    if (!skills) return [];
    if (Array.isArray(skills)) return skills;
    if (typeof skills === "string")
      return skills.split(",").map((skill) => skill.trim());
    return [];
  };

  const handleRetry = () => {
    setError("");
    setLoading(true);
    fetchInitialData();
  };

  const paginatedProposals = filteredProposals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredProposals.length / itemsPerPage);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <motion.div
          className={styles.loadingSpinner}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        ></motion.div>
        <p>Loading proposals and platform data...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.headerContent}>
          <div className={styles.headerMain}>
            <h1 className={styles.headerTitle}>Proposals Management</h1>
            <p className={styles.headerSubtitle}>
              Monitor and manage all platform proposals
            </p>
          </div>
          <div className={styles.headerActions}>
            <motion.button
              onClick={() => router.push("/wp-admin")}
              className={styles.backButton}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaArrowLeft /> Back to Dashboard
            </motion.button>
            <motion.button
              onClick={handleRetry}
              className={styles.refreshButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Refresh data"
            >
              <FaRedo /> Refresh
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Error Message */}
      {error && (
        <motion.div
          className={styles.errorBanner}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <FaExclamationTriangle className={styles.errorIcon} />
          <span className={styles.errorMessage}>{error}</span>
          <button onClick={handleRetry} className={styles.retryButton}>
            <FaRedo /> Try Again
          </button>
        </motion.div>
      )}

      {/* Stats Cards */}
      <div className={styles.statsGrid}>
        <motion.div
          className={styles.statCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className={styles.statIconWrapper}>
            <FaFileAlt className={styles.statIcon} />
          </div>
          <div className={styles.statContent}>
            <h3 className={styles.statNumber}>{stats.totalProposals}</h3>
            <p className={styles.statLabel}>Total Proposals</p>
          </div>
        </motion.div>

        <motion.div
          className={styles.statCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={styles.statIconWrapper}>
            <FaProjectDiagram className={styles.statIcon} />
          </div>
          <div className={styles.statContent}>
            <h3 className={styles.statNumber}>{stats.totalProjects}</h3>
            <p className={styles.statLabel}>Total Projects</p>
          </div>
        </motion.div>

        <motion.div
          className={styles.statCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={styles.statIconWrapper}>
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
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className={styles.statIconWrapper}>
            <FaConnectdevelop className={styles.statIcon} />
          </div>
          <div className={styles.statContent}>
            <h3 className={styles.statNumber}>{stats.totalPlatformConnects}</h3>
            <p className={styles.statLabel}>Connects Used</p>
          </div>
        </motion.div>
      </div>

      {/* Additional Stats */}
      <motion.div
        className={styles.secondaryStats}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className={styles.secondaryStat}>
          <FaRocket className={styles.secondaryStatIcon} />
          <div className={styles.secondaryStatContent}>
            <span className={styles.secondaryStatNumber}>
              {stats.activeProjects}
            </span>
            <span className={styles.secondaryStatLabel}>Active Projects</span>
          </div>
        </div>
        <div className={styles.secondaryStat}>
          <FaChartLine className={styles.secondaryStatIcon} />
          <div className={styles.secondaryStatContent}>
            <span className={styles.secondaryStatNumber}>
              {stats.conversionRate}%
            </span>
            <span className={styles.secondaryStatLabel}>Conversion Rate</span>
          </div>
        </div>
        <div className={styles.secondaryStat}>
          <FaClock className={styles.secondaryStatIcon} />
          <div className={styles.secondaryStatContent}>
            <span className={styles.secondaryStatNumber}>{stats.pending}</span>
            <span className={styles.secondaryStatLabel}>Pending Review</span>
          </div>
        </div>
        <div className={styles.secondaryStat}>
          <FaDatabase className={styles.secondaryStatIcon} />
          <div className={styles.secondaryStatContent}>
            <span className={styles.secondaryStatNumber}>
              {stats.totalConnectsUsed}
            </span>
            <span className={styles.secondaryStatLabel}>Proposal Connects</span>
          </div>
        </div>
      </motion.div>

      <div className={styles.contentWrapper}>
        {/* Main Content */}
        <div className={styles.mainContent}>
          {/* Filters */}
          <motion.div
            className={styles.filtersSection}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.searchContainer}>
              <div className={styles.searchBox}>
                <FaSearch className={styles.searchIcon} />
                <input
                  type="text"
                  placeholder="Search proposals..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
              </div>
            </div>
            <div className={styles.filterContainer}>
              <div className={styles.filterGroup}>
                <FaFilter className={styles.filterIcon} />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className={styles.filterSelect}
                >
                  <option value="all">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="accepted">Accepted</option>
                  <option value="rejected">Rejected</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Results Info */}
          <div className={styles.resultsInfo}>
            <h3 className={styles.sectionTitle}>Proposals</h3>
            <span className={styles.resultCount}>
              Showing {filteredProposals.length} of {proposals.length} proposals
            </span>
          </div>

          {/* Desktop Table View - ALWAYS VISIBLE ON DESKTOP */}
          <div className={styles.desktopView}>
            <div className={styles.tableContainer}>
              <div className={styles.tableResponsive}>
                <table className={styles.proposalsTable}>
                  <thead>
                    <tr>
                      <th className={styles.tableHeader}>Job Title</th>
                      <th className={styles.tableHeader}>Freelancer</th>
                      <th className={styles.tableHeader}>Client</th>
                      <th className={styles.tableHeader}>Bid Amount</th>
                      <th className={styles.tableHeader}>Status</th>
                      <th className={styles.tableHeader}>Date</th>
                      <th className={styles.tableHeader}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedProposals.length === 0 ? (
                      <tr>
                        <td colSpan="7" className={styles.emptyState}>
                          <div className={styles.emptyContent}>
                            <FaFileAlt className={styles.emptyIcon} />
                            <h4>No proposals found</h4>
                            <p>Try adjusting your search criteria or filters</p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      paginatedProposals.map((proposal) => {
                        const clientInfo = getClientInfo(proposal);
                        return (
                          <tr key={proposal.id} className={styles.tableRow}>
                            <td className={styles.tableCell}>
                              <div className={styles.jobInfo}>
                                <span className={styles.jobTitle}>
                                  {proposal.job?.title || "Unknown Job"}
                                </span>
                                <span className={styles.jobCategory}>
                                  {proposal.job?.category || "Uncategorized"}
                                </span>
                              </div>
                            </td>
                            <td className={styles.tableCell}>
                              <div className={styles.freelancerInfo}>
                                <span className={styles.freelancerName}>
                                  {proposal.freelancer?.name || "Unknown"}
                                </span>
                                <span className={styles.freelancerEmail}>
                                  {proposal.freelancer?.email || "No email"}
                                </span>
                              </div>
                            </td>
                            <td className={styles.tableCell}>
                              <div className={styles.clientInfo}>
                                <span className={styles.clientName}>
                                  {clientInfo.name || "Unknown"}
                                </span>
                                <span className={styles.clientEmail}>
                                  {clientInfo.email || "No email"}
                                </span>
                              </div>
                            </td>
                            <td className={styles.tableCell}>
                              <div className={styles.bidAmount}>
                                <FaDollarSign className={styles.bidIcon} />
                                <span>
                                  ${proposal.bidAmount?.toLocaleString()}
                                </span>
                              </div>
                            </td>
                            <td className={styles.tableCell}>
                              <div className={styles.statusCell}>
                                {getStatusBadge(proposal.status)}
                              </div>
                            </td>
                            <td className={styles.tableCell}>
                              <div className={styles.dateCell}>
                                <FaCalendar className={styles.dateIcon} />
                                {new Date(
                                  proposal.createdAt
                                ).toLocaleDateString()}
                              </div>
                            </td>
                            <td className={styles.tableCell}>
                              <div className={styles.actionCell}>
                                <motion.button
                                  onClick={() => handleViewDetails(proposal)}
                                  className={styles.viewButton}
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                >
                                  <FaEye /> View
                                </motion.button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {filteredProposals.length > 0 && (
                <div className={styles.pagination}>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={styles.pageButton}
                  >
                    <FaChevronLeft /> Previous
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
          </div>

          {/* Mobile Cards View - ONLY ON MOBILE */}
          <div className={styles.mobileView}>
            <div className={styles.cardsContainer}>
              {paginatedProposals.length === 0 ? (
                <div className={styles.emptyStateCard}>
                  <FaFileAlt className={styles.emptyCardIcon} />
                  <h4>No proposals found</h4>
                  <p>Try adjusting your search criteria or filters</p>
                </div>
              ) : (
                <div className={styles.cardsList}>
                  {paginatedProposals.map((proposal) => {
                    const clientInfo = getClientInfo(proposal);
                    return (
                      <div key={proposal.id} className={styles.proposalCard}>
                        <div className={styles.cardHeader}>
                          <div className={styles.cardTitle}>
                            <h3>{proposal.job?.title || "Unknown Job"}</h3>
                            <span className={styles.cardCategory}>
                              {proposal.job?.category || "Uncategorized"}
                            </span>
                          </div>
                          <div className={styles.cardBadge}>
                            {getStatusBadge(proposal.status)}
                          </div>
                        </div>

                        <div className={styles.cardBody}>
                          <div className={styles.cardRow}>
                            <FaUser className={styles.cardIcon} />
                            <div className={styles.cardContent}>
                              <span className={styles.cardLabel}>
                                Freelancer:
                              </span>
                              <span className={styles.cardValue}>
                                {proposal.freelancer?.name || "Unknown"}
                              </span>
                            </div>
                          </div>

                          <div className={styles.cardRow}>
                            <FaBuilding className={styles.cardIcon} />
                            <div className={styles.cardContent}>
                              <span className={styles.cardLabel}>Client:</span>
                              <span className={styles.cardValue}>
                                {clientInfo.name || "Unknown"}
                              </span>
                            </div>
                          </div>

                          <div className={styles.cardRow}>
                            <FaDollarSign className={styles.cardIcon} />
                            <div className={styles.cardContent}>
                              <span className={styles.cardLabel}>Bid:</span>
                              <span className={styles.cardValue}>
                                ${proposal.bidAmount?.toLocaleString()}
                              </span>
                            </div>
                          </div>

                          <div className={styles.cardRow}>
                            <FaCalendar className={styles.cardIcon} />
                            <div className={styles.cardContent}>
                              <span className={styles.cardLabel}>Date:</span>
                              <span className={styles.cardValue}>
                                {new Date(
                                  proposal.createdAt
                                ).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className={styles.cardFooter}>
                          <motion.button
                            onClick={() => handleViewDetails(proposal)}
                            className={styles.cardViewButton}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <FaEye /> View Details
                          </motion.button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <motion.aside
          className={styles.sidebar}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Connect History */}
          <div className={styles.sidebarSection}>
            <div className={styles.sidebarHeader}>
              <FaHistory className={styles.sidebarIcon} />
              <h3>Recent Connect Activity</h3>
            </div>
            <div className={styles.historyList}>
              {connectHistory.length === 0 ? (
                <div className={styles.emptyHistory}>
                  <FaConnectdevelop className={styles.emptyHistoryIcon} />
                  <p>No connect activity yet</p>
                </div>
              ) : (
                connectHistory.slice(0, 5).map((item) => (
                  <div key={item.id} className={styles.historyItem}>
                    <div
                      className={`${styles.historyIcon} ${
                        item.amount > 0 ? styles.positive : styles.negative
                      }`}
                    >
                      {item.amount > 0 ? <FaPlus /> : <FaMinus />}
                    </div>
                    <div className={styles.historyContent}>
                      <div className={styles.historyDescription}>
                        {item.description}
                      </div>
                      <div className={styles.historyMeta}>
                        <span className={styles.historyUser}>
                          {item.userName}
                        </span>
                        <span className={styles.historyDate}>
                          {new Date(item.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`${styles.historyAmount} ${
                        item.amount > 0
                          ? styles.amountPositive
                          : styles.amountNegative
                      }`}
                    >
                      {item.amount > 0 ? "+" : ""}
                      {item.amount}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Platform Summary */}
          <div className={styles.sidebarSection}>
            <div className={styles.sidebarHeader}>
              <FaChartLine className={styles.sidebarIcon} />
              <h3>Platform Summary</h3>
            </div>
            <div className={styles.summaryList}>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Active Projects:</span>
                <span className={styles.summaryValue}>
                  {stats.activeProjects}
                </span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Completed Projects:</span>
                <span className={styles.summaryValue}>
                  {stats.completedProjects}
                </span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Total Connects:</span>
                <span className={styles.summaryValue}>
                  {stats.totalPlatformConnects}
                </span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryLabel}>Conversion Rate:</span>
                <span className={styles.summaryValue}>
                  {stats.conversionRate}%
                </span>
              </div>
            </div>
          </div>
        </motion.aside>
      </div>

      {/* Proposal Details Modal */}
      <AnimatePresence>
        {showDetailsModal && selectedProposal && (
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
                <h2>Proposal Details</h2>
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
                    <FaProjectDiagram /> Job Information
                  </h3>
                  <div className={styles.modalGrid}>
                    <div className={styles.modalItem}>
                      <strong>Job Title:</strong> {selectedProposal.job?.title}
                    </div>
                    <div className={styles.modalItem}>
                      <strong>Category:</strong>{" "}
                      {selectedProposal.job?.category}
                    </div>
                    <div className={styles.modalItem}>
                      <strong>Budget:</strong> $
                      {selectedProposal.job?.budget?.toLocaleString()}
                    </div>
                  </div>
                </div>

                <div className={styles.modalSection}>
                  <h3>
                    <FaBuilding /> Client Information
                  </h3>
                  <div className={styles.modalGrid}>
                    <div className={styles.modalItem}>
                      <strong>Name:</strong>{" "}
                      {getClientInfo(selectedProposal).name}
                    </div>
                    <div className={styles.modalItem}>
                      <strong>Email:</strong>{" "}
                      {getClientInfo(selectedProposal).email}
                    </div>
                  </div>
                </div>

                <div className={styles.modalSection}>
                  <h3>
                    <FaUser /> Freelancer Information
                  </h3>
                  <div className={styles.modalGrid}>
                    <div className={styles.modalItem}>
                      <strong>Name:</strong> {selectedProposal.freelancer?.name}
                    </div>
                    <div className={styles.modalItem}>
                      <strong>Email:</strong>{" "}
                      {selectedProposal.freelancer?.email}
                    </div>
                  </div>
                </div>

                <div className={styles.modalSection}>
                  <h3>
                    <FaFileAlt /> Proposal Details
                  </h3>
                  <div className={styles.modalGrid}>
                    <div className={styles.modalItem}>
                      <strong>Bid Amount:</strong> $
                      {selectedProposal.bidAmount?.toLocaleString()}
                    </div>
                    <div className={styles.modalItem}>
                      <strong>Timeline:</strong> {selectedProposal.timeframe}{" "}
                      days
                    </div>
                    <div className={styles.modalItem}>
                      <strong>Connects Used:</strong>{" "}
                      {selectedProposal.totalConnectsUsed}
                    </div>
                    <div className={styles.modalItem}>
                      <strong>Status:</strong>{" "}
                      {getStatusBadge(selectedProposal.status)}
                    </div>
                  </div>
                </div>

                <div className={styles.modalSection}>
                  <h3>
                    <FaEdit /> Cover Letter
                  </h3>
                  <div className={styles.coverLetter}>
                    {selectedProposal.coverLetter}
                  </div>
                </div>
              </div>

              <div className={styles.modalFooter}>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className={styles.modalActionButton}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
