import { FETCH_WEATHER, DISPLAY_COUNTRIES } from './Actions';
import WEATHER_API from '../../api.config';

export const FETCH = (data) => ({ type: FETCH_WEATHER, payload: data });
export const DISPLAY = () => ({ type: DISPLAY_COUNTRIES, payload: null });

export const FETCHTHUNK = (id) => async (dispatch, getState) => {
  try {
    const country = getState().weather.filter((item) => item.id === id);
    const { latitude, longitude } = country[0];

    const weather = await fetch(WEATHER_API(latitude, longitude));
    const data = await weather.json();

    dispatch(FETCH(data));
  } catch (error) {
    throw new Error(error);
  }
};
