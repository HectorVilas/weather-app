export default function weatherHourly() {
  const div = document.createElement('div');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  div.classList.add('weather-hourly');
  svg.classList.add('hourly-chart');
  svg.append(
    createTempGroup(),
  );
  div.append(svg);
  return div;
}

function createTempGroup() {
  const tempGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const tempChart = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const tempChartNumbers = [];

  for (let i = 0; i < 24; i += 1) {
    const degrees = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    const degreesNumber = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    const degreesSymbol = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    degrees.setAttribute('x', 0);
    degrees.setAttribute('y', 0);
    degrees.classList.add('temp-chart-text');
    degreesNumber.classList.add('temp-chart', 'temperature-number');
    degreesNumber.textContent = '0';
    degreesSymbol.textContent = '°';
    degrees.append(degreesNumber, degreesSymbol);
    tempChartNumbers.push(degrees);
  }

  tempGroup.classList.add('hourly-chart-group');
  tempChart.classList.add('hourly-chart-temperature');

  tempGroup.append(tempChart, ...tempChartNumbers);

  return tempGroup;
}
