import {
  getHours,
  getMinutes,
  addDays,
  getDay,
  getDate,
} from 'date-fns';
import getWeathercode from '../../weathercode';
import weatherIcon from '../../weatherIcon';
import { celsiusToFahrenheit, kilometersToMiles } from '../../unitConverter';

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function updateDailyWeather(data) {
  // icon and temps
  const section = document.querySelector('.weather-daily');
  const days = section.querySelectorAll('.daily-day');
  const icons = section.querySelectorAll('.daily-weather-icon');
  const tempsMax = section.querySelectorAll('.daily-temp-max');
  const tempsMin = section.querySelectorAll('.daily-temp-min');
  const descriptions = section.querySelectorAll('.daily-weather-description');
  // extra info
  const precipitationQuantities = section.querySelectorAll('.daily-precipitation-quantity');
  const precipitationHours = section.querySelectorAll('.daily-precipitations-hours');
  const windSpeeds = section.querySelectorAll('.daily-wind-speed');
  const sunrises = section.querySelectorAll('.daily-sunrise');
  const sunsets = section.querySelectorAll('.daily-sunset');
  const uvIndexes = section.querySelectorAll('.daily-uv-index');

  section.classList.remove('invisible');

  days.forEach((day, i) => {
    day.innerText = i === 0 ? 'Today' : `${dayNames[getDay(addDays(new Date(), i))]} ${getDate(addDays(new Date(), i))}`;
  });
  icons.forEach((icon, i) => {
    const iconParts = getWeathercode(data.weathercodes[i]).icon;
    icon.style.backgroundImage = weatherIcon(iconParts);
  });
  tempsMax.forEach((temp, i) => {
    const temperature = data.tempsMax[i];
    temp.innerText = temperature;
    temp.dataset.celsius = temperature;
    temp.dataset.fahrenheit = celsiusToFahrenheit(temperature);
  });
  tempsMin.forEach((apparent, i) => {
    const temperature = data.tempsMin[i];
    apparent.innerText = temperature;
    apparent.dataset.celsius = temperature;
    apparent.dataset.fahrenheit = celsiusToFahrenheit(temperature);
  });
  descriptions.forEach((description, i) => {
    const weather = getWeathercode(data.weathercodes[i]);
    const type = weather.weather;
    const hasIntensity = weather.intensity !== undefined;
    const intensity = `, ${weather.intensity}`;
    description.innerText = `${type}${hasIntensity ? intensity : ''}`;
  });
  precipitationQuantities.forEach((quantity, i) => {
    quantity.innerText = `${data.precipitationQuantities[i]}mm`;
  });
  precipitationHours.forEach((hours, i) => {
    hours.innerText = `${data.precipitationHours[i]}hs`;
  });
  windSpeeds.forEach((speed, i) => {
    const windSpeed = parseInt(data.windSpeeds[i], 10);
    speed.innerText = windSpeed;
    speed.dataset.kilometers = windSpeed;
    speed.dataset.miles = parseInt(kilometersToMiles(windSpeed), 10);
  });
  sunrises.forEach((sunrise, i) => {
    sunrise.innerText = `${getHours(new Date(data.sunrises[i]))}:${getMinutes(new Date(data.sunrises[i]))}hs`;
  });
  sunsets.forEach((sunset, i) => {
    sunset.innerText = `${getHours(new Date(data.sunsets[i]))}:${getMinutes(new Date(data.sunsets[i]))}hs`;
  });
  uvIndexes.forEach((uv, i) => {
    uv.innerText = data.uvIndexes[i] === null ? '-' : data.uvIndexes[i];
  });
}
