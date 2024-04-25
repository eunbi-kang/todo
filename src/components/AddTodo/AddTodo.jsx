import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const [isInputClicked, setIsInputClicked] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        onFocus={() => {
          setIsInputClicked(true);
        }}
        onBlur={()=>{
          setIsInputClicked(false);
        }}
        className={styles.input}
        type="text"
        placeholder={isInputClicked === true ? "" : "Add Todo"}
        value={text}
        onChange={handleChange}
      />
      <button className={styles.button}>Add</button>
    </form>
  );
}
