import weather from './Weather/WeatherReducer';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        weather
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});