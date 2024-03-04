import React from "react";
import TaskInput from "../TaskInput/TaskInput";
import styles from "./tasks.module.css";
import Title from "../Title/Title";
import TaskList from "../TaskList/TaskList";
import TaskItem from "../TaskItem/TaskItem";

const Tasks = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <Title title="Tasks "/>
      <TaskInput placeholder={"What are you focusing on?"} />
      <TaskList />
    </div>
  );
};

export default Tasks;
