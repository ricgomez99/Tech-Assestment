import React from "react";
import styles from "./card.module.css";
import SearchBtn from "../SearchBtn";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src="/card-img.png" alt="card image" className={styles.cardImg} />
      </div>
      <div className={styles.data}>
        <h4 className={styles.cardTitle}>Here a card title</h4>
        <p className={styles.cardText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae
          accumsan magna, id commodo sem. Sed turpis ante, posuere eu purus
          venenatis, imperdiet convallis dui. Sed erat mauris, gravida sit amet
          lacus in...
        </p>
        <SearchBtn />
      </div>
    </div>
  );
}
