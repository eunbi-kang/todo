import React, { useState, useEffect } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(readTodosFromLocalStorage());

  //todos를 풀어서 새로 추가 된 것만 업데이트 해 줌
  const handleAdd = (todo) => setTodos([...todos, todo]);
  // 업데이트 하고자 하는 것만 업데이트 하는 걸로 바꿔주고 기존의 아이템을 그대로 유지하면서 새로운 배열을 만듦
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
  // 아이디가 삭제하고자 하는 아이디가 아닌 것들만 모아서 setTodos 배열에 모아줌
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const filtered = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function readTodosFromLocalStorage() {
  console.log('readTodosFromLocalStorage');
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : []  ;
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}