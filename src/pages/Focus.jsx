import React, { useState } from "react";
import Timer from "../сomponents/Timer/Timer.jsx";
import Tasks from "../сomponents/Tasks/Tasks.jsx";
// import styles from "./focus.module.css";

const Focus = () => {
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  return (
    <div>
      <Timer tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Focus;
