import { configureStore } from '@reduxjs/toolkit';
import weather from './Weather/WeatherReducer';
import countries from './Weather/CountryReducer';

const store = configureStore({
  reducer: {
    weather,
    countries,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
export default store;
