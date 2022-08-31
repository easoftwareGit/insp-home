// import React from "react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToDoItems } from "./toDoItems";
import { addItem } from "./toDoSlice";

import './toDo.css';

export const ToDo = () => {
  const [newToDoItem, setNewToDoItem] = useState("");
  // use "const { items } = " because only want the items property of the state.
  // if use "const items = " will get the whole state, both items and done items properties.
  const { items } = useSelector((state) => state.toDo); 
  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.prevetDefault();
    if (newToDoItem === "") {
      return;
    }
    dispatch(addItem(newToDoItem));
    setNewToDoItem("");
  };

  return (
    <div id="mainContainer">
      <div id="newItem" className="toDoContainer">
      <div id="newItemTitle">New item goes here</div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          id="newItemInput"
          value={newToDoItem}
          onChange={(e) => setNewToDoItem(e.target.value)}
        />           
      </form>
      </div>
      <ToDoItems mainItems={items} />
    </div>
  )
}