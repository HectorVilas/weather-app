import { celsiusToFahrenheit } from './unitConverter';
import valueAdjust from './valueAdjust';

export default function updateHourlyWeather(data) {
  const parent = document.querySelector('.weather-hourly');
  const hours = 24;
  const marginX = 20;
  // vertical space reserved on pixels for hours and temp values
  const textSpace = 30;
  const width = parseInt(parent.clientWidth, 10) - marginX;
  const height = parseInt(parent.clientHeight, 10);
  const chartsHeightTemps = ((height * 80) / 100) - textSpace;
  // const chartsHeightWindHumidity = height - textSpace;
  const positionsX = [0];
  // set values for vector horizontal positions
  for (let i = 0; i < hours - 1; i += 1) {
    const currentValue = parseFloat(parseFloat(((width) / (hours - 1)) * (i + 1)).toFixed(1));
    positionsX.push(currentValue);
  }

  // update current temperature line chart
  const chartTemp = document.querySelector('.hourly-chart-temperature');
  // detect empty draw on first load, place draw with values at 0
  if (!chartTemp.getAttribute('d')) {
    emptyChart(chartTemp, marginX, positionsX, chartsHeightTemps);
  }
  // small timeout to allow animation between the empty chart and the updated one
  setTimeout(() => {
    updateTemperature(data.temps, marginX, positionsX, chartsHeightTemps, hours, textSpace);
  }, 50);
}

function rangePercent(min, max, target) {
  const percentRange = ((target - min) / (max - min)) * 100;
  return parseFloat(parseFloat(percentRange).toFixed(1));
}
function rangePercentToPixels(percent, height) {
  const toPixels = ((percent * height) / 100);
  // as the Y axis ascend going down, the graphic will be inverted
  // using the bottom of it's height as base for min temp
  return (toPixels * -1) + height;
}

function updateTemperature(temps, marginX, positionsX, chartsHeightTemps, hours, textSpace) {
  const tempChart = document.querySelector('.hourly-chart-temperature');
  const tempChartTexts = document.querySelectorAll('.temp-chart-text');
  const tempChartNumbers = document.querySelectorAll('.temp-chart-text .temperature-number');
  const positionsY = [];
  // set values for vector vertical positions
  for (let i = 0; i < hours; i += 1) {
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
    const posX = pos + marginX / 2;
    const posY = positionsToPixels[i];
    drawTemp += ` ${lineCommand} ${posX} ${posY + (textSpace / 2)}`;
  });

  tempChart.setAttribute('d', drawTemp);

  // position the numbers on each vector
  tempChartTexts.forEach((text, i) => {
    text.setAttribute('x', positionsX[i]);
    text.setAttribute('y', positionsToPixels[i] + (textSpace / 2));
    if ((i + 2) % 3 !== 0) {
      text.classList.add('hidden');
    }
  });
  tempChartNumbers.forEach((number, i) => {
    valueAdjust(number, number.textContent, temps[i]);
    number.dataset.celsius = temps[i];
    number.dataset.fahrenheit = celsiusToFahrenheit(temps[i]);
  });
}

function emptyChart(domElement, marginX, positionsX, height) {
  let drawTemp = '';
  positionsX.forEach((pos, i) => {
    const lineCommand = i === 0 ? 'M' : 'L';
    const posX = pos + marginX / 2;
    drawTemp += ` ${lineCommand} ${posX} ${height}`;
  });
  domElement.setAttribute('d', drawTemp);
}
