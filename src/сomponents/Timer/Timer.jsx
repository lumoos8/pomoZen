import React, { useEffect, useState } from "react";
import styles from "./timer.module.css";
import Time from "./components/Time/Time";
import Button from "./components/Button/Button";
import TimerSwitch from "./components/TimerSwitch/TimerSwitch";
const Timer = () => {
  const [seconds, setSeconds] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const isFinished = seconds === 0;

  function handleTabClick(seconds) {
    setSeconds(seconds);
    setIsRunning(false);
  }

  function handleButtonToggle() {
    setIsRunning(!isRunning);
  }

  const handleFinishClick = () => {
    console.log("finish");
    setSeconds(25 * 60);
    //some code
  };

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((seconds) => {
          if (seconds > 0) {
            return seconds - 1;
          } else {
            setIsRunning(false);
            clearInterval(interval);
            return 0;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className={styles.timerBody}>
      <TimerSwitch onClick={handleTabClick} />
      <Time seconds={seconds} />
      {isFinished && <Button onClick={handleFinishClick} text="FINISH" />}
      {!isFinished && (
        <Button
          onClick={handleButtonToggle}
          text={isRunning ? "PAUSE" : "START"}
        />
      )}
    </div>
  );
};

export default Timer;
