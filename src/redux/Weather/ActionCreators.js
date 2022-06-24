import { DISPLAY_COUNTRIES } from './Actions';
import WEATHER_API from '../../api.config';

export const DISPLAY = () => ({ type: DISPLAY_COUNTRIES });
// export const FETCH = (id) => ({ type: FETCH_WEATHER, payload: id });

export const FETCH = () => async (lat, log) => {
    try {
        const weather = await fetch(WEATHER_API(lat, log));
        console.log(weather);
    } catch (error) {
        throw new Error(error);
    }
};
