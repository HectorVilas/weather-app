import createChartLineGroup from './createChartLineGroup';

const svgNs = 'http://www.w3.org/2000/svg';

export default function weatherHourly() {
  const div = document.createElement('div');
  const svg = document.createElementNS(svgNs, 'svg');
  div.classList.add('weather-hourly', 'invisible');
  svg.classList.add('hourly-chart');
  svg.append(
    createChartMarksAndHours(),
    createChartLineGroup('wind'),
    createChartLineGroup('humidity'),
    createChartLineGroup('temp-apparent'),
    createChartLineGroup('temp', '°', 'temperature-number'),
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

function createWeatherIcons() {
  const div = document.createElement('div');
  const imagesAndHover = [];
  for (let i = 0; i < 23; i += 1) {
    const img = document.createElement('div');
    img.classList.add('chart-weather-icon');
    imagesAndHover.push(img);
  }

  div.classList.add('chart-weather-icons-div');

  div.append(...imagesAndHover);

  return div;
}

function createChartDetails() {
  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('chart-details-div');

  const elements = [
    {
      class: 'temp',
      symbolColor: 'red',
      text: 'Temperature: ',
      value: '0',
      unit: '°C',
    },
    {
      class: 'apparent',
      symbolColor: 'pink',
      text: 'Feels like: ',
      value: '0',
      unit: '°C',
    },
    {
      class: 'wind',
      symbolColor: 'blue',
      text: 'Wind speed: ',
      value: '0',
      unit: 'km/h',
    },
    {
      class: 'humidity',
      symbolColor: 'cyan',
      text: 'Humidity: ',
      value: '0',
      unit: '%',
    },
    {
      class: 'weathercode',
      text: 'Weather: ',
      value: 'clear',
    },
  ];

  for (let i = 0; i < elements.length; i += 1) {
    const div = document.createElement('div');
    div.classList.add(`chart-details-${elements[i].class}`);

    if (elements[i]?.symbolColor) {
      const symbol = document.createElement('div');
      symbol.classList.add(`chart-details-symbol-${elements[i].class}`);
      symbol.style.backgroundColor = elements[i].symbolColor;
      symbol.style.width = '15px';
      symbol.style.height = '15px';
      div.append(symbol);
    }

    const itemPara = document.createElement('p');
    itemPara.classList.add(`chart-details-para-${elements[i].class}`);

    const itemText = document.createElement('span');
    itemText.classList.add(`chart-details-text-${elements[i].class}`);
    itemText.innerText = elements[i].text;
    itemPara.append(itemText);

    const value = document.createElement('span');
    value.classList.add(`chart-details-value-${elements[i].class}`);
    value.innerText = elements[i].value;
    itemPara.append(value);

    if (elements[i]?.unit) {
      const unit = document.createElement('span');
      unit.classList.add(`chart-details-unit-${elements[i].class}`);
      unit.innerText = elements[i].unit;
      itemPara.append(unit);
    }

    div.append(itemPara);
    detailsDiv.append(div);
  }

  return detailsDiv;
}
