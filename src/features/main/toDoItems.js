import React from "react";
import { ToDoItem } from "./toDoItem";
import './toDo.css';

export function ToDoItems({ mainItems }) {

  const toDoColors = [
    "berkelyBlue",
    "californiaGold"
  ];
  
  const getToDoColor = (index) => toDoColors[index % toDoColors.length];

  return (
    <div id="currentItems" className="toDoContainer">
      <ul id="itemsList">
        {mainItems.map(({ text, isDone }, index) => (
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
