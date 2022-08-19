import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import backgroundImageReducer from '../features/background/backgroundSlice';
import weatherReducer from '../features/weather/weatherSlice';
import footerReducer from '../features/footer/footerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    backgroundImage: backgroundImageReducer,
    weather: weatherReducer,
    footer: footerReducer,
  },
});
