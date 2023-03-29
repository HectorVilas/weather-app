export default function weatherHourly() {
  const div = document.createElement('div');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
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
    degreesNumber.classList.add('temperature-number-svg');
    degreesNumber.textContent = '0';
    degreesSymbol.textContent = '°';
    degrees.append(degreesNumber, degreesSymbol);
    tempChartNumbers.push(degrees);
  }

  div.classList.add('weather-hourly');
  svg.classList.add('hourly-chart');
  tempGroup.classList.add('hourly-chart-group');
  tempChart.classList.add('hourly-chart-temperature');
  svg.setAttribute('width', '100%');
  svg.setAttribute('height', '100%');
  tempChart.setAttribute('fill', 'transparent');
  tempChart.setAttribute('stroke', 'red');
  tempChart.setAttribute('stroke-width', '5');
  tempChart.setAttribute('stroke-linecap', 'round');
  tempChart.setAttribute('stroke-linejoin', 'round');

  tempGroup.append(tempChart, ...tempChartNumbers);
  svg.append(tempGroup);
  div.append(svg);
  return div;
}
