import React from "react";
import styles from "./taskItem.module.css";
import DeleteIcon from "../../../../assets/delete.svg?react";
import FocusIcon from "../../../../assets/tomato.svg?react";
import DoneIcon from "../../../../assets/done.svg?react";
import classNames from "classnames";

const TaskItem = ({ task, onDeleteTask, onDoneTask, onFocusTask }) => {
  return (
    <li className={styles.container}>
      <button className={styles.btn} onClick={onDoneTask}>
        <DoneIcon className={styles.svg} />
      </button>

      <div
        className={classNames(styles.taskItem, {
          [styles.textStriked]: task.isDone,
        })}
      >
        {task.name}{" "}
      </div>

      <div className={styles.count}>
        <div>{task.counter}</div>

        <button className={styles.btn} onClick={onFocusTask}>
          <FocusIcon
            className={classNames(styles.focusSvg, {
              [styles.focusedSvg]: task.isFocused,
            })}
          />
        </button>
      </div>

      <button className={styles.btn} onClick={onDeleteTask}>
        <DeleteIcon className={styles.svg} />
      </button>
    </li>
  );
};

export default TaskItem;
