import { useState } from "react";
import React from "react";
import { Helmet } from "react-helmet-async";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters = ["all", "active", "completed"];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  // console.log(filter);
  return (
    <>
        <Helmet>
        <title>주니어족발자&#39;s To-do App</title>
          <meta name="description" content="Portfolio for world-renowned software
     engineer Eunbi" />
          <meta name="author" content="Eunbi" />
          <link rel="shortcut icon" href="public/favicon.ico" type="image/x-icon" />
          <meta property="og:url" content="https://eunbi-kang.github.io/todo" />
          <meta property="og:title" content="주니어 족발자 은비의 투두앱" />
          <meta property="og:description" content="주니어 족발자 은비의 투두 리스트" />
          <meta property="og:type" content="website" />
          <meta
            propery="og:image"
            content="https://eunbi-kang.github.io/todo/og.webp"
          />
          <meta property="og:site_name" content="Eunbi's TodoApp" />
        </Helmet>
    
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
      </DarkModeProvider>
    </>
  );
}

export default App;
