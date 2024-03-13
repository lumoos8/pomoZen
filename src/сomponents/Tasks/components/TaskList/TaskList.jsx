import { React } from "react";
import styles from "./taskList.module.css";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ tasks, setTasks }) => {
  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleDoneTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return {
          ...task,
          isDone: !task.isDone,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleFocusTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return {
          ...task,
          isFocused: !task.isFocused,
        };
      }
      return { ...task, isFocused: false };
    });
    setTasks(updatedTasks);
  };

  return (
    <ul className={styles.container}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDeleteTask={() => handleDeleteTask(task.id)}
          onDoneTask={() => handleDoneTask(task.id)}
          onFocusTask={() => handleFocusTask(task.id)}
        />
      ))}
    </ul>
  );
};

export default TaskList;
