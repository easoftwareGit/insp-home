import React from "react";
import './main.css';

export class Main extends React.Component {

  handleSubmit(e) {
    
  }

  render() {
    return (
      <div id="mainContainer">
        <div id="newItem" className="toDoContainer">
          <div id="newItemTitle">New item goes here</div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" id="newItemInput"></input>
          </form>
        </div>
        <div id="currentItems" className="toDoContainer">
          <ul id="itemsList">
              <li className="item-blue itemStyle">
                <div className="toDoItem">
                  <div className="itemActionsContainer">
                    <button className="itemAction remove">Remove</button>
                    <button className="itemAction done">Done</button>
                  </div>
                  To Do #1
                </div>
              </li>
              <li className="item-red itemStyle">
                <div className="toDoItem">
                  <div className="itemActionsContainer">
                    <button className="itemAction remove">Remove</button>
                    <button className="itemAction done">Done</button>
                  </div>
                  To Do item # two 
                </div>
              </li>
          </ul>          
        </div>
      </div>
    )
  }  
}