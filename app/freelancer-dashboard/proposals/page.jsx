"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Banner from "../components/page";
import {
  FaSearch,
  FaFilter,
  FaEye,
  FaCheck,
  FaTimes,
  FaComment,
  FaUser,
  FaDollarSign,
  FaClock,
  FaCalendar,
  FaStar,
  FaBriefcase,
  FaEnvelope,
  FaPaperPlane,
  FaFileAlt,
  FaCheckCircle,
  FaHourglassHalf,
  FaChartLine,
  FaEdit,
  FaTrash,
  FaExclamationTriangle,
} from "react-icons/fa";
import styles from "./FreelancerProposals.module.css";

export default function FreelancerProposalsPage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [filteredProposals, setFilteredProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedProposal, setSelectedProposal] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [actionLoading, setActionLoading] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    accepted: 0,
    rejected: 0,
  });
  const router = useRouter();

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  useEffect(() => {
    filterProposals();
  }, [proposals, searchTerm, filterStatus]);

  useEffect(() => {
    calculateStats();
  }, [proposals]);

  const fetchCurrentUser = async () => {
    const mockUser = { id: 1, name: "Freelancer User", email: "freelancer@example.com", role: "freelancer" };
    setCurrentUser(mockUser);
    await fetchFreelancerProposals(1);
  };

  const fetchFreelancerProposals = async (userId) => {
    setLoading(true);
    const mockProposals = [
      {
        id: 1, status: "pending", bidAmount: 5000, timeframe: 30,
        createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
        coverLetter: "I am very interested in this project and believe my skills are a great match...",
        job: { id: 1, title: "Full Stack Web Development", category: "web-development", budget: 15000, description: "Looking for an experienced full stack developer...", skills: "React, Node.js, MongoDB", userId: 2 },
        client: { id: 2, name: "Client A" },
      },
      {
        id: 2, status: "accepted", bidAmount: 8000, timeframe: 45,
        createdAt: new Date(Date.now() - 86400000 * 7).toISOString(),
        coverLetter: "I have extensive experience in mobile app development...",
        job: { id: 2, title: "Mobile App Development", category: "mobile-development", budget: 20000, description: "Need a cross-platform mobile app...", skills: "React Native, Firebase", userId: 3 },
        client: { id: 3, name: "Client B" },
      },
      {
        id: 3, status: "rejected", bidAmount: 3000, timeframe: 14,
        createdAt: new Date(Date.now() - 86400000 * 14).toISOString(),
        coverLetter: "I can deliver this project quickly...",
        job: { id: 3, title: "Logo Design", category: "graphic-design", budget: 5000, description: "Need a modern logo...", skills: "Adobe Illustrator, Photoshop", userId: 4 },
        client: { id: 4, name: "Client C" },
      },
    ];
    setProposals(mockProposals);
    setLoading(false);
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
          proposal.job?.category
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          proposal.coverLetter
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          proposal.client?.name
            ?.toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProposals(filtered);
  };

  const calculateStats = () => {
    const stats = {
      total: proposals.length,
      pending: proposals.filter((p) => p.status === "pending").length,
      accepted: proposals.filter((p) => p.status === "accepted").length,
      rejected: proposals.filter((p) => p.status === "rejected").length,
    };
    setStats(stats);
  };

  const handleViewDetails = (proposal) => {
    setSelectedProposal(proposal);
    setShowDetailsModal(true);
  };

  const handleWithdrawProposal = async (proposalId) => {
    if (!confirm("Are you sure you want to withdraw this proposal? This action cannot be undone.")) return;
    setActionLoading(proposalId);
    await new Promise(r => setTimeout(r, 300));
    setProposals((prev) => prev.filter((p) => p.id !== proposalId));
    setSuccessMessage("Proposal withdrawn successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
    setActionLoading(null);
  };

  const handleSendMessage = async (proposal) => {
    router.push(`/freelancer-dashboard/messages?conversation=${proposal.id}`);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <FaHourglassHalf className={styles.statusIcon} />;
      case "accepted":
        return <FaCheckCircle className={styles.statusIcon} />;
      case "rejected":
        return <FaTimes className={styles.statusIcon} />;
      case "withdrawn":
        return <FaExclamationTriangle className={styles.statusIcon} />;
      default:
        return <FaHourglassHalf className={styles.statusIcon} />;
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { label: "Under Review", className: styles.statusPending },
      accepted: { label: "Accepted", className: styles.statusAccepted },
      rejected: { label: "Rejected", className: styles.statusRejected },
      withdrawn: { label: "Withdrawn", className: styles.statusWithdrawn },
    };

    const config = statusConfig[status] || {
      label: status,
      className: styles.statusDefault,
    };

    return (
      <span className={`${styles.statusBadge} ${config.className}`}>
        {getStatusIcon(status)}
        {config.label}
      </span>
    );
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return `${Math.floor(diffInHours / 168)}w ago`;
  };

  const renderProposalCard = (proposal, index) => (
    <motion.div
      key={proposal.id}
      className={styles.proposalCard}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{
        y: -2,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div className={styles.proposalHeader}>
        <div className={styles.jobInfo}>
          <h3 className={styles.jobTitle}>
            {proposal.job?.title || "Unknown Job"}
          </h3>
          <div className={styles.metaInfo}>
            <span className={styles.client}>
              <FaUser className={styles.metaIcon} />
              {proposal.client?.name || "Client"}
            </span>
            {proposal.job?.category && (
              <span className={styles.category}>{proposal.job.category}</span>
            )}
            <span className={styles.timeAgo}>
              <FaClock className={styles.metaIcon} />
              {getTimeAgo(proposal.createdAt)}
            </span>
          </div>
        </div>
        <div className={styles.headerRight}>
          {getStatusBadge(proposal.status)}
        </div>
      </div>

      <div className={styles.proposalDetails}>
        <div className={styles.bidComparison}>
          <div className={styles.bidItem}>
            <FaDollarSign className={styles.bidIcon} />
            <div className={styles.bidInfo}>
              <span className={styles.bidLabel}>Job Budget</span>
              <span className={styles.bidAmount}>
                ${proposal.job?.budget?.toLocaleString()}
              </span>
            </div>
          </div>
          <div className={styles.bidItem}>
            <FaDollarSign className={styles.bidIcon} />
            <div className={styles.bidInfo}>
              <span className={styles.bidLabel}>Your Bid</span>
              <span className={styles.bidAmount}>
                ${proposal.bidAmount?.toLocaleString()}
              </span>
            </div>
          </div>
          <div className={styles.bidItem}>
            <FaClock className={styles.bidIcon} />
            <div className={styles.bidInfo}>
              <span className={styles.bidLabel}>Timeline</span>
              <span className={styles.bidAmount}>
                {proposal.timeframe} days
              </span>
            </div>
          </div>
        </div>

        <div className={styles.coverLetterPreview}>
          <p>{proposal.coverLetter?.substring(0, 150)}...</p>
        </div>

        {proposal.job?.description && (
          <div className={styles.jobDescriptionPreview}>
            <strong>Job Description:</strong>
            <p>{proposal.job.description.substring(0, 100)}...</p>
          </div>
        )}
      </div>

      <div className={styles.proposalFooter}>
        <div className={styles.proposalMeta}>
          <span className={styles.submittedDate}>
            <FaCalendar className={styles.metaIcon} />
            Submitted: {new Date(proposal.createdAt).toLocaleDateString()}
          </span>
        </div>
        <div className={styles.proposalActions}>
          <motion.button
            onClick={() => handleViewDetails(proposal)}
            className={styles.viewButton}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaEye /> View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading your proposals...</p>
      </div>
    );
  }

  return (
    <>
      <Banner />
      <div className={styles.container}>
        {/* Header */}
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.headerContent}>
            <div className={styles.headerMain}>
              <div className={styles.headerTitle}>
                <h1>My Proposals</h1>
                <p className={styles.headerSubtitle}>
                  Manage and track your job proposals
                </p>
              </div>
              <button
                onClick={() => router.push("/find-work")}
                className={styles.findWorkButton}
              >
                <FaSearch />
                Find New Work
              </button>
            </div>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{stats.total}</span>
                <span className={styles.statLabel}>Total Proposals</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{stats.pending}</span>
                <span className={styles.statLabel}>Under Review</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{stats.accepted}</span>
                <span className={styles.statLabel}>Accepted</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{stats.rejected}</span>
                <span className={styles.statLabel}>Rejected</span>
              </div>
            </div>
          </div>
        </motion.header>

        <AnimatePresence>
          {successMessage && (
            <motion.div
              className={styles.successMessage}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <FaCheckCircle />
              {successMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.searchBox}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by job title, client name, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <div className={styles.filterGroup}>
            <FaFilter className={styles.filterIcon} />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">All Proposals</option>
              <option value="pending">Under Review</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </motion.div>

        {/* Proposals Grid */}
        <div className={styles.proposalsSection}>
          {filteredProposals.length === 0 ? (
            <motion.div
              className={styles.emptyState}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <FaPaperPlane className={styles.emptyIcon} />
              <h3>No proposals found</h3>
              <p>
                {searchTerm || filterStatus !== "all"
                  ? "Try adjusting your search or filters"
                  : "You haven't sent any proposals to clients yet. Start by browsing available jobs."}
              </p>
              {!searchTerm && filterStatus === "all" && (
                <div className={styles.emptyActions}>
                  <button
                    onClick={() => router.push("/find-work")}
                    className={styles.findWorkButton}
                  >
                    <FaSearch />
                    Browse Available Jobs
                  </button>
                </div>
              )}
            </motion.div>
          ) : (
            <div className={styles.proposalsGrid}>
              {filteredProposals.map((proposal, index) =>
                renderProposalCard(proposal, index)
              )}
            </div>
          )}
        </div>

        {/* Proposal Details Modal */}
        <AnimatePresence>
          {showDetailsModal && selectedProposal && (
            <ProposalDetailsModal
              proposal={selectedProposal}
              onClose={() => setShowDetailsModal(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

// Modal Component for Proposal Details
function ProposalDetailsModal({ proposal, onClose }) {
  const getStatusBadge = (status) => {
    const statusConfig = {
      pending: { label: "Under Review", className: styles.statusPending },
      accepted: { label: "Accepted", className: styles.statusAccepted },
      rejected: { label: "Rejected", className: styles.statusRejected },
      withdrawn: { label: "Withdrawn", className: styles.statusWithdrawn },
    };

    const config = statusConfig[status] || {
      label: status,
      className: styles.statusDefault,
    };

    return (
      <span className={`${styles.statusBadge} ${config.className}`}>
        {status === "pending" && <FaHourglassHalf />}
        {status === "accepted" && <FaCheckCircle />}
        {status === "rejected" && <FaTimes />}
        {status === "withdrawn" && <FaExclamationTriangle />}
        {config.label}
      </span>
    );
  };

  return (
    <motion.div
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
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
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.modalBody}>
          {/* Job Information */}
          <div className={styles.detailSection}>
            <h3 className={styles.detailSectionTitle}>
              <FaBriefcase /> Job Information
            </h3>
            <div className={styles.detailGrid}>
              <div className={styles.detailItem}>
                <strong>Job Title:</strong>
                <span>{proposal.job?.title}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>Client:</strong>
                <span>{proposal.client?.name}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>Category:</strong>
                <span>{proposal.job?.category}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>Job Budget:</strong>
                <span>${proposal.job?.budget?.toLocaleString()}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>Your Bid:</strong>
                <span>${proposal.bidAmount?.toLocaleString()}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>Timeline:</strong>
                <span>{proposal.timeframe} days</span>
              </div>
              <div className={styles.detailItem}>
                <strong>Status:</strong>
                <span>{getStatusBadge(proposal.status)}</span>
              </div>
              <div className={styles.detailItem}>
                <strong>Submitted:</strong>
                <span>{new Date(proposal.createdAt).toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Job Description */}
          {proposal.job?.description && (
            <div className={styles.detailSection}>
              <h3 className={styles.detailSectionTitle}>Job Description</h3>
              <div className={styles.jobDescription}>
                <p>{proposal.job.description}</p>
              </div>
            </div>
          )}

          {/* Required Skills */}
          {proposal.job?.skills && (
            <div className={styles.detailSection}>
              <h3 className={styles.detailSectionTitle}>Required Skills</h3>
              <div className={styles.skillsList}>
                {proposal.job.skills.split(",").map((skill, index) => (
                  <span key={index} className={styles.skillTag}>
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Your Cover Letter */}
          <div className={styles.detailSection}>
            <h3 className={styles.detailSectionTitle}>
              <FaComment /> Your Cover Letter
            </h3>
            <div className={styles.coverLetterFull}>
              <p>{proposal.coverLetter}</p>
            </div>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <div className={styles.modalActions}>
            <button onClick={onClose} className={styles.closeModalButton}>
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
