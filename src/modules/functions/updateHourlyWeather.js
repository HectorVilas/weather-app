export default function updateHourlyWeather(data) {
  const parent = document.querySelector('.weather-hourly');
  const tempChart = document.querySelector('.hourly-chart-temperature');
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
  // use values on draw
  let drawTemp = '';
  positionsX.forEach((pos, i) => {
    drawTemp += `${i === 0 ? 'M' : 'L'} ${pos + marginX / 2} ${i % 2 ? 50 : 10}`;
  });

  tempChart.setAttribute('d', drawTemp);
}
