import styles from "./taskInput.module.css";
import AddIcon from "../../../../assets/add.svg?react";
import { useState } from "react";
import { nanoid } from "nanoid";

const TaskInput = ({ tasks, setTasks }) => {
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (!taskName) {
      return;
    }

    const newTask = {
      id: nanoid(),
      name: taskName,
      counter: 0,
      isDone: false,
      isFocused: false,
    };

    setTasks([newTask, ...tasks]);
    setTaskName("");
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        type="text"
        placeholder="What are you focusing on?"
      />
      <button className={styles.svgButton} onClick={handleAddTask}>
        <AddIcon className={styles.svg} />
      </button>
    </div>
  );
};

export default TaskInput;
