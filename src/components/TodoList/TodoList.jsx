import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: "123", text: "호야와 장보기", status: "active" },
    { id: "124", text: "먼비와 공부하기", status: "active" },
  ]);
  //todos를 풀어서 새로 추가 된 것만 업데이트 해 줌
  const handleAdd = (todo) => setTodos([...todos, todo]);
  // 업데이트 하고자 하는 것만 업데이트 하는 걸로 바꿔주고 기존의 아이템을 그대로 유지하면서 새로운 배열을 만듦
  const handleUpdate = (updated) => setTodos(todos.map(t => t.id === updated.id ? updated : t));
  // 아이디가 삭제하고자 하는 아이디가 아닌 것들만 모아서 setTodos 배열에 모아줌
  const handleDelete = (deleted) => setTodos(todos.filter(t=> t.id !== deleted.id));
  return (
    <section>
      <ul>
        {todos.map((item) => (
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
