export default function dailyCard() {
  const card = document.createElement('div');
  card.classList.add('daily-card');

  card.append(
    weatherDiv(),
    precipitations(),
  );

  return card;
}

function weatherDiv() {
  const div = document.createElement('div');
  const day = document.createElement('p');
  const weatherIcon = document.createElement('div');
  const tempDiv = document.createElement('div');
  const temp = document.createElement('p');
  const tempUnit = document.createElement('input');
  const tempApparentDiv = document.createElement('div');
  const tempApparent = document.createElement('p');
  const tempApparentUnit = document.createElement('input');
  const weatherDescription = document.createElement('p');

  div.classList.add('daily-weather');
  day.classList.add('daily-day');
  weatherIcon.classList.add('weather-current-icon', 'daily-weather-icon');
  tempDiv.classList.add('daily-temp-div');
  temp.classList.add('daily-temp', 'temperature-number');
  tempUnit.classList.add('daily-temp-unit', 'gauge-unit', 'temperature-unit');
  tempUnit.type = 'checkbox';
  tempApparentDiv.classList.add('daily-temp-apparent-div');
  tempApparent.classList.add('daily-temp-apparent', 'temperature-number');
  tempApparentUnit.classList.add('daily-temp-apparent-unit', 'gauge-unit', 'temperature-unit');
  tempApparentUnit.type = 'checkbox';
  weatherDescription.classList.add('daily-weather-description');

  day.innerText = 'day placeholder';
  weatherIcon.style.background = 'blue';
  temp.innerText = '000.0';
  tempApparent.innerText = '000.0';
  weatherDescription.innerText = 'weather description';

  tempDiv.append(temp, tempUnit);
  tempApparentDiv.append(tempApparent, tempApparentUnit);
  div.append(
    day,
    weatherIcon,
    tempDiv,
    tempApparentDiv,
    weatherDescription,
  );

  return div;
}

function precipitations() {
  const div = document.createElement('div');
  const icon = document.createElement('div');
  const quantity = document.createElement('p');
  const hours = document.createElement('p');

  div.classList.add('daily-precipitations');
  icon.classList.add('daily-precipitations-icon');
  quantity.classList.add('daily-precipitation-quantity');
  hours.classList.add('daily-precipitations-hours');

  quantity.innerText = '000mm';
  hours.innerText = '0:00hs';

  div.append(icon, quantity, hours);

  return div;
}
