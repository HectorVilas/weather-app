import { getNext25 } from './graphFunctions';
import positionLinesAndHours from './positionLinesAndHours';
import { emptyChart, emptyChartVertices } from './emptyChartPositions';
import updateChartLine from './updateChartLine';
import updateChartIcons from './updateChartIcons';

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
  const chartsHeightWindHumidity = height - textSpace;
  const positionsX = [0];
  // get the necessary data for chart
  const next25Hours = getNext25(data.hours, startFromIndex);
  const chartTemp = document.querySelector('.hourly-chart-temp');
  const chartTempVertices = document.querySelectorAll('.temp-chart-vertex');
  const next25Temps = getNext25(data.temps, startFromIndex);
  const next25apparents = getNext25(data.apparent, startFromIndex);
  const next25WindSpeeds = getNext25(data.windspeed, startFromIndex);
  const next25Humidity = getNext25(data.humidity, startFromIndex);
  const next25Weathercodes = getNext25(data.weathercode, startFromIndex);
  const { sunrise } = data;
  const { sunset } = data;

  // set values for vertex horizontal positions
  for (let i = 0; i < hours; i += 1) {
    const currentValue = (width / (hours)) * (i + 1);
    positionsX.push(currentValue);
  }
  // if there's no temp chart drawn, an empty one (values at 0) will be placed
  if (!chartTemp.getAttribute('d')) {
    emptyChart(chartTemp, positionsX, chartsHeightTemps);
    emptyChartVertices(chartTempVertices, positionsX, chartsHeightTemps);
  }
  // small timeout to allow animation between the empty chart and the updated one
  setTimeout(() => {
    positionLinesAndHours(next25Hours, positionsX, textSpace, width, height);
    updateChartLine(next25Temps, positionsX, chartsHeightTemps, hours, textSpace, width, 'temp', '.temperature-number');
    updateChartLine(next25apparents, positionsX, chartsHeightTemps, hours, textSpace, width, 'temp-apparent', '.temperature-number');
    updateChartLine(next25WindSpeeds, positionsX, chartsHeightWindHumidity, hours, textSpace, width, 'wind', '.speed-number');
    updateChartLine(next25Humidity, positionsX, chartsHeightWindHumidity, hours, textSpace, width, 'humidity', '.humidity-percent');
    updateChartIcons(next25Weathercodes, sunrise, sunset, next25Hours, width);
  }, 50);
}
