import React from "react";
// import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
// import { useSelector, useDispatch } from "react-redux/es/exports";
import './weather.css';

import { useDispatch } from 'react-redux';
import { getWeather } from "./weatherSlice"; 

// import dayImage0 from '../../images/weather/clear.png';

export function Weather() {

  const { images, 
          imageIndex, 
          temperature, 
          description } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  return (
    <div id="weatherComtainer">
      <div id="weatherImageBox" className="weatherBox">
        <img 
          id="weatherImage" 
          src={images[imageIndex]} 
          alt="weather" 
          onClick={() => {dispatch(getWeather())}}
        ></img>
        {/* <img id="weatherImage" src={dayImage0} alt="weather"></img> */}
      </div>
      <div id="weatherInfo" className="weatherBox">
        <p id="temperature">{temperature}º</p>
        {/* <p id="temperature">92.0º</p> */}
        <p id="description">{description}</p>
        {/* <p id="description">Sunny</p> */}
      </div>
    </div>
  )
}