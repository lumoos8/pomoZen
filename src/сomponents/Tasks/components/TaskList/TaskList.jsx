import { React } from "react";
import styles from "./taskList.module.css";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, setTasks }) => {
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId)
    setTasks(updatedTasks);
  };
  return (
    <ul className={styles.container}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={() => handleDeleteTask(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
