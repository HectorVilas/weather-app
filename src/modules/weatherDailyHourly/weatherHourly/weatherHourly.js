import createChartLineGroup from './createChartLineGroup';
import createWeatherIcons from './createWeatherIcons';
import createChartDetails from './createChartDetails';

import vectorSquare from '../../../media/images/icons-chart/square.svg';
import vectorCircle from '../../../media/images/icons-chart/circle.svg';
import vectorDiamond from '../../../media/images/icons-chart/diamond.svg';
// import vectorStar from '../../../media/images/icons-chart/star.svg';
import vectorArrow from '../../../media/images/icons-chart/arrow.svg';

const svgNs = 'http://www.w3.org/2000/svg';

export default function weatherHourly() {
  const div = document.createElement('div');
  const svg = document.createElementNS(svgNs, 'svg');
  div.classList.add('weather-hourly', 'invisible');
  svg.classList.add('hourly-chart');
  svg.append(
    createChartMarksAndHours(),
    createChartLineGroup('humidity', vectorDiamond),
    createChartLineGroup('temp-apparent', vectorSquare),
    createChartLineGroup('temp', vectorCircle, '°', 'temperature-number'),
    createChartLineGroup('wind', vectorArrow),
  );
  div.append(
    svg,
    createWeatherIcons(),
    createChartDetails(),
  );
  return div;
}

function createChartMarksAndHours() {
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
