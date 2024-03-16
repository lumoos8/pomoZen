import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>The Pomodoro Technique</h2>

      <div>
        <p className={styles.content}>Choose a task.</p>
        <p className={styles.content}>
          Set a timer to 25 minutes. <br />1 pomodoro = 25 minutes.
        </p>
        <p className={styles.content}>
          Work on your task until the timer is up.
        </p>
        <p className={styles.content}>Take a 5 minute break.</p>
        <p className={styles.content}>
          Repeat the cycle. <br />
          After 4 pomodoros take a 30 minute break.
        </p>
      </div>
    </div>
  );
};

export default About;
