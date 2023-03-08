import React from "react";
import styles from "./navBar.module.css";

export default function NavBar() {
  const links = [
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
  ];
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <div className={styles.images}>
          <img className={styles.logo} src="/navIcon-1.svg" />
          <img className={styles.logo2} src="/navIcon-2.svg" />
        </div>
        <div className={styles.socialMedia}>
          <img
            className={styles.socialImg}
            src="/linkedin.png"
            alt="linkedin"
          />
          <img
            className={styles.socialImg}
            src="/facebook.png"
            alt="facebook"
          />
          <img
            className={styles.socialImg}
            src="/instagram.png"
            alt="instagram"
          />
        </div>
        <div className={styles.navLinks}>
          {links?.map((link, index) => (
            <a
              className={styles.link}
              rel="navLinks"
              href={link.path}
              key={index}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
