import { getNext25 } from './graphFunctions';
import positionLinesAndHours from './positionLinesAndHours';
import { emptyChart, emptyChartVertices } from './emptyChartPositions';
import updateChartLine from './updateChartLine';
import updateChartIcons from './updateChartIcons';
import updateChartHoverDataset from './updateChartHoverDataset';

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
  const chartTemp = document.querySelector('.hourly-chart-temp');
  const chartTempVertices = document.querySelectorAll('.temp-chart-vertex');
  const hoursUsed = 24;
  // vertical space reserved on pixels for hours and temp values
  const textSpace = 45;
  const width = parseInt(parent.clientWidth, 10);
  const height = parseInt(parent.clientHeight, 10);
  const heightTempsWind = ((height * 80) / 100) - textSpace;
  const heightsHumidity = height - textSpace;
  const positionsX = [0];
  // get the necessary data for chart
  const hours = getNext25(data.hours, startFromIndex);
  const temps = getNext25(data.temps, startFromIndex);
  const apparents = getNext25(data.apparent, startFromIndex);
  const minTempsApparents = temps.concat(apparents)
    .reduce((min, current) => (min < current ? min : current));
  const maxTempsApparents = temps.concat(apparents)
    .reduce((max, current) => (max > current ? max : current));
  const windSpeeds = getNext25(data.windspeed, startFromIndex);
  const humidity = getNext25(data.humidity, startFromIndex);
  const weathercodes = getNext25(data.weathercode, startFromIndex);
  const { sunrise } = data;
  const { sunset } = data;

  parent.classList.remove('invisible');
  // set values for vertex horizontal positions
  for (let i = 0; i < hoursUsed; i += 1) {
    const currentValue = (width / (hoursUsed)) * (i + 1);
    positionsX.push(currentValue);
  }
  // if there's no temp chart drawn, an empty one (values at 0) will be placed
  if (!chartTemp.getAttribute('d')) {
    emptyChart(chartTemp, positionsX, heightTempsWind);
    emptyChartVertices(chartTempVertices, positionsX, heightTempsWind);
  }
  // small timeout to allow animation between the empty chart and the updated one
  setTimeout(() => {
    positionLinesAndHours(hours, positionsX, textSpace, width, height);
    updateChartLine(temps, positionsX, heightTempsWind, hoursUsed, textSpace, width, 'temp', '.temperature-number', minTempsApparents, maxTempsApparents);
    updateChartLine(apparents, positionsX, heightTempsWind, hoursUsed, textSpace, width, 'temp-apparent', '.temperature-number', minTempsApparents, maxTempsApparents);
    updateChartLine(windSpeeds, positionsX, heightTempsWind, hoursUsed, textSpace, width, 'wind', '.speed-number', 0);
    updateChartLine(humidity, positionsX, heightsHumidity, hoursUsed, textSpace, width, 'humidity', '.humidity-percent', 0, 100);
    updateChartIcons(weathercodes, sunrise, sunset, hours, width);
    updateChartHoverDataset(temps, apparents, windSpeeds, humidity, weathercodes);
  }, 50);
}
