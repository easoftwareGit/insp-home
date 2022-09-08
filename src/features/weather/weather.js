import React, { useEffect }  from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getWeather }from "./weatherSlice";
import './weather.css';

// import { useDispatch } from 'react-redux';
// import { getWeather } from "./weatherSlice"; 

// import dayImage0 from '../../images/weather/clear.png';

export function Weather() {

  // const { images, 
  //         imageIndex, 
  //         temperature, 
  //         description } = useSelector((state) => state.weather);

  const { metaData, temperature } = useSelector((state) => state.weather);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  return (
    <div id="weatherComtainer">
      <div id="weatherImageBox" className="weatherBox">
        <img 
          id="weatherImage" 
          src={`http://openweathermap.org/img/wn/${metaData.icon}@2x.png`} 
          // src={images[imageIndex]} 
          alt="weather" 
          onClick={() => {dispatch(getWeather())}}
        ></img>        
      </div>
      <div id="weatherInfo" className="weatherBox">
        <p id="temperature">{temperature}º</p>
        {/* <p id="temperature">92.0º</p> */}
        <p id="description">{metaData.description}</p>
        {/* <p id="description">Sunny</p> */}
      </div>
    </div>
  )
}