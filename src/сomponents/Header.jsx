import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoTitle}>
        <img
          className={styles.logoImg}
          src="/src/assets/logo.png"
          alt="pomoZen"
        />
        <div className={styles.title}>PomoZen</div>
      </Link>

      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link to="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link to="/" className={styles.link}>
              Focus
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
