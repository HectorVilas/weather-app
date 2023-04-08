import getWeathercode from '../../weathercode';
import { celsiusToFahrenheit, kilometersToMiles } from '../../unitConverter';

export function showHourlyDetail() {
  const detailsCard = document.querySelector('.chart-details-div');
  detailsCard.classList.remove('hidden');
  // unit checkboxes
  const tempUnits = document.querySelector('.temperature-unit');
  const speedUnits = document.querySelector('.wind-speed-unit');
  // each element on card
  const temp = document.querySelector('.chart-details-value-temp');
  const tempUnit = document.querySelector('.chart-details-unit-temp');
  const apparent = document.querySelector('.chart-details-value-apparent');
  const apparentUnit = document.querySelector('.chart-details-unit-apparent');
  const wind = document.querySelector('.chart-details-value-wind');
  const windUnit = document.querySelector('.chart-details-unit-wind');
  const humidity = document.querySelector('.chart-details-value-humidity');
  const weather = document.querySelector('.chart-details-value-weathercode');
  // weather description
  const weatherType = getWeathercode(parseInt(this.dataset.weathercode, 10)).weather;
  const weatherIntensity = getWeathercode(parseInt(this.dataset.weathercode, 10))?.intensity;

  temp.innerText = tempUnits.checked
    ? celsiusToFahrenheit(this.dataset.temp) : this.dataset.temp;
  tempUnit.innerText = tempUnits.checked ? '°F' : '°C';
  apparent.innerText = tempUnits.checked
    ? celsiusToFahrenheit(this.dataset.apparent) : this.dataset.apparent;
  apparentUnit.innerText = tempUnits.checked ? '°F' : '°C';
  wind.innerText = speedUnits.checked ? kilometersToMiles(this.dataset.wind) : this.dataset.wind;
  windUnit.innerText = speedUnits.checked ? 'mph' : 'km/h';
  humidity.innerText = this.dataset.humidity;
  weather.innerText = `${weatherType}${weatherIntensity ? `, ${weatherIntensity}` : ''}`;
}

export function hideHourlyDetail() {
  const detailsCard = document.querySelector('.chart-details-div');
  detailsCard.classList.add('hidden');
}
