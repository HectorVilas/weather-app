import weatherIcon from './weatherIcon';
import { celsiusToFahrenheit, kilometersToMiles } from './unitConverter';
import valueAdjust from './valueAdjust';
import barAdjust from './barAdjust';

export default function updateCurrentWeather(data) {
  const element = document.querySelector('.weather-current ');
  const city = document.querySelector('.city-para');
  const icon = document.querySelector('.weather-current-icon');
  const weathercode = document.querySelector('.weathercode-para');
  const temp = document.querySelector('.temp-current');
  const tempApparent = document.querySelector('.temp-apparent');
  const humidity = document.querySelector('.humidity');
  const humidityGaugePercent = document.querySelector('.humidity-gauge-percent');
  const windSpeed = document.querySelector('.wind-speed');
  const windDirection = document.querySelector('.wind-direction');

  element.classList.remove('invisible');
  city.innerText = data.city;
  icon.style.backgroundImage = weatherIcon(
    data.weathercode.icon,
    data.localHour,
    data.sunrise[0],
    data.sunset[0],
  );
  weathercode.innerText = `${data.weathercode.weather}${data.weathercode.intensity ? `, ${data.weathercode.intensity}` : ''}`;
  // temp.innerText = data.temp;
  valueAdjust(temp, temp.innerText, data.temp);
  temp.dataset.celsius = data.temp;
  temp.dataset.fahrenheit = celsiusToFahrenheit(data.temp);
  // tempApparent.innerText = data.tempApparent;
  valueAdjust(tempApparent, tempApparent.innerText, data.tempApparent);
  tempApparent.dataset.celsius = data.tempApparent;
  tempApparent.dataset.fahrenheit = celsiusToFahrenheit(data.tempApparent);
  // humidity.innerText = data.humidity;
  valueAdjust(humidity, humidity.innerText, data.humidity);
  barAdjust(humidityGaugePercent, humidityGaugePercent.dataset.percent, data.humidity);
  // windSpeed.innerText = parseInt(data.windSpeed, 10);
  valueAdjust(windSpeed, windSpeed.innerText, parseInt(data.windSpeed, 10));
  windSpeed.dataset.kilometers = parseInt(data.windSpeed, 10);
  windSpeed.dataset.miles = parseInt(kilometersToMiles(data.windSpeed), 10);
  windDirection.style.rotate = `${data.windDirection}deg`;
}
