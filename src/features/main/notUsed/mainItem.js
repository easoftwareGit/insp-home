import React from "react";

export function MainItem({ id, isDone }) {

  return (
    <div className="toDoItem">
      <div className="itemActionsContainer">
        <button className="itemAction remove">
          Remove
        </button>
        <button className="itemAction done">
          {isDone ? "Redo" : "Done"}
        </button>
      </div>      
    </div>
  )
}