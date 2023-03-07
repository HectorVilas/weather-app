export default function dailyCard() {
  const card = document.createElement('div');
  card.classList.add('daily-card');

  card.append(
    weatherDiv(),
  );

  return card;
}

function weatherDiv() {
  const div = document.createElement('div');
  const day = document.createElement('p');
  const weatherIcon = document.createElement('div');
  const temp = document.createElement('p');
  const tempUnit = document.createElement('input');
  const tempApparent = document.createElement('p');
  const tempApparentUnit = document.createElement('input');
  const weatherDescription = document.createElement('p');

  div.classList.add('daily-weather');
  day.classList.add('daily-day');
  weatherIcon.classList.add('weather-current-icon', 'daily-weather-icon');
  temp.classList.add('daily-temp', 'temperature-number');
  tempUnit.classList.add('daily-temp-unit', 'gauge-unit', 'temperature-unit');
  tempUnit.type = 'checkbox';
  tempApparent.classList.add('daily-temp-apparent', 'temperature-number');
  tempApparentUnit.classList.add('daily-temp-apparent-unit', 'gauge-unit', 'temperature-unit');
  tempApparentUnit.type = 'checkbox';
  weatherDescription.classList.add('daily-weather-description');

  day.innerText = 'day placeholder';
  weatherIcon.style.background = 'blue';
  temp.innerText = '20';
  tempApparent.innerText = '18';
  weatherDescription.innerText = 'weather placeholder';

  div.append(
    day,
    weatherIcon,
    temp,
    tempUnit,
    tempApparent,
    tempApparentUnit,
    weatherDescription,
  );

  return div;
}
