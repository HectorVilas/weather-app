import {
  getHours,
  getMinutes,
  addDays,
  getDay,
} from 'date-fns';
import getWeathercode from './weathercode';
import weatherIcon from './weatherIcon';

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export default function updateDailyWeather(data) {
  // icon and temps
  const section = document.querySelector('.weather-daily');
  const days = section.querySelectorAll('.daily-day');
  const icons = section.querySelectorAll('.daily-weather-icon');
  const temperatures = section.querySelectorAll('.daily-temp');
  const apparents = section.querySelectorAll('.daily-temp-apparent');
  const descriptions = section.querySelectorAll('.daily-weather-description');
  // extra info
  const precipitationQuantities = section.querySelectorAll('.daily-precipitation-quantity');
  const precipitationHours = section.querySelectorAll('.daily-precipitations-hours');
  const windSpeeds = section.querySelectorAll('.daily-wind-speed');
  const sunrises = section.querySelectorAll('.daily-sunrise');
  const sunsets = section.querySelectorAll('.daily-sunset');
  const uvIndexes = section.querySelectorAll('.daily-uv-index');

  days.forEach((day, i) => {
    day.innerText = dayNames[getDay(addDays(new Date(), i))];
  });
  icons.forEach((icon, i) => {
    const iconParts = getWeathercode(data.weathercodes[i]).icon;
    icon.style.backgroundImage = weatherIcon(iconParts);
  });
  temperatures.forEach((temp, i) => {
    temp.innerText = data.temps[i];
  });
  apparents.forEach((apparent, i) => {
    apparent.innerText = data.apparents[i];
  });
  descriptions.forEach((description, i) => {
    description.innerText = getWeathercode(data.weathercodes[i]).weather;
  });
  precipitationQuantities.forEach((quantity, i) => {
    quantity.innerText = `${data.precipitationQuantities[i]}mm`;
  });
  precipitationHours.forEach((hours, i) => {
    hours.innerText = `${data.precipitationHours[i]}hs`;
  });
  windSpeeds.forEach((speed, i) => {
    speed.innerText = `${data.windSpeeds[i]}hs`;
  });
  sunrises.forEach((sunrise, i) => {
    sunrise.innerText = `${getHours(new Date(data.sunrises[i]))}:${getMinutes(new Date(data.sunrises[i]))}hs`;
  });
  sunsets.forEach((sunset, i) => {
    sunset.innerText = `${getHours(new Date(data.sunsets[i]))}:${getMinutes(new Date(data.sunsets[i]))}hs`;
  });
  uvIndexes.forEach((uv, i) => {
    uv.innerText = data.uvIndexes[i];
  });
}
