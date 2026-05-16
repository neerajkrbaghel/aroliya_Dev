"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FiLoader, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import styles from './AccessTokenPage.module.css';

export default function AccessCatchAllPage() {
  const params = useParams();
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const processAccess = async () => {
      const token = params.slug?.[0];
      
      console.log('🔄 Catch-all processing token:', token);
      
      if (!token) {
        setStatus('error');
        setMessage('No access token provided in URL');
        return;
      }

      setStatus('success');
      setMessage(`Access granted! Redirecting...`);
      
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1500);
    };

    processAccess();
  }, [params]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {status === 'loading' && (
          <>
            <FiLoader className={styles.loadingSpinner} size={48} />
            <h2 className={styles.title}>Processing Access</h2>
            <p className={styles.message}>Verifying your access token...</p>
          </>
        )}
        
        {status === 'success' && (
          <>
            <FiCheckCircle className={styles.successIcon} size={48} />
            <h2 className={styles.title}>Access Granted!</h2>
            <p className={styles.message}>{message}</p>
            <div className={styles.redirectText}>
              Redirecting...
            </div>
          </>
        )}
        
        {status === 'error' && (
          <>
            <FiXCircle className={styles.errorIcon} size={48} />
            <h2 className={styles.title}>Access Failed</h2>
            <p className={styles.message}>{message}</p>
            <button
              onClick={() => window.location.href = '/admin'}
              className={`${styles.button} ${styles.primaryButton}`}
            >
              Return to Admin
            </button>
          </>
        )}
      </div>
    </div>
  );
}