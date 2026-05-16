// app/admin/page.jsx
"use client";
import { useState, useEffect } from "react";
import styles from "./wp-admin.module.css";
import {
  FiRefreshCw,
  FiCheckCircle,
  FiClock,
  FiUsers,
  FiShoppingBag,
} from "react-icons/fi";
import { FaBox } from "react-icons/fa";

export default function DashboardPage() {
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [yearlyRevenue, setYearlyRevenue] = useState(0);

  useEffect(() => {
    const yearlyRevenue = 1250000;
    setYearlyRevenue(yearlyRevenue);
  }, []);

  useEffect(() => {
    fetchOrders();
    fetchUsers();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    const mockOrders = [
      { id: 1, status: "completed", amount: 500 },
      { id: 2, status: "pending", amount: 300 },
      { id: 3, status: "completed", amount: 700 },
      { id: 4, status: "pending", amount: 200 },
      { id: 5, status: "completed", amount: 400 },
    ];
    setOrders(mockOrders);
    setLoading(false);
  };

  const fetchUsers = async () => {
    const mockUsers = [
      { id: 1, name: "John Doe", email: "john@example.com" },
      { id: 2, name: "Jane Smith", email: "jane@example.com" },
      { id: 3, name: "Bob Johnson", email: "bob@example.com" },
    ];
    setUsers(mockUsers);
  };

  const getStatusCount = (status) => {
    return orders.filter((order) => order.status === status).length;
  };

  const stats = {
    total: orders.length,
    pending: getStatusCount("pending"),
    completed: getStatusCount("completed"),
    revenue: orders.filter((o) => o.status === "completed").length * 100,
    users: users.length,
  };

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>Dashboard</h1>
          <div className={styles.headerActions}>
            <button onClick={fetchOrders} className={styles.refreshBtn}>
              <FiRefreshCw size={18} />
              Refresh
            </button>
          </div>
        </div>
      </header>

      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.statIconPrimary}`}>
            <FiShoppingBag />
          </div>
          <div className={styles.statContent}>
            <h3>Total Orders</h3>
            <span className={styles.statNumber}>{stats.total}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.statIconPrimary}`}>
            <FaBox />
          </div>
          <div className={styles.statContent}>
            <h3>Total Revenue</h3>
            <span className={styles.statNumber}>₹{yearlyRevenue}</span>
          </div>
        </div>
        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.statIconWarning}`}>
            <FiClock />
          </div>
          <div className={styles.statContent}>
            <h3>Pending</h3>
            <span className={styles.statNumber}>{stats.pending}</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.statIconSuccess}`}>
            <FiCheckCircle />
          </div>
          <div className={styles.statContent}>
            <h3>Completed</h3>
            <span className={styles.statNumber}>{stats.completed}</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={`${styles.statIcon} ${styles.statIconInfo}`}>
            <FiUsers />
          </div>
          <div className={styles.statContent}>
            <h3>Users</h3>
            <span className={styles.statNumber}>{stats.users}</span>
          </div>
        </div>
      </div>
    </>
  );
}
