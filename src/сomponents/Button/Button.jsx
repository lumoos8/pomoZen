import React from "react";
import styles from "./button.module.css";

const Button = ({ onClick, text }) => {
  // function handleClick() {
  //   console.log("Clicked");
  // }
  //логика

  return (
    <button className={styles.btn} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
