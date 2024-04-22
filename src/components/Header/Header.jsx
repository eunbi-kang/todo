import React from "react";
import {useDarkMode} from '../../context/DarkModeContext';
import {HiMoon, HiSun} from 'react-icons/hi';
import styles from "./Header.module.css";

export default function Header({ filters, filter, onFilterChange }) {
  const {darkMode, toggleDarkMode} = useDarkMode();
  
  return (
    <header className={styles.header}>
      <span className={styles.icon}>
      <button className={styles.button} onClick={toggleDarkMode}>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      </span>
      <ul className={styles.filters}>
        {/* filters의 요소를 빙글빙글 돌면서 각각의 필터를 우리가 원하는 UI요소로 변환시켜준다
         */}
        {filters.map((value, index) => (
          <li key={index}>
            <button  className={`${styles.filter} ${filter === value && styles.selected}`} onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
