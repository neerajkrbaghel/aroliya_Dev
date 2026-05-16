"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiCalendar,
  FiEdit2,
  FiSave,
  FiX,
  FiMapPin,
  FiGlobe,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiBriefcase,
  FiDollarSign,
  FiPhone,
  FiCheck,
  FiAward,
  FiBook,
  FiAlertCircle,
  FiRefreshCw,
} from "react-icons/fi";
import { useRouter } from "next/navigation";
import styles from "./profile.module.css";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    profile: {
      title: "",
      bio: "",
      location: "",
      website: "",
      github: "",
      linkedin: "",
      twitter: "",
      phone: "",
      available: true,
      experience: "",
      education: "",
      portfolio: "",
    },
  });

  const router = useRouter();

  useEffect(() => {
    checkAuthAndFetchProfile();
  }, []);

  const checkAuthAndFetchProfile = async () => {
    setLoading(true);
    setError(null);
    await new Promise(r => setTimeout(r, 200));
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
      setFormData({
        name: userData.name || "",
        profile: {
          title: "",
          bio: "",
          location: "",
          website: "",
          github: "",
          linkedin: "",
          twitter: "",
          phone: "",
          available: true,
          experience: "",
          education: "",
          portfolio: "",
        },
      });
    } else {
      setError("Please log in to view your profile");
    }
    setLoading(false);
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    await new Promise(r => setTimeout(r, 500));
    setUser(prev => ({ ...prev, ...formData }));
    setEditing(false);
    setError("Profile updated successfully!");
    setTimeout(() => setError(null), 3000);
    setSaving(false);
  };

  const handleCancel = () => {
    setFormData({
      name: user.name || "",
      profile: {
        title: user.profile?.title || "",
        bio: user.profile?.bio || "",
        location: user.profile?.location || "",
        website: user.profile?.website || "",
        github: user.profile?.github || "",
        linkedin: user.profile?.linkedin || "",
        twitter: user.profile?.twitter || "",
        phone: user.profile?.phone || "",
        available: user.profile?.available ?? true,
        experience: user.profile?.experience || "",
        education: user.profile?.education || "",
        portfolio: user.profile?.portfolio || "",
      },
    });
    setEditing(false);
    setError(null);
  };

  const handleInputChange = (field, value) => {
    if (field.includes(".")) {
      const [parent, child] = field.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };



  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className={styles.loadingSpinner}
        >
          <FiUser />
        </motion.div>
        <p>Loading profile...</p>
      </div>
    );
  }

  if (error && !user && !error.includes("successfully")) {
    return (
      <div className={styles.errorContainer}>
        <FiAlertCircle className={styles.errorIcon} />
        <h2>Authentication Required</h2>
        <p>{error}</p>
        <div className={styles.errorActions}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("/login")}
            className={styles.loginButton}
          >
            Go to Login
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={checkAuthAndFetchProfile}
            className={styles.retryButton}
          >
            <FiRefreshCw /> Try Again
          </motion.button>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.errorContainer}>
        <FiAlertCircle className={styles.errorIcon} />
        <h2>Profile Not Found</h2>
        <p>Unable to load user profile</p>
        <button
          onClick={checkAuthAndFetchProfile}
          className={styles.retryButton}
        >
          <FiRefreshCw /> Try Again
        </button>
      </div>
    );
  }

  return (
    <div className={styles.profileContainer}>
      {/* Error/Success Alert */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`${styles.alert} ${
              error.includes("successfully")
                ? styles.successAlert
                : styles.errorAlert
            }`}
          >
            <FiAlertCircle />
            <span>{error}</span>
            <button
              onClick={() => setError(null)}
              className={styles.alertClose}
            >
              <FiX />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={styles.header}
      >
        <div className={styles.headerContent}>
          <h1>Profile Settings</h1>
          <p>Manage your personal information and preferences</p>
        </div>
        <div className={styles.headerActions}>
          {!editing ? (
            <div className={styles.actionGroup}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setEditing(true)}
                className={styles.editButton}
              >
                <FiEdit2 /> Edit Profile
              </motion.button>

            </div>
          ) : (
            <div className={styles.editActions}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCancel}
                className={styles.cancelButton}
                disabled={saving}
              >
                <FiX /> Cancel
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSave}
                className={styles.saveButton}
                disabled={saving}
              >
                {saving ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <FiEdit2 />
                  </motion.div>
                ) : (
                  <FiSave />
                )}
                {saving ? "Saving..." : "Save Changes"}
              </motion.button>
            </div>
          )}
        </div>
      </motion.div>

      <div className={styles.profileContent}>
        {/* Basic Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={styles.section}
        >
          <div className={styles.sectionHeader}>
            <FiUser className={styles.sectionIcon} />
            <h2>Basic Information</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Full Name</label>
                {editing ? (
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={styles.input}
                    placeholder="Enter your full name"
                  />
                ) : (
                  <div className={styles.displayValue}>
                    {user.name || "Not set"}
                  </div>
                )}
              </div>

              <div className={styles.formGroup}>
                <label>Email Address</label>
                <div className={styles.displayValue}>
                  <FiMail className={styles.valueIcon} />
                  {user.email}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label>Professional Title</label>
                {editing ? (
                  <input
                    type="text"
                    value={formData.profile.title}
                    onChange={(e) =>
                      handleInputChange("profile.title", e.target.value)
                    }
                    className={styles.input}
                    placeholder="e.g., Senior Developer"
                  />
                ) : (
                  <div className={styles.displayValue}>
                    <FiBriefcase className={styles.valueIcon} />
                    {user.profile?.title || "Not set"}
                  </div>
                )}
              </div>
            </div>

            <div className={styles.formGroup}>
              <label>Bio</label>
              {editing ? (
                <textarea
                  value={formData.profile.bio}
                  onChange={(e) =>
                    handleInputChange("profile.bio", e.target.value)
                  }
                  className={styles.textarea}
                  placeholder="Tell us about yourself..."
                  rows={4}
                />
              ) : (
                <div className={styles.displayValue}>
                  {user.profile?.bio || "No bio provided"}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={styles.section}
        >
          <div className={styles.sectionHeader}>
            <FiPhone className={styles.sectionIcon} />
            <h2>Contact Information</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>Location</label>
                {editing ? (
                  <div className={styles.inputWithIcon}>
                    <FiMapPin className={styles.inputIcon} />
                    <input
                      type="text"
                      value={formData.profile.location}
                      onChange={(e) =>
                        handleInputChange("profile.location", e.target.value)
                      }
                      className={styles.input}
                      placeholder="City, Country"
                    />
                  </div>
                ) : (
                  <div className={styles.displayValue}>
                    <FiMapPin className={styles.valueIcon} />
                    {user.profile?.location || "Not set"}
                  </div>
                )}
              </div>

              <div className={styles.formGroup}>
                <label>Phone</label>
                {editing ? (
                  <div className={styles.inputWithIcon}>
                    <FiPhone className={styles.inputIcon} />
                    <input
                      type="tel"
                      value={formData.profile.phone}
                      onChange={(e) =>
                        handleInputChange("profile.phone", e.target.value)
                      }
                      className={styles.input}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                ) : (
                  <div className={styles.displayValue}>
                    <FiPhone className={styles.valueIcon} />
                    {user.profile?.phone || "Not set"}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={styles.section}
        >
          <div className={styles.sectionHeader}>
            <FiGlobe className={styles.sectionIcon} />
            <h2>Social Links</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label>GitHub</label>
                {editing ? (
                  <div className={styles.inputWithIcon}>
                    <FiGithub className={styles.inputIcon} />
                    <input
                      type="url"
                      value={formData.profile.github}
                      onChange={(e) =>
                        handleInputChange("profile.github", e.target.value)
                      }
                      className={styles.input}
                      placeholder="https://github.com/username"
                    />
                  </div>
                ) : (
                  <div className={styles.displayValue}>
                    <FiGithub className={styles.valueIcon} />
                    {user.profile?.github || "Not set"}
                  </div>
                )}
              </div>

              <div className={styles.formGroup}>
                <label>LinkedIn</label>
                {editing ? (
                  <div className={styles.inputWithIcon}>
                    <FiLinkedin className={styles.inputIcon} />
                    <input
                      type="url"
                      value={formData.profile.linkedin}
                      onChange={(e) =>
                        handleInputChange("profile.linkedin", e.target.value)
                      }
                      className={styles.input}
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                ) : (
                  <div className={styles.displayValue}>
                    <FiLinkedin className={styles.valueIcon} />
                    {user.profile?.linkedin || "Not set"}
                  </div>
                )}
              </div>

              <div className={styles.formGroup}>
                <label>Twitter</label>
                {editing ? (
                  <div className={styles.inputWithIcon}>
                    <FiTwitter className={styles.inputIcon} />
                    <input
                      type="url"
                      value={formData.profile.twitter}
                      onChange={(e) =>
                        handleInputChange("profile.twitter", e.target.value)
                      }
                      className={styles.input}
                      placeholder="https://twitter.com/username"
                    />
                  </div>
                ) : (
                  <div className={styles.displayValue}>
                    <FiTwitter className={styles.valueIcon} />
                    {user.profile?.twitter || "Not set"}
                  </div>
                )}
              </div>

              <div className={styles.formGroup}>
                <label>Portfolio</label>
                {editing ? (
                  <div className={styles.inputWithIcon}>
                    <FiBriefcase className={styles.inputIcon} />
                    <input
                      type="url"
                      value={formData.profile.portfolio}
                      onChange={(e) =>
                        handleInputChange("profile.portfolio", e.target.value)
                      }
                      className={styles.input}
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                ) : (
                  <div className={styles.displayValue}>
                    <FiBriefcase className={styles.valueIcon} />
                    {user.profile?.portfolio || "Not set"}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Account Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={styles.section}
        >
          <div className={styles.sectionHeader}>
            <FiBook className={styles.sectionIcon} />
            <h2>Account Information</h2>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <label>Member Since</label>
                <div className={styles.infoValue}>
                  <FiCalendar className={styles.valueIcon} />
                  {new Date(user.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
              <div className={styles.infoItem}>
                <label>Last Login</label>
                <div className={styles.infoValue}>
                  <FiCalendar className={styles.valueIcon} />
                  {user.lastLogin
                    ? new Date(user.lastLogin).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Never"}
                </div>
              </div>
              <div className={styles.infoItem}>
                <label>Account Role</label>
                <div className={styles.infoValue}>
                  <FiUser className={styles.valueIcon} />
                  {user.role?.charAt(0).toUpperCase() + user.role?.slice(1) ||
                    "User"}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
