import styles from "./timerSwitch.module.css";
import classNames from "classnames";

const TimerSwitch = ({ onClick, activeTab }) => {
  return (
    <div className={styles.pagination}>
      <button
        className={classNames(styles.btn, {
          [styles.btnActive]: activeTab === "pomodoro",
        })}
        onClick={() => onClick("pomodoro")}
      >
        POMODORO
      </button>
      <button
        className={classNames(styles.btn, {
          [styles.btnActive]: activeTab === "shortBreak",
        })}
        onClick={() => onClick("shortBreak")}
      >
        SHORT BREAK
      </button>
      <button
        className={classNames(styles.btn, {
          [styles.btnActive]: activeTab === "longBreak",
        })}
        onClick={() => onClick("longBreak")}
      >
        LONG BREAK
      </button>
    </div>
  );
};

export default TimerSwitch;
