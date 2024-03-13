import React from "react";
import styles from "./timerSwitch.module.css";

const TimerSwitch = ({ onClick }) => {
  return (
    <div className={styles.pagination}>
      <button className={styles.btn} onClick={() => onClick(3)}>
        POMODORO
      </button>
      <button className={styles.btn} onClick={() => onClick(5 * 60)}>
        SHORT BREAK
      </button>
      <button className={styles.btn} onClick={() => onClick(30 * 60)}>
        LONG BREAK
      </button>
    </div>
  );
};

export default TimerSwitch;
