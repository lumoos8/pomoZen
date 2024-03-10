import React from "react";
import styles from "./taskItem.module.css";
import DeleteIcon from "../../../../assets/delete.svg?react";
import FocusIcon from "../../../../assets/tomato.svg?react";
import DoneIcon from "../../../../assets/done.svg?react";

const TaskItem = ({ task, onDeleteTask }) => {
  const handleDoneTask = () => {
    console.log("done");
  };

  const handleFocusTask = () => {
    console.log("focus");
  };

  return (
    <li className={styles.container}>
      <button className={styles.Btn} onClick={handleDoneTask}>
        <DoneIcon className={styles.svg} />
      </button>
      <div className={styles.taskItem}>{task.name} </div>
      <div className={styles.count}>
        <div>{task.counter}</div>
        <button className={styles.Btn} onClick={handleFocusTask}>
          <FocusIcon className={styles.focusSvg} />
        </button>
      </div>
      <button className={styles.Btn} onClick={onDeleteTask}>
        <DeleteIcon className={styles.svg} />
      </button>
    </li>
  );
};

export default TaskItem;
