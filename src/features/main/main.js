import React from "react";
// import { MainItem } from "./mainItem";
import { MainItems } from "./mainItems";
import './main.css';

// const toDoColors = [
//   "berkelyBlue",
//   "californiaGold"
// ];

const mainToDoItems = [
  { text: "To do #1", isDone: false },
  { text: "To do item # two", isDone: false },
  { text: "Just another test", isDone: false },
]

// const getToDoColor = (index) => toDoColors[index % toDoColors.length];

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
        <MainItems items={mainToDoItems} />


        {/* <div id="currentItems" className="toDoContainer">
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
          </ul>          
        </div> */}


      </div>
    )
  }  
}