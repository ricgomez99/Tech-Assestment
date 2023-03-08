import React from "react";
import styles from "./form.module.css";

export default function Form() {
  return (
    <form className={styles.formContainer}>
      <h5 className={styles.formTitle}>Lorem ipsum dolor sit</h5>
      <p className={styles.subTitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Placeholder *"
          className={styles.input1}
        />
        <select className={styles.select} placeholder="Placeholder *"></select>
        <input
          type="date"
          placeholder="DD/MM/YY *"
          className={styles.dateInput}
        />
        <input
          type="text"
          placeholder="Placeholder *"
          className={styles.input2}
        />
        <label className={styles.label}>
          <input type="checkbox" className={styles.cbox} />
          Lorem ipsum dolor sit amet.
        </label>
      </div>
      <button className={styles.subBtn}>SUBMIT</button>
    </form>
  );
}
