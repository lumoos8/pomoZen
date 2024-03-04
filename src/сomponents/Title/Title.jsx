import React from "react";
import styles from "./title.module.css";

const Title = ({ title }) => {
  return (
    <div className={styles.divider}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.dividerLine}></div>
    </div>
  );
};

export default Title;
