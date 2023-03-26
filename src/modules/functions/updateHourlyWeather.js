export default function updateHourlyWeather(data) {
  const parent = document.querySelector('.weather-hourly');
  const hours = 24;
  const marginX = 20;
  const width = parseInt(parent.clientWidth, 10) - marginX;
  const height = parseInt(parent.clientHeight, 10);
  const positionsX = [0];
  // set values for vector horizontal positions
  for (let i = 0; i < hours - 1; i += 1) {
    const currentValue = parseFloat(parseFloat(((width) / (hours - 1)) * (i + 1)).toFixed(1));
    positionsX.push(currentValue);
  }

  updateTemperature(data.temps, marginX, positionsX, hours);
}

function updateTemperature(temps, marginX, positionsX, hours) {
  const tempChart = document.querySelector('.hourly-chart-temperature');

  const positionsY = [];
  // set values for vector vertical positions
  for (let i = 0; i < hours; i += 1) {
    const currentValue = parseFloat(temps[i]);
    positionsY.push(currentValue);
  }
  // use values on draw
  let drawTemp = '';
  positionsX.forEach((pos, i) => {
    drawTemp += ` ${i === 0 ? 'M' : 'L'} ${pos + marginX / 2} ${positionsY[i]}`;
  });

  tempChart.setAttribute('d', drawTemp);
}
