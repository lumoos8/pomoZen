import { useEffect, useState } from "react";
import styles from "./timer.module.css";
import Time from "./components/Time/Time";
import Button from "./components/Button/Button";
import TimerSwitch from "./components/TimerSwitch/TimerSwitch";
const Timer = ({ tasks, setTasks }) => {
  const [seconds, setSeconds] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [activeTab, setActiveTab] = useState("pomodoro");

  const handleTabClick = (activeTab) => {
    if (activeTab === "pomodoro") {
      setSeconds(25 * 60);
    } else if (activeTab === "shortBreak") {
      setSeconds(5 * 60);
    } else if (activeTab === "longBreak") {
      setSeconds(30 * 60);
    }
    setIsRunning(false);
    setActiveTab(activeTab);
  };

  const handleButtonToggle = () => {
    setIsRunning(!isRunning);
  };

  const handleFinishClick = () => {
    if (activeTab === "pomodoro") {
      const updatedTasks = tasks.map((task) => {
        if (task.isFocused) {
          return {
            ...task,
            counter: task.counter + 1,
          };
        }
        return task;
      });
      setTasks(updatedTasks);
      setActiveTab("shortBreak");
      setSeconds(5 * 60);
    } else {
      setActiveTab("pomodoro");
      setSeconds(25 * 60);
    }
    setIsRunning(false);
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

  const isFinished = seconds === 0;

  return (
    <div className={styles.timerBody}>
      <TimerSwitch onClick={handleTabClick} activeTab={activeTab} />
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
