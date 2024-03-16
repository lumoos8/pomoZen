import styles from "./taskInput.module.css";
import AddIcon from "../../../../assets/add.svg?react";
import { useState } from "react";

// const handleAddListItem = () => {
//   console.log("Click");
// };

const TaskInput = ({ onClick }) => {
  const [taskName, setTaskName] = useState("");
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        type="text"
        placeholder="What are you focusing on?"
      />
      <button
        className={styles.svgButton}
        onClick={() => {
          if (!taskName) {
            return;
          }

          onClick(taskName);
          setTaskName("");
        }}
      >
        <AddIcon className={styles.svg} />
      </button>
    </div>
  );
};

export default TaskInput;
