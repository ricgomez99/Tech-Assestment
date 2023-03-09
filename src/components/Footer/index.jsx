import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  const col1 = [
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
  ];
  const col2 = [
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
  ];

  return (
    <section className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img className={styles.footLogo} src="/logoFoot.PNG" alt="logo" />
          <p className={styles.footText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh diam
            massa aenean tortor euismod auctor faucibus eget eget.
          </p>
        </div>
        <div className={styles.navLinks}>
          <div className={styles.col}>
            {col1?.map((col, index) => (
              <a className={styles.link} href={col.path} key={index}>
                {col.name}
              </a>
            ))}
          </div>
          <div className={styles.col}>
            {col2?.map((col, index) => (
              <a className={styles.link} href={col.path} key={index}>
                {col.name}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.social}>
          <img className={styles.img} src="/linkedin-foot.png" alt="linkedin" />
          <img className={styles.img} src="/facebook-foot.png" alt="facebook" />
          <img
            className={styles.img}
            src="/instagram-foot.png"
            alt="instagram"
          />
        </div>
      </div>
      <div className={styles.copyRight}>
        <h6 className={styles.title}>Legal & policy</h6>
        <h6 className={styles.title}>copyright</h6>
      </div>
    </section>
  );
}
