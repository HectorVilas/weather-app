export default function updateHourlyWeather(data) {
  const parent = document.querySelector('.weather-hourly');
  const hours = 24;
  const marginX = 20;
  // vertical space reserved on pixels for hours and temp values
  const textSpace = 30;
  const width = parseInt(parent.clientWidth, 10) - marginX;
  const height = parseInt(parent.clientHeight, 10);
  const chartsHeightTemps = ((height * 70) / 100) - textSpace;
  // const chartsHeightWindHumidity = height - textSpace;
  const positionsX = [0];
  // set values for vector horizontal positions
  for (let i = 0; i < hours - 1; i += 1) {
    const currentValue = parseFloat(parseFloat(((width) / (hours - 1)) * (i + 1)).toFixed(1));
    positionsX.push(currentValue);
  }

  updateTemperature(data.temps, marginX, positionsX, chartsHeightTemps, hours);
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

function updateTemperature(temps, marginX, positionsX, chartsHeightTemps, hours) {
  const tempChart = document.querySelector('.hourly-chart-temperature');
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
    // TODO: invert the chart using chartsHeightTemps
    const lineCommand = i === 0 ? 'M' : 'L';
    const posX = pos + marginX / 2;
    const posY = positionsToPixels[i];
    drawTemp += ` ${lineCommand} ${posX} ${posY}`;
  });

  tempChart.setAttribute('d', drawTemp);
}
