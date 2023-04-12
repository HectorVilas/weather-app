import getWeathercode from '../../weathercode';
import { celsiusToFahrenheit, kilometersToMiles } from '../../unitConverter';

let tempVertices;
let windVertices;
let humidityVertices;
let tempApparentVertices;
let detailsCard;

export function showHourlyDetail() {
  const pointed = parseInt(this.dataset.pointed, 10);
  detailsCard = document.querySelector('.chart-details-div');
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
  tempVertices = document.querySelectorAll('.temp-chart-vertex');
  windVertices = document.querySelectorAll('.wind-chart-vertex');
  humidityVertices = document.querySelectorAll('.humidity-chart-vertex');
  tempApparentVertices = document.querySelectorAll('.temp-apparent-chart-vertex');
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
      } else {
        vertex.classList.add('hidden');
      }
    });
  });
}

export function positionHourlyDetail(e) {
  detailsCard = document.querySelector('.chart-details-div');
  const hourlyParent = e.target.closest('.chart-weather-icons-div');
  const detailsCardWidth = detailsCard.clientWidth;
  const hourlyParentWidth = hourlyParent.clientWidth;
  const mouseX = e.layerX;
  const mouseY = e.layerY;
  const pixelsBeforeBorder = 20;
  const distanceFromCursor = 5;
  const borderRadius = 15;
  const isOverflowing = mouseX + (detailsCardWidth + pixelsBeforeBorder) > hourlyParentWidth;
  detailsCard.style.left = `${mouseX}px`;
  detailsCard.style.top = `${mouseY}px`;
  detailsCard.style.transform = isOverflowing
    ? `translate(calc(-100% - ${distanceFromCursor}px), calc(-100% - ${distanceFromCursor}px))`
    : `translate(${distanceFromCursor}px, calc(-100% - ${distanceFromCursor}px))`;
  detailsCard.style.borderRadius = isOverflowing
    ? `${borderRadius}px ${borderRadius}px 0px ${borderRadius}px`
    : `${borderRadius}px ${borderRadius}px ${borderRadius}px 0px`;
}

export function hideHourlyDetail() {
  detailsCard.classList.add('hidden');
  const allVertices = [tempVertices, windVertices, humidityVertices, tempApparentVertices];
  allVertices.forEach((vertices) => {
    vertices.forEach((vertex) => {
      if (vertex.dataset.hidden === 'true') {
        vertex.classList.add('hidden');
      } else {
        vertex.classList.remove('hidden');
      }
    });
  });
}
