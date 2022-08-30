import React from "react";
import { MainItem } from "./mainItem";

export const MainItems = ({ items }) => {

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
            <MainItem id={index} isDone={isDone}/>
            {text}
          </li>
        ))}
      </ul>          
    </div>    
  );
};