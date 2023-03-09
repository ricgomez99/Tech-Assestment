import React from "react";
import styles from "./statCard.module.css";

export default function StatCard({ src, number, text }) {
  return (
    <div className={styles.card}>
      <img className={styles.icon} src={src} alt="card" />
      <h2 className={styles.title}>{number}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
