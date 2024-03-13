import TaskInput from "./components/TaskInput/TaskInput";
import styles from "./tasks.module.css";
import Title from "./components/Title/Title";
import TaskList from "./components/TaskList/TaskList";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

const Tasks = ({ tasks, setTasks }) => {
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (value) => {
    const newTask = {
      id: nanoid(),
      name: value,
      counter: 0,
      isDone: false,
      isFocused: false,
    };
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
