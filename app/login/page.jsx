// app\login\page.jsx
"use client";
import { useState } from "react";
import styles from "./Login.module.css";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash, FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import Nav from "../home/component/Nav/page";
import WhatsApp from "../whatsapp_icon/page";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [forgotPasswordLoading, setForgotPasswordLoading] = useState(false);
  const router = useRouter();

  // app/login/page.jsx - Update the handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setMessage("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      await new Promise((r) => setTimeout(r, 1000));

      const mockUser = {
        id: "mock-1",
        email: form.email,
        name: "Demo User",
        role: "user",
      };

      localStorage.setItem("user", JSON.stringify(mockUser));
      localStorage.setItem("token", "mock-token-123");

      setMessage("Backend not connected. Login successful! Redirecting...");

      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    } catch (error) {
      console.error("Login error:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
// Mock Google login (backend not connected)
const handleGoogleLogin = async () => {
  setGoogleLoading(true);
  setMessage("");

  try {
    await new Promise((r) => setTimeout(r, 1000));

    const mockUser = {
      id: "mock-google-1",
      email: "google.user@gmail.com",
      name: "Google User",
      role: "user",
    };

    localStorage.setItem("user", JSON.stringify(mockUser));
    localStorage.setItem("token", "mock-google-token-123");

    setMessage("Backend not connected. Google login successful! Redirecting...");
    setTimeout(() => router.push("/dashboard"), 1500);
  } catch (error) {
    console.error("Google login error:", error);
    setMessage("An error occurred during Google login. Please try again.");
  } finally {
    setGoogleLoading(false);
  }
};

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!forgotPasswordEmail) {
      setMessage("Please enter your email address");
      return;
    }

    setForgotPasswordLoading(true);
    setMessage("");

    try {
      await new Promise((r) => setTimeout(r, 1000));
      setMessage("Backend not connected. OTP would be sent to your email!");
      setShowForgotPassword(false);
      setTimeout(() => {
        router.push(
          `/reset-password?email=${encodeURIComponent(forgotPasswordEmail)}`
        );
      }, 2000);
    } catch (error) {
      console.error("Forgot password error:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setForgotPasswordLoading(false);
    }
  };

  return (
    <>
      <Nav />
      <WhatsApp />
      <div className={styles.container}>
        <div className={styles.loginWrapper}>
          {/* Left Panel - Brand Section */}
          <div className={styles.brandPanel}>
            <div className={styles.brandContent}>
              <div className={styles.logo}>
                <div className={styles.logoIcon}>
                  <FaUser className={styles.logoSvg} />
                </div>
                <span className={styles.brandName}>Aroliya</span>
              </div>

              <div className={styles.brandText}>
                <h1 className={styles.brandTitle}>Welcome Back</h1>
                <p className={styles.brandSubtitle}>
                  Sign in to access your professional workspace and continue
                  your work.
                </p>
              </div>

              <div className={styles.features}>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>Secure enterprise-grade security</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>24/7 customer support</span>
                </div>
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>✓</div>
                  <span>Access from any device</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Login Form */}
          <div className={styles.formPanel}>
            <div className={styles.loginCard}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>
                  {showForgotPassword ? "Reset Password" : "Sign In"}
                </h2>
                <p className={styles.cardSubtitle}>
                  {showForgotPassword
                    ? "Enter your email to receive a reset OTP"
                    : "Access your account to continue"}
                </p>
              </div>

              {/* Google Sign In Button - Authentic Design */}
              {!showForgotPassword && (
                <div className={styles.socialSection}>
                  <button
                    type="button"
                    className={styles.googleButton}
                    onClick={handleGoogleLogin}
                    disabled={googleLoading || isLoading}
                  >
                    {googleLoading ? (
                      <div className={styles.buttonSpinner}></div>
                    ) : (
                      <>
                        <svg
                          className={styles.googleIcon}
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                        >
                          <path
                            fill="#4285F4"
                            d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
                          />
                          <path
                            fill="#34A853"
                            d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
                          />
                          <path
                            fill="#EA4335"
                            d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
                          />
                        </svg>
                      </>
                    )}
                    <span className={styles.googleButtonText}>
                      {googleLoading
                        ? "Signing in with Google..."
                        : "Sign in with Google"}
                    </span>
                  </button>

                  <div className={styles.divider}>
                    <span className={styles.dividerText}>or</span>
                  </div>
                </div>
              )}

              {/* Login Form */}
              {!showForgotPassword ? (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Email Address
                    </label>
                    <div className={styles.inputContainer}>
                      <FaEnvelope className={styles.inputIcon} />
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className={styles.input}
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="password" className={styles.label}>
                      Password
                    </label>
                    <div className={styles.inputContainer}>
                      <FaLock className={styles.inputIcon} />
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className={styles.input}
                        value={form.password}
                        onChange={(e) =>
                          setForm({ ...form, password: e.target.value })
                        }
                        required
                      />
                      <button
                        type="button"
                        className={styles.passwordToggle}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  <div className={styles.formOptions}>
                    <button
                      type="button"
                      className={styles.forgotPasswordLink}
                      onClick={() => setShowForgotPassword(true)}
                    >
                      Forgot password?
                    </button>
                  </div>

                  <button
                    type="submit"
                    className={`${styles.submitButton} ${
                      isLoading ? styles.loading : ""
                    }`}
                    disabled={isLoading || googleLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className={styles.spinner}></div>
                        Signing In...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleForgotPassword} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="forgotEmail" className={styles.label}>
                      Email Address
                    </label>
                    <div className={styles.inputContainer}>
                      <FaEnvelope className={styles.inputIcon} />
                      <input
                        id="forgotEmail"
                        type="email"
                        placeholder="Enter your registered email"
                        className={styles.input}
                        value={forgotPasswordEmail}
                        onChange={(e) => setForgotPasswordEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.buttonGroup}>
                    <button
                      type="submit"
                      className={`${styles.submitButton} ${
                        forgotPasswordLoading ? styles.loading : ""
                      }`}
                      disabled={forgotPasswordLoading}
                    >
                      {forgotPasswordLoading ? (
                        <>
                          <div className={styles.spinner}></div>
                          Sending OTP...
                        </>
                      ) : (
                        "Send Reset OTP"
                      )}
                    </button>
                    <button
                      type="button"
                      className={styles.secondaryButton}
                      onClick={() => setShowForgotPassword(false)}
                    >
                      Back to Login
                    </button>
                  </div>
                </form>
              )}

              {message && (
                <div
                  className={`${styles.message} ${
                    message.toLowerCase().includes("error") ||
                    message.toLowerCase().includes("invalid") ||
                    message.toLowerCase().includes("failed")
                      ? styles.error
                      : styles.success
                  }`}
                >
                  {message}
                </div>
              )}

              {!showForgotPassword && (
                <div className={styles.footer}>
                  <p>
                    Don't have an account?{" "}
                    <a href="/register" className={styles.signupLink}>
                      Sign up
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
