import React from "react";
import './header.css';

export class WeatherTempAndText extends React.Component {  
  render() { 
    const weatherInfo = this.props.info;
    return (
      <div>        
        <div id="weatherTemp">                      
          <p>{weatherInfo.tempurature}º</p>
        </div>                  
        <p id="weatherCurrent">{weatherInfo.current}</p>
      </div>
    )
  }
}