const svgNs = 'http://www.w3.org/2000/svg';

export default function weatherHourly() {
  const div = document.createElement('div');
  const svg = document.createElementNS(svgNs, 'svg');
  div.classList.add('weather-hourly', 'invisible');
  svg.classList.add('hourly-chart');
  svg.append(
    createChartLines(),
    createTempGroup(),
  );
  div.append(svg);
  return div;
}

function createChartLines() {
  const chartLinesGroup = document.createElementNS(svgNs, 'g');
  const horizontalLine = document.createElementNS(svgNs, 'line');
  const hoursTexts = [];

  for (let i = 0; i <= 24; i += 1) {
    const verticalLine = document.createElementNS(svgNs, 'line');
    verticalLine.classList.add('chart-line-hour');
    chartLinesGroup.append(verticalLine);
  }
  for (let i = 0; i <= 24; i += 1) {
    const hours = document.createElementNS(svgNs, 'text');
    const hoursNumber = document.createElementNS(svgNs, 'tspan');
    const hoursText = document.createElementNS(svgNs, 'tspan');
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
  const tempGroup = document.createElementNS(svgNs, 'g');
  const tempChart = document.createElementNS(svgNs, 'path');
  const tempChartNumbers = [];
  const tempChartVertices = [];

  for (let i = 0; i <= 24; i += 1) {
    const degrees = document.createElementNS(svgNs, 'text');
    const degreesNumber = document.createElementNS(svgNs, 'tspan');
    const degreesSymbol = document.createElementNS(svgNs, 'tspan');
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
    const vertex = document.createElementNS(svgNs, 'circle');
    vertex.classList.add('temp-chart-vertex');
    vertex.setAttribute('r', 4);
    vertex.setAttribute('cx', 500);
    vertex.setAttribute('cy', 500);
    tempChartVertices.push(vertex);
  }

  tempGroup.classList.add('hourly-chart-group');
  tempChart.classList.add('hourly-chart-temp');

  tempGroup.append(tempChart, ...tempChartNumbers, ...tempChartVertices);

  return tempGroup;
}
