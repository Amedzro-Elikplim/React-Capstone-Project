import { configureStore } from '@reduxjs/toolkit';
import weather from './Weather/WeatherReducer';

const store = configureStore({
  reducer: {
    weather,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export default store;
