import React from "react";
import styles from "./taskList.module.css";
import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ taskText }) => {
  const task = {
    id: 1,
    text: "asdasd",
    pomodoroCount: 5,
  };

  return <TaskItem task={task} />;
};

export default TaskList;
