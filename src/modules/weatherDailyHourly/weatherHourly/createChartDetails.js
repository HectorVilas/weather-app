export default function createChartDetails() {
  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('chart-details-div', 'hidden');

  const elements = [
    {
      class: 'temp',
      hasSymbol: true,
      text: 'Temperature: ',
      value: '0',
      unit: '°C',
    },
    {
      class: 'apparent',
      hasSymbol: true,
      text: 'Feels like: ',
      value: '0',
      unit: '°C',
    },
    {
      class: 'wind',
      hasSymbol: true,
      text: 'Wind speed: ',
      value: '0',
      unit: 'km/h',
    },
    {
      class: 'humidity',
      hasSymbol: true,
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

    if (elements[i]?.hasSymbol) {
      const symbol = document.createElement('div');
      symbol.classList.add('chart-details-symbol', `chart-details-symbol-${elements[i].class}`);
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
