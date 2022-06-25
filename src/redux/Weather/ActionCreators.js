import { FETCH_WEATHER, DISPLAY_COUNTRIES } from './Actions';
import WEATHER_API from '../../api.config';

export const FETCH = (data) => ({ type: FETCH_WEATHER, payload: data });
export const DISPLAY = () => ({ type: DISPLAY_COUNTRIES, payload: null });

export const fetchData = async (latitude, longitude) => {
  const weather = await fetch(WEATHER_API(latitude, longitude));
  const data = await weather.json();

  return data;
};

export const FETCHTHUNK = (id) => async (dispatch, getState) => {
  try {
    const country = getState().countries.filter((item) => item.id === id);
    const { latitude, longitude } = country[0];

    const data = await fetchData(latitude, longitude);

    const dataObj = {
      name: data.name,
      lat: data.coord.lat,
      log: data.coord.lon,
      temp: data.main.temp,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      feels_like: data.main.feels_like,
      description: data.weather[0].description,
    };

    dispatch(FETCH(dataObj));
  } catch (error) {
    throw new Error(error);
  }
};
