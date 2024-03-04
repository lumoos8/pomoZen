import React from "react";
import styles from "./taskInput.module.css";
import AddIcon from "../../../src/assets/add.svg?react";

const handleAddListItem = () => {
  console.log("Click");
};

const TaskInput = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder={placeholder} />
      <button className={styles.svgButton} onClick={handleAddListItem}>
        <AddIcon className={styles.svg} />
      </button>
    </div>
  );
};

export default TaskInput;
