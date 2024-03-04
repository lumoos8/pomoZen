import React from "react";
import styles from "./taskItem.module.css";
import DeleteIcon from "../../../src/assets/delete.svg?react";
import FocusIcon from "../../../src/assets/tomato.svg?react";
import DoneIcon from "../../../src/assets/done.svg?react";

const TaskItem = ({ task }) => {
  const handleDoneTask = () => {
    console.log("done");
  };

  const handleFocusTask = () => {
    console.log("focus");
  };

  const handleDeleteTask = () => {
    console.log("delete");
  };

  return (
    <div className={styles.container}>
      <button className={styles.Btn} onClick={handleDoneTask}>
        <DoneIcon className={styles.svg} />
      </button>
      <div className={styles.taskItem}>{task.text} </div>
      <div className={styles.count}>
        <div>{task.pomodoroCount}</div>
        <button className={styles.Btn} onClick={handleFocusTask}>
          <FocusIcon className={styles.focusSvg} />
        </button>
      </div>
      <button className={styles.Btn} onClick={handleDeleteTask}>
        <DeleteIcon className={styles.svg} />
      </button>
    </div>
  );
};

export default TaskItem;
