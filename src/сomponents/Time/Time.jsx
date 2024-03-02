import React from "react";
import styles from "./time.module.css";
const Time = ({ seconds }) => {
  const minutes = Math.floor(seconds / 60);
  let displayedSeconds = seconds - minutes * 60;

  if (displayedSeconds < 10) {
    displayedSeconds = "0" + displayedSeconds;
  }

  return (
    <div className={styles.time}>
      <span>{minutes}:</span>
      <span>{displayedSeconds}</span>
    </div>
  );
};

export default Time;
