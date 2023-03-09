import React from "react";
import styles from "./stats.module.css";
import StatCard from "../StatCard";

export default function Stats() {
  return (
    <section className={styles.section}>
      <StatCard
        src="./stats1.png"
        number="2.620"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <StatCard
        src="./stats2.png"
        number="132.620"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <StatCard
        src="./stats3.png"
        number="13.654"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </section>
  );
}
