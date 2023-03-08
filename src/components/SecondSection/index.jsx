import React from "react";
import styles from "./section2.module.css";

export default function SecondSection() {
  return (
    <section className={styles.container}>
      <div className={styles.info}>
        <h3 className={styles.infoTitle}>Lorem Ipsum</h3>
        <p className={styles.infoText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ornare
          sed adipiscing ac sagittis egestas. Risus dolor, senectus mauris
          tincidunt platea. Tempus viverra amet lacinia velit condimentum sed
          sollicitudin netus eu. Libero, in commodo quis vel ullamcorper
          interdum a integer rhoncus. Imperdiet commodo dignissim velit interdum
          quis.
        </p>
      </div>
      <div className={styles.imgCont}>
        <img className={styles.img} src="/context.png" alt="girl pic" />
      </div>
    </section>
  );
}
