import React from "react";
import { MainItem } from "./mainItem";
import './main.css';

const toDoColors = [
  "berkelyBlue",
  "californiaGold"
];

const mainToDoItems = [
  { text: "To do #1", isDone: false },
  { text: "To do item # two", isDone: false },
  { text: "Just another test", isDone: false },
]

const getToDoColor = (index) => toDoColors[index % toDoColors.length];

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newToDoItem: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({newToDoItem: e.target.value});
  }

  handleSubmit(e) {
    alert('New ToDo Item: ' + this.state.newToDoItem);
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
        <div id="currentItems" className="toDoContainer">
          <ul id="itemsList">
            {mainToDoItems.map(({ text, isDone }, index) => (
              <li
                key={text}
                className={`item-${getToDoColor(index)} itemStyle`}                
              >
                <MainItem id={index} isDone={isDone}/>
                {text}
              </li>
            ))}


            {/* <li className={`item-${getToDoColor(0)} itemStyle`}>              
              <div className="toDoItem">
                <div className="itemActionsContainer">
                  <button className="itemAction remove">Remove</button>
                  <button className="itemAction done">Done</button>
                </div>
                To Do #1
              </div>
            </li>
            <li className={`item-${getToDoColor(1)} itemStyle`}>              
              <div className="toDoItem">
                <div className="itemActionsContainer">
                  <button className="itemAction remove">Remove</button>
                  <button className="itemAction done">Done</button>
                </div>
                To Do item # two 
              </div>
            </li> */}


          </ul>          
        </div>
      </div>
    )
  }  
}