import React from "react";

export default function Header({ filters, filter, onFilterChange }) {
  return (
    <header>
      <ul>
        {/* filters의 요소를 빙글빙글 돌면서 각각의 필터를 우리가 원하는 UI요소로 변환시켜준다
         */}
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onFilterChange(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
