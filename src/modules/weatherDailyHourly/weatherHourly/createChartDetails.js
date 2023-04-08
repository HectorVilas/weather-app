export default function createChartDetails() {
  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('chart-details-div', 'hidden');

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
