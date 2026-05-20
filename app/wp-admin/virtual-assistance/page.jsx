"use client";
import { useEffect, useState } from "react";
import styles from "./virtual-assistance.module.css";

export default function Home() {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(""); // Search input
  const [dateFilter, setDateFilter] = useState(""); // YYYY-MM-DD format
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(null);

  const handleViewLetter = (letter) => {
    setSelectedLetter(letter);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedLetter(null);
  };

  useEffect(() => {
    const mockForms = [
      { id: 1, name: "John Doe", email: "john@example.com", phone: "+1234567890", serviceCategory: "Virtual Assistance", message: "I need help with my daily administrative tasks.", status: "Pending", createdAt: new Date().toISOString() },
      { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+9876543210", serviceCategory: "Executive Assistant", message: "Looking for an experienced executive assistant for scheduling and travel planning.", status: "Done", createdAt: new Date(Date.now() - 86400000).toISOString() },
      { id: 3, name: "Bob Wilson", email: "bob@example.com", phone: "+5551234567", serviceCategory: "Data Entry", message: "Need help with data entry and spreadsheet management.", status: "Pending", createdAt: new Date(Date.now() - 172800000).toISOString() },
    ];
    setForms(mockForms);
    setLoading(false);
  }, []);

  // Handle status toggle
  const toggleStatus = async (id, currentStatus) => {
    console.log("Toggling status:", id, currentStatus);
    setForms((prev) =>
      prev.map((f) =>
        f.id === id
          ? {
              ...f,
              status: currentStatus === "Pending" ? "Done" : "Pending",
            }
          : f
      )
    );
  };

  // Filter forms by search and date
  const filteredForms = forms.filter((form) => {
    const matchesSearch =
      form.name.toLowerCase().includes(search.toLowerCase()) ||
      form.email.toLowerCase().includes(search.toLowerCase()) ||
      (form.phone && form.phone.includes(search)) ||
      (form.serviceCategory &&
        form.serviceCategory.toLowerCase().includes(search.toLowerCase())) ||
      (form.message &&
        form.message.toLowerCase().includes(search.toLowerCase()));

    const matchesDate = dateFilter
      ? new Date(form.createdAt).toISOString().split("T")[0] === dateFilter
      : true;

    return matchesSearch && matchesDate;
  });

  if (loading) {
    return <div className={styles.container}>Loading submissions...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Form Submissions</h1>

      {/* Search & Date Filters */}
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Search by name, email, phone, category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.searchInput}
        />
        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className={styles.dateInput}
        />
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email Address</th>
              <th>Phone Number</th>
              <th>Service Category</th>
              <th>Additional Details</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredForms.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No results found
                </td>
              </tr>
            ) : (
              filteredForms.map((submission) => (
                <tr key={submission.id}>
                  <td>{submission.id}</td>
                  <td>{submission.name}</td>
                  <td>{submission.email}</td>
                  <td>{submission.phone}</td>
                  <td>{submission.serviceCategory}</td>
                  <td>
                    <button
                      className={styles.letterBtn}
                      onClick={() => handleViewLetter(submission.message
                      )}
                    >
                      View Letter
                    </button>
                  </td>
                  <td>
                    {new Date(submission.createdAt).toLocaleString("en-IN", {
                      timeZone: "Asia/Kolkata",
                      hour12: true,
                    })}
                  </td>
                  <td>
                    <button
                      className={`${styles.statusButton} ${
                        submission.status === "Done"
                          ? styles.done
                          : styles.pending
                      }`}
                      onClick={() =>
                        toggleStatus(submission.id, submission.status)
                      }
                    >
                      {submission.status}
                    </button>
                  </td>
                </tr>
              ))
            )}
            {isModalOpen && (
              <div className={styles.modalOverlay} onClick={closeModal}>
                <div
                  className={styles.modal}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h2>Cover Letter</h2>
                  <p>User Message: {selectedLetter || "No letter provided."}</p>
                  <button className={styles.closeBtn} onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
