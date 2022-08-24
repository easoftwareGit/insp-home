import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, toggleItemDone } from './toDoSlice';
import './toDo.css';

export function ToDoItem({ text, id, isDone }) {
  const dispatch = useDispatch(); 

  return (
    <div className="toDoItem">
      <div className="itemActionsContainer">
        <button 
          className="itemAction remove"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </button>        
        <button 
          className="itemAction done"
          onClick={() => dispatch(toggleItemDone(id))}
        >
          {isDone ? "Redo" : "Done"}
        </button>
      </div>
      {text}
    </div>
  );
};