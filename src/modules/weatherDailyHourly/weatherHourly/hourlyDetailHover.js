import getWeathercode from '../../weathercode';
import { celsiusToFahrenheit, kilometersToMiles } from '../../unitConverter';

export function showHourlyDetail() {
  const pointed = parseInt(this.dataset.pointed, 10);
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
  // vertices
  const tempVertices = document.querySelectorAll('.temp-chart-vertex');
  const windVertices = document.querySelectorAll('.wind-chart-vertex');
  const humidityVertices = document.querySelectorAll('.humidity-chart-vertex');
  const tempApparentVertices = document.querySelectorAll('.temp-apparent-chart-vertex');
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
  windUnit.innerText = speedUnits.checked ? ' mph' : ' km/h';
  humidity.innerText = this.dataset.humidity;
  weather.innerText = `${weatherType}${weatherIntensity ? `, ${weatherIntensity}` : ''}`;

  const allVertices = [tempVertices, windVertices, humidityVertices, tempApparentVertices];
  allVertices.forEach((vertices) => {
    vertices.forEach((vertex, i) => {
      if (pointed === i) {
        vertex.classList.remove('hidden');
        vertex.setAttribute('r', 7);
      } else {
        vertex.classList.add('hidden');
        vertex.setAttribute('r', 4);
      }
    });
  });
}

export function hideHourlyDetail() {
  const detailsCard = document.querySelector('.chart-details-div');
  // vertices
  const tempVertices = document.querySelectorAll('.temp-chart-vertex');
  const windVertices = document.querySelectorAll('.wind-chart-vertex');
  const humidityVertices = document.querySelectorAll('.humidity-chart-vertex');
  const tempApparentVertices = document.querySelectorAll('.temp-apparent-chart-vertex');

  detailsCard.classList.add('hidden');
  const allVertices = [tempVertices, windVertices, humidityVertices, tempApparentVertices];
  allVertices.forEach((vertices) => {
    vertices.forEach((vertex) => {
      if (vertex.dataset.hidden === 'true') {
        vertex.classList.add('hidden');
      } else {
        vertex.classList.remove('hidden');
      }
      vertex.setAttribute('r', 4);
    });
  });
}
