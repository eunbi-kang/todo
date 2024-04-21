import { useState } from "react";
import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  // console.log(filter);
  return (
    <>
      <Helmet>
        <title>은비의 To-do App</title>
        <meta
            name="description"
            content="React web site portfolio for world-renowned software
  engineer Eunbi-kang"
          />
          <meta name="author" content="Eunbi" />
          <link
            rel="Shortcut icon"
            href="/public/og.webp"
            type="image/x-icon"
          />
          <meta property="og:url" content="https://eunbi-kang.github.io/todo" />
          <meta property="og:title" content="Eunbi's to-do list" />
          <meta property="og:description" content="은비의 투두 리스트" />
          <meta property="og:type" content="website" />
          <meta
            propery="og:image"
            content="https://eunbi-kang.github.io/public/og.webp"
          />
          <meta property="og:site_name" content="Eunbi's TodoApp" />
      </Helmet>

      <div>
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
        <TodoList filter={filter} />
      </div>
    </>
  );
}

export default App;
