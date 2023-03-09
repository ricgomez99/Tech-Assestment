import React from "react";
import styles from "./mid.module.css";

export default function MidSection() {
  return (
    <section className={styles.main}>
      <div className={styles.textCont}>
        <h3 className={styles.textTit}>Lorem Ipsum</h3>
        <p className={styles.textP}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet ornare
          sed adipiscing ac sagittis egestas. Risus dolor, senectus mauris
          tincidunt platea. Tempus viverra amet lacinia velit condimentum sed
          sollicitudin netus eu. Libero, in commodo quis vel ullamcorper
          interdum a integer rhoncus. Imperdiet commodo dignissim velit interdum
          quis.
        </p>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.image} src="/mid-img.png" alt="city" />
      </div>
    </section>
  );
}
