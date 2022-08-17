import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import backgroundImageReducer from '../features/background/backgroundSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    backgroundImage: backgroundImageReducer,
  },
});
