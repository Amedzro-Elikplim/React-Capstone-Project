import { DISPLAY_COUNTRIES, FETCH_WEATHER } from './Actions';

export const DISPLAY = () => ({ type: DISPLAY_COUNTRIES });
export const FETCH = (id) => ({ type: FETCH_WEATHER, payload: id });
