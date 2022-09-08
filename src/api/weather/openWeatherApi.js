import { weatherApiKey } from '../apiKeys';
const base_URL = 'https://api.openweathermap.org/data/2.5/weather?';

const getWeatherApi = async () => {

  const city = 'Concord';
  const state = 'California';

  const appId_param = `&appid=${weatherApiKey}`;
  const units_param = '&units=imperial';
  const cityState_param = `&q=${city},${state}`;
  const API_URL = `${base_URL}${appId_param}${units_param}${cityState_param}`;

  const responce = await fetch(API_URL);
  const json = await responce.json();
 
  // return object with properties:
  //    weather: [], array at index 0
  //    temperature: main.temp  

  return {
    metaData: json.weather[0],
    temperature: json.main.temp
  }
}

export default getWeatherApi;