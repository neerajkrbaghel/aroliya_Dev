"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiMoneyStack } from "react-icons/gi";
import {
  FiSend,
  FiDollarSign,
  FiDownload,
  FiUpload,
  FiCheck,
  FiClock,
  FiUser,
  FiTrendingUp,
  FiEye,
  FiBriefcase,
  FiMessageSquare,
  FiCreditCard,
  FiStar,
  FiCalendar,
  FiArrowUpRight,
  FiBarChart,
  FiTarget,
  FiSearch,
  FiFilter,
  FiUsers,
  FiAward,
  FiGlobe,
  FiActivity,
  FiPieChart,
} from "react-icons/fi";
import styles from "./DashboardPage.module.css";
import ProfessionalBanner from "./components/page";

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState("dashboard");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [paymentAmount, setPaymentAmount] = useState("");
  const [projects, setProjects] = useState([]);
  const [walletBalance, setWalletBalance] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState({});
  const [user, setUser] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [exchangeRates, setExchangeRates] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("INR");

  useEffect(() => {
    loadDashboardData();
    fetchExchangeRates();
  }, []);

  const fetchExchangeRates = async () => {
    try {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      const data = await response.json();
      setExchangeRates(data.rates);
    } catch (error) {
      console.error("Error fetching exchange rates:", error);
    }
  };

  const convertCurrency = (
    amount,
    fromCurrency = "INR",
    toCurrency = selectedCurrency
  ) => {
    if (!exchangeRates || fromCurrency === toCurrency) return amount;

    // Convert from INR to USD first if needed
    const amountInUSD =
      fromCurrency === "USD" ? amount : amount / exchangeRates.INR;
    // Then convert from USD to target currency
    return toCurrency === "USD"
      ? amountInUSD
      : amountInUSD * exchangeRates[toCurrency];
  };

  const formatCurrency = (amount, currency = selectedCurrency) => {
    const convertedAmount = convertCurrency(amount, "INR", currency);

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(convertedAmount);
  };

  const loadDashboardData = async () => {
    setIsLoading(true);
    try {
      await new Promise(r => setTimeout(r, 300));

      const mockUser = {
        id: 1,
        name: "Freelancer User",
        email: "freelancer@example.com",
        role: "freelancer",
      };
      setUser(mockUser);

      loadProjects(1);
      loadWalletData(1);
      useMockMessages();
      useMockActivity();
      setStats({
        totalEarnings: 48500,
        completedProjects: 12,
        activeProjects: 3,
        clientSatisfaction: 96,
        responseRate: 95,
        totalProjects: 15,
        avgProjectValue: 4000,
        totalReviews: 24,
        averageRating: 4.8,
      });
    } catch (error) {
      console.error("❌ Error loading dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadAnalyticsData = async (userId) => {
    console.log("🔄 Loading analytics for user:", userId);
    setStats((prevStats) => ({
      ...prevStats,
      totalEarnings: 48500,
      completedProjects: 12,
      averageRating: 4.8,
      totalReviews: 24,
      activeClients: 8,
      clientSatisfaction: 96,
    }));
  };

  const loadReviewsData = async (userId) => {
    console.log("🔄 Loading reviews for freelancer:", userId);
    setStats((prevStats) => ({
      ...prevStats,
      clientSatisfaction: 96,
      averageRating: 4.8,
      totalReviews: 24,
    }));
  };

  const loadProjects = async (userId) => {
    console.log("🔄 Loading projects for user:", userId);
    const mockProjects = [
      {
        id: 1, title: "E-commerce Dashboard", status: "active", client: "TechCorp Inc.",
        budget: 15000, progress: 65, totalPaid: 7500, deadline: "2026-07-15",
        type: "Web Development", clientRating: 4.8, reviewCount: 12,
        createdAt: "2026-04-01", skills: ["React", "Node.js"], description: "Full dashboard",
      },
      {
        id: 2, title: "Mobile App UI/UX", status: "active", client: "StartupX",
        budget: 12000, progress: 40, totalPaid: 4000, deadline: "2026-08-20",
        type: "Design", clientRating: 5.0, reviewCount: 8,
        createdAt: "2026-05-01", skills: ["Figma", "Adobe XD"], description: "Mobile design",
      },
      {
        id: 3, title: "API Integration", status: "completed", client: "DataFlow Ltd",
        budget: 8000, progress: 100, totalPaid: 8000, deadline: "2026-05-10",
        type: "Backend", clientRating: 4.5, reviewCount: 4,
        createdAt: "2026-03-15", skills: ["Python", "FastAPI"], description: "API work",
      },
    ];
    setProjects(mockProjects);
    calculateStats(mockProjects);
  };

  const loadWalletData = async (userId) => {
    console.log("🔄 Loading freelancer wallet for user:", userId);
    setWalletBalance(25000);
    setTransactions([
      { id: 1, type: "credit", amount: 15000, description: "Payment received - E-commerce Dashboard", createdAt: "2026-05-10", status: "completed" },
      { id: 2, type: "debit", amount: 5000, description: "Withdrawal to Bank Account", createdAt: "2026-05-08", status: "completed" },
      { id: 3, type: "credit", amount: 8000, description: "Payment received - API Integration", createdAt: "2026-05-05", status: "completed" },
      { id: 4, type: "credit", amount: 4000, description: "Payment received - Mobile App UI/UX", createdAt: "2026-05-01", status: "completed" },
    ]);
  };

  const loadMessages = async (userId) => {
    console.log("🔄 Loading messages for user:", userId);
    useMockMessages();
  };

  const useMockMessages = () => {
    const mockMessages = [
      {
        id: 1,
        sender: "Client A",
        content: "Thanks for the great work on the project!",
        time: "2h ago",
        unread: false,
      },
      {
        id: 2,
        sender: "Client B",
        content: "Can we schedule a call to discuss the next phase?",
        time: "1d ago",
        unread: true,
      },
      {
        id: 3,
        sender: "Client C",
        content: "The deliverables look perfect, thank you!",
        time: "3d ago",
        unread: false,
      },
    ];

    setMessages(mockMessages);
    console.log("💬 Using mock messages:", mockMessages.length);
  };

  const loadRecentActivity = async (userId) => {
    console.log("🔄 Loading activity for user:", userId);
    useMockActivity();
  };

  const useMockActivity = () => {
    const mockActivity = [
      {
        id: 1,
        type: "payment_received",
        title: "Payment Received",
        description: "Project completion payment - Website Redesign",
        time: "2h ago",
        icon: <GiMoneyStack />,
      },
      {
        id: 2,
        type: "project_completed",
        title: "Project Completed",
        description: "E-commerce dashboard development",
        time: "1d ago",
        icon: <FiCheck />,
      },
      {
        id: 3,
        type: "new_project",
        title: "New Project",
        description: "Mobile app UI/UX design",
        time: "2d ago",
        icon: <FiBriefcase />,
      },
    ];

    setRecentActivity(mockActivity);
  };

  const calculateStats = (projectsData) => {
    const completedProjects = projectsData.filter(
      (p) => p.status === "completed"
    ).length;
    const activeProjects = projectsData.filter(
      (p) => p.status === "active"
    ).length;
    const totalEarnings = projectsData
      .filter((p) => p.status === "completed")
      .reduce((sum, p) => sum + (p.totalPaid || 0), 0);

    // Client satisfaction is now loaded from reviews API, so we keep existing value
    const newStats = {
      totalEarnings,
      completedProjects,
      activeProjects,
      clientSatisfaction: stats.clientSatisfaction || 0,
      responseRate: 95,
      totalProjects: projectsData.length,
      avgProjectValue:
        projectsData.length > 0
          ? Math.round(
              projectsData.reduce((sum, p) => sum + (p.budget || 0), 0) /
                projectsData.length
            )
          : 0,
    };

    console.log("📈 Calculated stats:", newStats);
    setStats(newStats);
  };

  const handleSendMessage = async () => {
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        sender: "You",
        content: newMessage,
        time: "Just now",
        unread: false,
      };
      setMessages([message, ...messages]);
      setNewMessage("");
      console.log("📨 Mock message sent:", newMessage);
    }
  };

  const handlePayment = async () => {
    if (paymentAmount && !isNaN(paymentAmount) && paymentAmount > 0) {
      setIsLoading(true);
      await new Promise(r => setTimeout(r, 500));
      const newBalance = walletBalance + parseFloat(paymentAmount);
      setWalletBalance(newBalance);
      const transaction = {
        id: Date.now(),
        type: "credit",
        amount: parseFloat(paymentAmount),
        description: "Wallet Top-up",
        createdAt: new Date().toISOString(),
        status: "completed",
      };
      setTransactions([transaction, ...transactions]);
      setPaymentAmount("");
      alert(
        `Successfully added ${formatCurrency(parseFloat(paymentAmount))} to your wallet!`
      );
      setIsLoading(false);
    }
  };

  const handleWithdraw = async (amount) => {
    if (amount <= walletBalance) {
      setIsLoading(true);
      await new Promise(r => setTimeout(r, 500));
      const newBalance = walletBalance - amount;
      setWalletBalance(newBalance);
      const transaction = {
        id: Date.now(),
        type: "debit",
        amount: amount,
        description: "Withdrawal to Bank Account",
        createdAt: new Date().toISOString(),
        status: "completed",
      };
      setTransactions([transaction, ...transactions]);
      alert(`Withdrawal request for ${formatCurrency(amount)} submitted!`);
      setIsLoading(false);
    } else {
      alert("Insufficient balance for withdrawal");
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatTimeAgo = (dateString) => {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return formatDate(dateString);
  };

  const getStatusColor = (status) => {
    if (!status) return "#6B7280";
    switch (status.toLowerCase()) {
      case "completed":
        return "#10B981";
      case "active":
        return "#3B82F6";
      case "pending":
        return "#F59E0B";
      case "in progress":
        return "#8B5CF6";
      default:
        return "#6B7280";
    }
  };

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case "completed":
        return <FiCheck className={styles.statusIcon} />;
      case "active":
        return <FiActivity className={styles.statusIcon} />;
      case "pending":
        return <FiClock className={styles.statusIcon} />;
      case "in progress":
        return <FiTrendingUp className={styles.statusIcon} />;
      default:
        return <FiBriefcase className={styles.statusIcon} />;
    }
  };

  // Currency Toggle Component
  const CurrencyToggle = () => (
    <div className={styles.currencyToggle}>
      <button
        className={`${styles.currencyOption} ${
          selectedCurrency === "INR" ? styles.active : ""
        }`}
        onClick={() => setSelectedCurrency("INR")}
      >
        ₹ INR
      </button>
      <button
        className={`${styles.currencyOption} ${
          selectedCurrency === "USD" ? styles.active : ""
        }`}
        onClick={() => setSelectedCurrency("USD")}
      >
        $ USD
      </button>
    </div>
  );

  // Render functions
  const renderDashboard = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.section}
    >
      <div className={styles.dashboardHeader}>
        <ProfessionalBanner />
      </div>

      {/* Stats Grid */}
      <div className={styles.statsGrid}>
        <motion.div
          className={styles.statCard}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={styles.statHeader}>
            <div className={styles.statIconContainer}>
              <FiDollarSign className={styles.statIcon} />
            </div>
            <div className={styles.statInfo}>
              <div className={styles.statLabelRow}>
                <span className={styles.statLabel}>Total Earnings</span>
                <CurrencyToggle />
              </div>
              <h3 className={styles.statValue}>
                {formatCurrency(stats.totalEarnings || 0)}
              </h3>
            </div>
          </div>
          <div className={styles.statTrend}>
            <FiTrendingUp className={styles.trendIcon} />
            <span>From {stats.completedProjects || 0} completed projects</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.statCard}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={styles.statHeader}>
            <div className={styles.statIconContainer}>
              <FiBriefcase className={styles.statIcon} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Active Projects</span>
              <h3 className={styles.statValue}>
                {stats.activeProjects || "0"}
              </h3>
            </div>
          </div>
          <div className={styles.statSubtext}>
            {stats.totalProjects || "0"} total projects
          </div>
        </motion.div>

        <motion.div
          className={styles.statCard}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={styles.statHeader}>
            <div className={styles.statIconContainer}>
              <FiStar className={styles.statIcon} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Client Satisfaction</span>
              <h3 className={styles.statValue}>
                {stats.clientSatisfaction || "0"}%
              </h3>
            </div>
          </div>
          <div className={styles.statSubtext}>
            Based on {stats.totalReviews || 0} reviews
          </div>
        </motion.div>

        <motion.div
          className={styles.statCard}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={styles.statHeader}>
            <div className={styles.statIconContainer}>
              <FiBarChart className={styles.statIcon} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statLabel}>Wallet Balance</span>
              <h3 className={styles.statValue}>
                {formatCurrency(walletBalance)}
              </h3>
            </div>
          </div>
          <div className={styles.statTrend}>
            <FiArrowUpRight className={styles.trendIcon} />
            <span>Available for withdrawal</span>
          </div>
        </motion.div>
      </div>

      <div className={styles.dashboardContent}>
        {/* Recent Projects */}
        <div className={styles.projectsSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitle}>
              <FiBriefcase className={styles.sectionTitleIcon} />
              <h2>Recent Projects</h2>
            </div>
            <button
              className={styles.viewAllBtn}
              onClick={() => setActiveSection("projects")}
            >
              View All <FiArrowUpRight />
            </button>
          </div>
          <div className={styles.projectsGrid}>
            {projects.length > 0 ? (
              projects.slice(0, 3).map((project) => (
                <motion.div
                  key={project.id}
                  className={styles.projectCard}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={styles.projectHeader}>
                    <h4 className={styles.projectTitle}>{project.title}</h4>
                    <div
                      className={styles.statusBadge}
                      style={{ color: getStatusColor(project.status) }}
                    >
                      {getStatusIcon(project.status)}
                      <span>{project.status}</span>
                    </div>
                  </div>
                  <p className={styles.projectClient}>{project.client}</p>
                  <div className={styles.projectProgress}>
                    <div className={styles.progressInfo}>
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{
                          width: `${project.progress}%`,
                          backgroundColor: getStatusColor(project.status),
                        }}
                      />
                    </div>
                  </div>
                  <div className={styles.projectFooter}>
                    <div className={styles.projectBudget}>
                      <FiDollarSign />
                      <span>{formatCurrency(project.budget || 0)}</span>
                    </div>
                    <div className={styles.projectDeadline}>
                      <FiCalendar />
                      <span>{formatDate(project.deadline)}</span>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className={styles.emptyState}>
                <FiBriefcase className={styles.emptyStateIcon} />
                <h3>No Projects Yet</h3>
                <p>Your projects will appear here once you start working</p>
              </div>
            )}
          </div>
        </div>

        {/* Recent Activity & Messages Sidebar */}
        <div className={styles.sidebarSections}>
          {/* Recent Activity */}
          <div className={styles.activitySection}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTitle}>
                <FiActivity className={styles.sectionTitleIcon} />
                <h2>Recent Activity</h2>
              </div>
            </div>
            <div className={styles.activityList}>
              {recentActivity.length > 0 ? (
                recentActivity.map((activity) => (
                  <motion.div
                    key={activity.id}
                    className={styles.activityItem}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <div className={styles.activityIcon}>{activity.icon}</div>
                    <div className={styles.activityContent}>
                      <strong>{activity.title}</strong>
                      <p>{activity.description}</p>
                      <span className={styles.activityTime}>
                        {activity.time}
                      </span>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className={styles.emptyState}>
                  <FiClock className={styles.emptyStateIcon} />
                  <h3>No Recent Activity</h3>
                  <p>Your activity will appear here</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderMessages = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={styles.section}
    >
      <h2>Messages</h2>
      <div className={styles.messagesContainer}>
        <div className={styles.messagesList}>
          {messages.map((message) => (
            <div key={message.id} className={styles.messageItem}>
              <div className={styles.messageHeader}>
                <strong>{message.sender}</strong>
                <span>{message.time}</span>
              </div>
              <p>{message.content}</p>
            </div>
          ))}
        </div>
        <div className={styles.messageInput}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage}>
            <FiSend />
          </button>
        </div>
      </div>
    </motion.div>
  );

  const renderPayments = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={styles.section}
    >
      <div className={styles.sectionHeader}>
        <h2>Payment History</h2>
      </div>
      <div className={styles.transactionsList}>
        {transactions.map((transaction) => (
          <div key={transaction.id} className={styles.transactionItem}>
            <div className={styles.transactionInfo}>
              <div className={styles.transactionType}>
                {transaction.type === "credit" ? "Received" : "Withdrawn"}
              </div>
              <div className={styles.transactionDescription}>
                {transaction.description}
              </div>
              <div className={styles.transactionTime}>
                {formatTimeAgo(transaction.createdAt)}
              </div>
            </div>
            <div
              className={`${styles.transactionAmount} ${
                transaction.type === "credit" ? styles.credit : styles.debit
              }`}
            >
              {transaction.type === "credit" ? "+" : "-"}
              {formatCurrency(transaction.amount)}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderProjects = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={styles.section}
    >
      <div className={styles.sectionHeader}>
        <h2>All Projects</h2>
      </div>
      <div className={styles.projectsList}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectItem}>
            <div className={styles.projectHeader}>
              <h3>{project.title}</h3>
              <span
                className={styles.projectStatus}
                style={{ color: getStatusColor(project.status) }}
              >
                {project.status}
              </span>
            </div>
            <p className={styles.projectClient}>{project.client}</p>
            <div className={styles.projectDetails}>
              <span>Budget: {formatCurrency(project.budget || 0)}</span>
              <span>Progress: {project.progress}%</span>
              <span>Deadline: {formatDate(project.deadline)}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const renderWallet = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={styles.section}
    >
      <div className={styles.walletHeader}>
        <h2>Wallet Balance</h2>
        <div className={styles.walletBalance}>
          {formatCurrency(walletBalance)}
        </div>
      </div>

      <div className={styles.walletActions}>
        <div className={styles.addFunds}>
          <h3>Add Funds</h3>
          <div className={styles.paymentInput}>
            <input
              type="number"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
              placeholder="Enter amount"
            />
            <button onClick={handlePayment} disabled={isLoading}>
              {isLoading ? "Processing..." : "Add Funds"}
            </button>
          </div>
        </div>

        <div className={styles.withdrawSection}>
          <h3>Quick Withdraw</h3>
          <div className={styles.withdrawButtons}>
            {[1000, 2000, 5000].map((amount) => (
              <button
                key={amount}
                onClick={() => handleWithdraw(amount)}
                disabled={amount > walletBalance || isLoading}
                className={styles.withdrawBtn}
              >
                {formatCurrency(amount)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "dashboard":
        return renderDashboard();
      case "messages":
        return renderMessages();
      case "payments":
        return renderPayments();
      case "projects":
        return renderProjects();
      case "wallet":
        return renderWallet();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className={styles.dashboardPage}>
      {/* Navigation Sidebar */}

      {/* Main Content */}
      <main className={styles.mainContent}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={styles.contentSection}
          >
            {isLoading ? (
              <div className={styles.loading}>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className={styles.spinner}
                />
                <p>Loading your dashboard...</p>
              </div>
            ) : (
              renderContent()
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
