const APIKEY = '87bb6e69e576992d5d10fc2ec170493b';
const WEATHER_API = (latitude, longitude) => `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}`;
export default WEATHER_API;
