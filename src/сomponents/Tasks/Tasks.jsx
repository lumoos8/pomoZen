import TaskInput from "./components/TaskInput/TaskInput";
import styles from "./tasks.module.css";
import Title from "./components/Title/Title";
import TaskList from "./components/TaskList/TaskList";
import { useEffect } from "react";

const Tasks = ({ tasks, setTasks }) => {
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={styles.container}>
      <Title title="Tasks " />
      <TaskInput setTasks={setTasks} tasks={tasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Tasks;
