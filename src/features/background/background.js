import React from "react";
import './background.css';

import bgImage1 from '../../images/backgrounds/background1.jpg';
import bgImage2 from '../../images/backgrounds/background2.jpg';
import bgImage3 from '../../images/backgrounds/background3.jpg';
import bgImage4 from '../../images/backgrounds/background4.jpg';
import bgImage5 from '../../images/backgrounds/background5.jpg';
import bgImage6 from '../../images/backgrounds/background6.jpg';

export class Background extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: ''
    }    
  }

  setBackgroundImage(index) {
    switch (index) {
      case 1:
        this.setState({
          image: bgImage1
        });        
        break;
      case 2:
        this.setState({
          image: bgImage2
        });        
        break;
      case 3:
        this.setState({
          image: bgImage3
        });        
        break;
      case 4:
        this.setState({
          image: bgImage4
        });        
        break;
      case 5:
        this.setState({
          image: bgImage5
        });        
        break;
      case 6:
        this.setState({
          image: bgImage6
        });        
        break;                                  
      default:
        this.setState({
          image: ''
        });        
        break;
    }
  }

  componentDidMount() {
    this.setBackgroundImage(5);
  }

  render() {    
    return (      
      <div id='backgroundImageContainer'>
        {/* <img id='backgroundImage' src={bgImage5} alt="" ></img> */}
        <img id='backgroundImage' src={this.state.image} alt="" ></img>
      </div>
    );
  }
}