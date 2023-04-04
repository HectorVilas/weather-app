import { celsiusToFahrenheit } from '../../unitConverter';
import valueAdjust from '../../valueAdjust';
import {
  rangePercent,
  rangePercentToPixels,
  hideBetween,
  getNext25,
} from './graphFunctions';
import positionLinesAndHours from './positionLinesAndHours';
import { emptyChart, emptyChartVertices } from './emptyChartPositions';

let storedData;
let storedStartingIndex;

export default function updateHourlyWeather(data, startFromIndex) {
  // prevent error on resizing without chart loaded
  if (data === undefined && storedData === undefined) return;
  // store arguments for later use without passing data
  if (!data) data = storedData;
  storedData = data;
  if (startFromIndex === undefined) startFromIndex = storedStartingIndex;
  storedStartingIndex = startFromIndex;

  const parent = document.querySelector('.weather-hourly');
  parent.classList.remove('invisible');
  const hours = 24;
  // vertical space reserved on pixels for hours and temp values
  const textSpace = 45;
  const width = parseInt(parent.clientWidth, 10);
  const height = parseInt(parent.clientHeight, 10);
  const chartsHeightTemps = ((height * 80) / 100) - textSpace;
  // const chartsHeightWindHumidity = height - textSpace;
  const positionsX = [0];
  // set values for vertex horizontal positions
  for (let i = 0; i < hours; i += 1) {
    const currentValue = (width / (hours)) * (i + 1);
    positionsX.push(currentValue);
  }

  const next25Hours = getNext25(data.hours, startFromIndex);
  positionLinesAndHours(next25Hours, positionsX, textSpace, width, height);
  // update current temperature line chart
  const chartTemp = document.querySelector('.hourly-chart-temperature');
  const chartTempVertices = document.querySelectorAll('.temp-chart-vertex');
  if (!chartTemp.getAttribute('d')) {
    emptyChart(chartTemp, positionsX, chartsHeightTemps);
    emptyChartVertices(chartTempVertices, positionsX, chartsHeightTemps);
  }
  // small timeout to allow animation between the empty chart and the updated one
  setTimeout(() => {
    const next25Temps = getNext25(data.temps, startFromIndex);
    updateTemperature(next25Temps, positionsX, chartsHeightTemps, hours, textSpace);
  }, 50);
}

function updateTemperature(temps, positionsX, chartsHeightTemps, hours, textSpace) {
  // repeat previos value for missing 8th day data at 0hs
  if (temps.at(-1) === undefined) temps[temps.length - 1] = temps.at(-2);
  const tempChart = document.querySelector('.hourly-chart-temperature');
  const tempChartVertices = document.querySelectorAll('.temp-chart-vertex');
  const tempChartTexts = document.querySelectorAll('.temp-chart-text');
  const tempChartNumbers = document.querySelectorAll('.temp-chart-text .temperature-number');
  const positionsY = [];
  // set values for vertex vertical positions
  for (let i = 0; i <= hours; i += 1) {
    const currentValue = parseFloat(temps[i]);
    positionsY.push(currentValue);
  }
  const minValue = positionsY.reduce((min, current) => (min < current ? min : current));
  const maxValue = positionsY.reduce((max, current) => (max > current ? max : current));
  // turn values to pixels
  const positionsToPixels = positionsY.map((value) => {
    const percent = rangePercent(minValue, maxValue, value);
    return rangePercentToPixels(percent, chartsHeightTemps);
  });
  // use values on draw
  let drawTemp = '';
  positionsX.forEach((pos, i) => {
    const lineCommand = i === 0 ? 'M' : 'L';
    const posX = pos;
    const posY = positionsToPixels[i];
    drawTemp += ` ${lineCommand} ${posX} ${posY + (textSpace / 2)}`;
  });

  tempChart.setAttribute('d', drawTemp);

  // position the numbers on each vertex
  tempChartTexts.forEach((text, i) => {
    text.setAttribute('x', positionsX[i]);
    text.setAttribute('y', positionsToPixels[i] + (textSpace / 4));
  });
  hideBetween(tempChartTexts);
  tempChartNumbers.forEach((number, i) => {
    valueAdjust(number, number.textContent, temps[i], 10);
    number.dataset.celsius = temps[i];
    number.dataset.fahrenheit = celsiusToFahrenheit(temps[i]);
  });

  // position circle vertices
  tempChartVertices.forEach((vertex, i) => {
    vertex.setAttribute('cx', `${positionsX[i]}`);
    vertex.setAttribute('cy', `${positionsToPixels[i] + (textSpace / 2)}`);
  });
  hideBetween(tempChartVertices);
}

// add listener to window resize to adjust graph
let windowResizeTimeout;

window.addEventListener('resize', () => {
  clearTimeout(windowResizeTimeout);
  windowResizeTimeout = setTimeout(() => {
    updateHourlyWeather();
  }, 100);
});
