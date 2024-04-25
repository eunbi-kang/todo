import { useState } from "react";
import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { DarkModeProvider } from "./context/DarkModeContext";
import MetaTag from "./MetaTag";

const filters = ["all", "active", "completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  // console.log(filter);
  console.log(`NODE_ENV = ${process.env.NODE_ENV}`);
  return (
    <>
      <MetaTag />

      <DarkModeProvider>
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
        <TodoList filter={filter} />
      </DarkModeProvider>
    </>
  );
}

export default App;
