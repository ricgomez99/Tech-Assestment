import React from "react";
import styles from "./last.module.css";
import Card from "../Card";

export default function LastSection() {
  return (
    <section className={styles.contain}>
      <Card />
      <div className={styles.details}>
        <img className={styles.detailsImg} src="/last-img.png" alt="details" />
      </div>
    </section>
  );
}
