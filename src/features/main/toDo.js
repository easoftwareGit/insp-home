import React from "react";
// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { ToDoItems } from "./toDoItems";
// import { addItem } from "./toDoSlice";

import './toDo.css';

const mainToDoItems = [
  { text: "To do #1", isDone: false },
  { text: "To do item # two", isDone: false },
  { text: "Just another test", isDone: false },
];

export class ToDo extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      newToDoItem: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // const [newToDoItem, setNewToDoItem] = useState("");  
  // const { items } = useSelector((state) => state.toDo);
  // const dispatch = useDispatch();

  // const onFormSubmit = (e) => {    
  //   e.preventDefault();
  //   if (newToDoItem === "") {
  //     return;
  //   }    
  //   dispatch(addItem(newToDoItem));    
  //   setNewToDoItem("");
  // }

  handleChange(e) {
    this.setState({newToDoItem: e.target.value});
  }

  handleSubmit(e) {
    mainToDoItems.push({text: this.state.newToDoItem, isDone: false})
    this.setState({newToDoItem: ''});
    document.getElementById('newItemInput').value='';
    e.preventDefault();    
  }

  render() {
    return (    
      <div id="mainContainer">
        <div id="newItem" className="toDoContainer">
          <div id="newItemTitle">New item goes here</div>
          <form onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              id="newItemInput"             
              value={this.state.value}
              onChange={this.handleChange}
            />            
          </form>
        </div>
        <ToDoItems items={mainToDoItems}/>
      </div>    
    );
  }
};