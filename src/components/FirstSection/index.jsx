import React from "react";
import styles from "./first.module.css";
import Form from "../Form";

export default function FirstSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.textCont}>
        <div className={styles.text}>
          <h1 className={styles.textTitle}>Title goes here</h1>
          <h4 className={styles.textSub}>Subhead goes here</h4>
          <p className={styles.textPar}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh diam
            massa aenean tortor euismod auctor faucibus eget eget. Amet
            consequat pharetra feugiat egestas pellentesque iaculis. Lorem nunc
            phasellus tellus mattis. Risus duis et non ac gravida amet
            adipiscing.
          </p>
        </div>
      </div>
      <div className={styles.formCont}>
        <Form />
      </div>
    </section>
  );
}
