"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FiLoader, FiCheckCircle, FiXCircle } from "react-icons/fi";
import styles from "./AccessTokenPage.module.css";

export default function AccessTokenPage() {
  const params = useParams();
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const processAccess = async () => {
      const { token } = params;

      console.log("🔑 Processing access token:", token);

      if (!token) {
        setStatus("error");
        setMessage("No access token provided");
        return;
      }

      setStatus("success");
      setMessage(`Access granted! Redirecting to dashboard...`);

      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 1500);
    };

    processAccess();
  }, [params]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {status === "loading" && (
          <>
            <FiLoader className={styles.loadingSpinner} size={48} />
            <h2 className={styles.title}>Processing Access</h2>
            <p className={styles.message}>Verifying your access token...</p>
            <p className={styles.tokenPreview}>
              Token: {params.token?.substring(0, 20)}...
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <FiCheckCircle className={styles.successIcon} size={48} />
            <h2 className={styles.title}>Access Granted!</h2>
            <p className={styles.message}>{message}</p>
            <div className={styles.redirectText}>
              Redirecting to dashboard...
            </div>
          </>
        )}

        {status === "error" && (
          <>
            <FiXCircle className={styles.errorIcon} size={48} />
            <h2 className={styles.title}>Access Failed</h2>
            <p className={styles.message}>{message}</p>
            <div className={styles.buttonGroup}>
              <button
                onClick={() => (window.location.href = "/admin")}
                className={`${styles.button} ${styles.primaryButton}`}
              >
                Return to Admin Panel
              </button>
              <button
                onClick={() => window.location.reload()}
                className={`${styles.button} ${styles.secondaryButton}`}
              >
                Try Again
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
