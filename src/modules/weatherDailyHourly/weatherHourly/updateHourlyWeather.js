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
  const chartTemp = document.querySelector('.hourly-chart-temp');
  const chartTempVertices = document.querySelectorAll('.temp-chart-vertex');
  if (!chartTemp.getAttribute('d')) {
    emptyChart(chartTemp, positionsX, chartsHeightTemps);
    emptyChartVertices(chartTempVertices, positionsX, chartsHeightTemps);
  }
  // small timeout to allow animation between the empty chart and the updated one
  setTimeout(() => {
    const next25Temps = getNext25(data.temps, startFromIndex);
    updateChartLine(next25Temps, positionsX, chartsHeightTemps, hours, textSpace, 'temp');
  }, 50);
}

function updateChartLine(values, positionsX, chartsHeight, hours, textSpace, className) {
  // repeat previos value for missing 8th day data at 0hs
  if (values.at(-1) === undefined) values[values.length - 1] = values.at(-2);
  const chart = document.querySelector(`.hourly-chart-${className}`);
  const chartVertices = document.querySelectorAll(`.${className}-chart-vertex`);
  const chartTexts = document.querySelectorAll(`.${className}-chart-text`);
  const chartNumbers = document.querySelectorAll(`.${className}-chart-text .temperature-number`);
  const positionsY = [];
  // set values for vertex vertical positions
  for (let i = 0; i <= hours; i += 1) {
    const currentValue = parseFloat(values[i]);
    positionsY.push(currentValue);
  }
  const minValue = positionsY.reduce((min, current) => (min < current ? min : current));
  const maxValue = positionsY.reduce((max, current) => (max > current ? max : current));
  // turn values to pixels
  const positionsToPixels = positionsY.map((value) => {
    const percent = rangePercent(minValue, maxValue, value);
    return rangePercentToPixels(percent, chartsHeight);
  });
  // use values on draw
  let drawChart = '';
  positionsX.forEach((pos, i) => {
    const lineCommand = i === 0 ? 'M' : 'L';
    const posX = pos;
    const posY = positionsToPixels[i];
    drawChart += ` ${lineCommand} ${posX} ${posY + (textSpace / 2)}`;
  });

  chart.setAttribute('d', drawChart);

  // position the numbers on each vertex
  chartTexts.forEach((text, i) => {
    text.setAttribute('x', positionsX[i]);
    text.setAttribute('y', positionsToPixels[i] + (textSpace / 4));
  });
  hideBetween(chartTexts);
  chartNumbers.forEach((number, i) => {
    valueAdjust(number, number.textContent, values[i], 10);
    number.dataset.celsius = values[i];
    number.dataset.fahrenheit = celsiusToFahrenheit(values[i]);
  });

  // position circle vertices
  chartVertices.forEach((vertex, i) => {
    vertex.setAttribute('cx', `${positionsX[i]}`);
    vertex.setAttribute('cy', `${positionsToPixels[i] + (textSpace / 2)}`);
  });
  hideBetween(chartVertices);
}

// add listener to window resize to adjust graph
let windowResizeTimeout;

window.addEventListener('resize', () => {
  clearTimeout(windowResizeTimeout);
  windowResizeTimeout = setTimeout(() => {
    updateHourlyWeather();
  }, 100);
});
