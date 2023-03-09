import React from "react";
import styles from "./thirdSection.module.css";
import SearchBtn from "../SearchBtn";

export default function ThirdSection() {
  return (
    <section className={styles.mainCont}>
      <div className={styles.imageCont}>
        <img className={styles.image} src="/city.png" alt="city" />
      </div>
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
        <SearchBtn />
      </div>
    </section>
  );
}
