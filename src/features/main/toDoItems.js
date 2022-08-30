import React from "react";
import { ToDoItem } from "./toDoItem";

export function ToDoItems({ items }) {

  const toDoColors = [
    "berkelyBlue",
    "californiaGold"
  ];
  
  const getToDoColor = (index) => toDoColors[index % toDoColors.length];

  return (
    <div id="currentItems" className="toDoContainer">
      <ul id="itemsList">
        {items.map(({ text, isDone }, index) => (
          <li
            key={text}
            className={`item-${getToDoColor(index)} itemStyle`}                
          >
            <ToDoItem id={index} isDone={isDone} />
            {text}            
          </li>
        ))}
      </ul>
    </div>
  )
}
