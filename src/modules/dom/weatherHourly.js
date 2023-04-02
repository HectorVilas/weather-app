export default function weatherHourly() {
  const div = document.createElement('div');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  div.classList.add('weather-hourly');
  svg.classList.add('hourly-chart');
  svg.append(
    createChartLines(),
    createTempGroup(),
  );
  div.append(svg);
  return div;
}

function createChartLines() {
  const chartLinesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const horizontalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  const hoursTexts = [];

  for (let i = 0; i <= 24; i += 1) {
    const verticalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    verticalLine.classList.add('chart-line-hour');
    chartLinesGroup.append(verticalLine);
  }
  for (let i = 0; i <= 24; i += 1) {
    const hours = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    const hoursNumber = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    const hoursText = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    hours.setAttribute('x', 0);
    hours.setAttribute('y', 0);
    hours.setAttribute('text-anchor', 'middle');
    hours.classList.add('hours-chart-text');
    hoursNumber.classList.add('hours-chart-numbers');
    hoursNumber.textContent = '0';
    hoursText.textContent = 'hs';
    hours.append(hoursNumber, hoursText);
    hoursTexts.push(hours);
  }
  chartLinesGroup.classList.add('chart-lines-group');
  horizontalLine.classList.add('chart-line-base');

  chartLinesGroup.append(horizontalLine, ...hoursTexts);

  return chartLinesGroup;
}

function createTempGroup() {
  const tempGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  const tempChart = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  const tempChartNumbers = [];
  const tempChartVertices = [];

  for (let i = 0; i <= 24; i += 1) {
    const degrees = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    const degreesNumber = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    const degreesSymbol = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    degrees.setAttribute('x', 0);
    degrees.setAttribute('y', 0);
    degrees.setAttribute('text-anchor', 'middle');
    degrees.classList.add('temp-chart-text');
    degreesNumber.classList.add('temp-chart', 'temperature-number');
    degreesNumber.textContent = '0';
    degreesSymbol.textContent = '°';
    degrees.append(degreesNumber, degreesSymbol);
    tempChartNumbers.push(degrees);
  }
  for (let i = 0; i <= 24; i += 1) {
    const vertex = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    vertex.classList.add('temp-chart-vertex');
    vertex.setAttribute('r', 4);
    tempChartVertices.push(vertex);
  }

  tempGroup.classList.add('hourly-chart-group');
  tempChart.classList.add('hourly-chart-temperature');

  tempGroup.append(tempChart, ...tempChartNumbers, ...tempChartVertices);

  return tempGroup;
}
