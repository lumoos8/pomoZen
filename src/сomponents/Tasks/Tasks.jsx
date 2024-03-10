import TaskInput from "./components/TaskInput/TaskInput";
import styles from "./tasks.module.css";
import Title from "./components/Title/Title";
import TaskList from "./components/TaskList/TaskList";
import { useState } from "react";
import { nanoid } from "nanoid";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (value) => {
    const newTask = { id: nanoid(), name: value, counter: 0 };
    setTasks([newTask, ...tasks]);
  };

  return (
    <div className={styles.container}>
      <Title title="Tasks " />
      <TaskInput
        onClick={(taskName) => {
          handleAddTask(taskName);
        }}
      />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Tasks;
