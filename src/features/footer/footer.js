import React from "react";
import './footer.css'
const quote = "If you spend too much time thinking about a thing, you'll never get it done.";
const source = 'Bruce Lee';

export class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div id="quote">
          {`"${quote}"`}
        </div>
        <div id="source">
          {`- ${source}`}
        </div>
      </div>
    );
  }
}
