import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getWeatherApi from '../../api/weather/openWeatherApi'

// import { dayImages } from "./localWeather";

export const getWeather = createAsyncThunk("weather/getWeather", getWeatherApi);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    metaData: {},
    temperature: ""
  },  
  extraReducers: {
    [getWeather.fulfilled]: (state, action) => {
      state.metaData = action.payload.metaData;
      state.temperature = action.payload.temperature;
    }
  }
})

export default weatherSlice.reducer;

// export const weatherSlice = createSlice({
//   name: 'weather',
//   initialState: {
//     images: dayImages,
//     imageIndex: 0,
//     temperature: '90.9',
//     description: 'Sunny'
//   },
//   reducers: {
//     getWeather: (state) => {  
//       state.imageIndex = Math.floor(Math.random() * (state.images.length));       
//       switch (state.imageIndex) {
//         case 0:
//           state.temperature = '82.0';
//           state.description = 'Clear';
//           break;
//         case 1:
//           state.temperature = '65.1';
//           state.description = 'Cloudy';
//           break;
//         case 2:
//           state.temperature = '43.2';
//           state.description = 'Foggy';
//           break;
//         case 3:
//           state.temperature = '75.3';
//           state.description = 'Partly Cloudy';
//           break;
//         case 4:
//           state.temperature = '58.4';
//           state.description = 'Chance of Rain';
//           break;
//         case 5:
//           state.temperature = '51.5';
//           state.description = 'Rain';
//           break;
//         case 6:
//           state.temperature = '30.6';
//           state.description = 'Snow';
//           break;
//         case 7:
//           state.temperature = '47.7';
//           state.description = 'Stormy';
//           break;
//         case 8:
//           state.temperature = '60.8';
//           state.description = 'Windy';
//           break;
//         default:
//           state.temperature = '??.?';
//           state.description = 'error';
//           break;
//       }
//     }
//   }
// });

// export const { getWeather } = weatherSlice.actions;
// export default weatherSlice.reducer;