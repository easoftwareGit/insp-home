import { configureStore } from '@reduxjs/toolkit';
import backgroundImageReducer from '../features/background/backgroundSlice';
import weatherReducer from '../features/weather/weatherSlice';
import footerReducer from '../features/footer/footerSlice';
import toDoReducer from '../features/main/toDoSlice';

export const store = configureStore({
  reducer: {
    backgroundImage: backgroundImageReducer,
    weather: weatherReducer,
    footer: footerReducer,
    toDo: toDoReducer,
  },
});
