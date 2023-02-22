export default function weatherCurrent() {
  const section = document.createElement('section');

  // city
  const cityDiv = document.createElement('div');
  const cityPara = document.createElement('p');

  cityDiv.classList.add('city-div');
  cityPara.classList.add('city-para');

  cityPara.innerText = 'City Name, Country Name';

  cityDiv.append(cityPara);

  // icon
  const icon = document.createElement('div');
  section.classList.add('weather-current');
  icon.classList.add('icon');

  // weathercode div
  const weathercodeDiv = document.createElement('div');
  const weathercodePara = document.createElement('p');

  weathercodeDiv.classList.add('weathercode-div');
  weathercodePara.classList.add('weathercode-para');
  weathercodePara.innerText = 'Mainly clear';

  weathercodeDiv.append(weathercodePara);

  // temperatures div
  const tempDiv = document.createElement('div');
  const tempCurrent = document.createElement('p');
  const tempUnit = document.createElement('input');
  const apparentPara = document.createElement('p');
  const apparentTempSpan = document.createElement('span');
  const apparentTemp = document.createElement('span');

  tempDiv.classList.add('temp-div');
  tempCurrent.classList.add('temp-current');
  tempUnit.classList.add('temp-unit');
  tempUnit.type = 'checkbox';
  apparentPara.classList.add('temp-apparent-para');
  apparentTemp.classList.add('temp-apparent');

  tempCurrent.innerText = '000';
  apparentTempSpan.innerText = 'Feels like: ';
  apparentTemp.innerText = '000';

  apparentPara.append(apparentTempSpan, apparentTemp);
  tempDiv.append(tempCurrent, tempUnit, apparentPara);

  // humidity div
  const humidityDiv = document.createElement('div');
  const humidityPara = document.createElement('p');
  const humidityText = document.createElement('span');
  const humidity = document.createElement('span');
  const humidityPercent = document.createElement('span');

  humidityDiv.classList.add('humidity-div');
  humidityPara.classList.add('humidity-para');
  humidity.classList.add('humidity');

  humidityText.innerText = 'Humidity: ';
  humidity.innerText = '000';
  humidityPercent.innerText = '%';

  humidityPara.append(humidityText, humidity, humidityPercent);
  humidityDiv.append(humidityPara);

  // wind div
  const windDiv = document.createElement('div');
  const windSpeed = document.createElement('p');
  const windSpeedUnit = document.createElement('input');
  const windSpeedDirection = document.createElement('div');

  windDiv.classList.add('wind-div');
  windSpeed.classList.add('wind-speed');
  windSpeedUnit.classList.add('speed-unit');
  windSpeedUnit.type = 'checkbox';
  windSpeedDirection.classList.add('wind-direction');

  windDiv.append(windSpeed, windSpeedUnit, windSpeedDirection);
  section.append(cityDiv, icon, weathercodeDiv, tempDiv, humidityDiv, windDiv);

  return section;
}
