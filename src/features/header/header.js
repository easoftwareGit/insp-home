import React from "react";
import './header.css';
import { WeatherTempAndText } from "./WeatherTempAndText";

import clearImage from "../../images/weather/clear.png";
import cloudyImage from "../../images/weather/cloudy.png";
import foggyImage from "../../images/weather/foggy.png";
import partlyCloudyImage from "../../images/weather/partly_cloudy.png";
import rainImage from "../../images/weather/rain.png";
import snowImage from "../../images/weather/snow.png";
import stormyImage from "../../images/weather/stormy.png";
import windyImage from "../../images/weather/windy.png";

export class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      image: '',
      tempurature: 0,
      current: ''
    }    
  }

  setWeatherImage(current) {
    switch (current) {
      case "Clear":
        this.setState({
          image: clearImage
        });        
        break;
      case "Cloudy":
        this.setState({
          image: cloudyImage
        });        
        break;
      case "Foggy":
        this.setState({
          image: foggyImage
        });        
        break;
      case "Partly Cloudy":
        this.setState({
          image: partlyCloudyImage
        });        
        break;
      case "Rain":
        this.setState({
          image: rainImage
        });        
        break;
      case "Snow":
        this.setState({
          image: snowImage
        });        
        break;
      case "Stormy":
        this.setState({
          image: stormyImage
        });        
        break;
      case "Windy":
        this.setState({
          image: windyImage
        });        
        break;
      default:
        this.image = '';
    }
  }

  componentDidMount() {
    this.setState({      
      tempurature: 65.7,
      current: 'Partly Cloudy'
    });
    this.setWeatherImage('Partly Cloudy');
  }

  render() {    
    return (      
      <div id="header">
        <div id="headerContainer">          
          <div id="weatherImageBox" className="headerBox">                      
            <img id="weatherImage" src={this.state.image} alt="weather"></img>
          </div>
          <div id="weatherTempText" className="headerBox">          
            <WeatherTempAndText info={this.state}/>            
          </div>        
        </div>
      </div>
    )
  }
}


