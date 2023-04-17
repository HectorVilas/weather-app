import updateCurrentWeather from '../weatherCurrent/updateCurrentWeather';
import updateDailyWeather from '../weatherDailyHourly/weatherDaily/updateDailyWeather';
import updateHourlyWeather from '../weatherDailyHourly/weatherHourly/updateHourlyWeather';
import backgroundUpdate from '../background/backgroundUpdate';
import domCitiesList from './citiesList';
import { fetchWeather } from '../fetch';
import getWeathercode from '../weathercode';

export default async function updateCompleteWeather(chosenCity) {
  const { latitude } = chosenCity.dataset;
  const { longitude } = chosenCity.dataset;
  const weather = await fetchWeather(latitude, longitude);
  const currentHour = new Date().getHours();
  const currentWeatherData = {
    city: chosenCity.dataset.location,
    weathercode: getWeathercode(weather.current_weather.weathercode),
    temp: weather.current_weather.temperature,
    tempApparent: weather.hourly.apparent_temperature[currentHour],
    humidity: weather.hourly.relativehumidity_2m[currentHour],
    windSpeed: weather.current_weather.windspeed,
    windDirection: weather.current_weather.winddirection,
    sunrise: weather.daily.sunrise,
    sunset: weather.daily.sunset,
    localHour: weather.current_weather.time,
  };
  const dailyWeatherData = {
    weathercodes: weather.daily.weathercode,
    tempsMax: weather.daily.temperature_2m_max,
    tempsMin: weather.daily.temperature_2m_min,
    precipitationQuantities: weather.daily.precipitation_sum,
    precipitationHours: weather.daily.precipitation_hours,
    windSpeeds: weather.daily.windspeed_10m_max,
    sunrises: weather.daily.sunrise,
    sunsets: weather.daily.sunset,
    uvIndexes: weather.daily.uv_index_max,
  };
  const hourlyWeatherData = {
    localHour: new Date(weather.current_weather.time).getHours(),
    hours: weather.hourly.time,
    temps: weather.hourly.temperature_2m,
    humidity: weather.hourly.relativehumidity_2m,
    apparent: weather.hourly.apparent_temperature,
    weathercode: weather.hourly.weathercode,
    windspeed: weather.hourly.windspeed_10m,
    windDirection: weather.hourly.winddirection_10m,
    sunrise: weather.daily.sunrise[0],
    sunset: weather.daily.sunset[0],
  };
  updateCurrentWeather(currentWeatherData);
  updateDailyWeather(dailyWeatherData);
  updateHourlyWeather(hourlyWeatherData, hourlyWeatherData.localHour);
  // hide search, remove properties and values
  const domSearch = document.querySelector('.city-search');
  const searchInput = document.querySelector('.search-input');
  const searchLoading = document.querySelector('.search-loading');
  const mainMenuBackground = document.querySelector('.main-menu-background');
  const activeCard = document.querySelector('.daily-card.active');
  domSearch.classList.add('hidden');
  searchInput.removeAttribute('disabled');
  searchInput.classList.remove('loading');
  searchInput.value = '';
  searchLoading.classList.add('hidden');
  activeCard?.classList.remove('active');
  mainMenuBackground.classList.add('invisible');
  // clear results after hiding
  domCitiesList('');
  // getting background ready
  backgroundUpdate();
}
