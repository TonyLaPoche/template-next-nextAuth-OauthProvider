"use client";
import React, { useEffect, useState } from "react";

import styles from "../../app/cssStyles/Main.module.css";

function ProgressSpinner() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={styles.loadingContent}>
        <div className={styles.loadingSpinner}></div>
        <div className={styles.loadingText}>Loading ...</div>
      </div>
    </div>
  );
}

export default ProgressSpinner;
