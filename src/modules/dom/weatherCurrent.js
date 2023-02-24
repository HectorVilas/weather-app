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
  section.classList.add('weather-current', 'invisible');
  icon.classList.add('weather-current-icon');

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
  const apparentParaDiv = document.createElement('div');
  const apparentTempPara = document.createElement('p');
  const apparentTemp = document.createElement('p');
  const apparentUnit = document.createElement('input');

  tempDiv.classList.add('temp-div');
  tempCurrent.classList.add('temp-current');
  tempUnit.classList.add('gauge-unit', 'temperature-unit');
  tempUnit.type = 'checkbox';
  apparentUnit.type = 'checkbox';
  apparentParaDiv.classList.add('temp-apparent-div');
  apparentTemp.classList.add('temp-apparent');
  apparentUnit.classList.add('gauge-unit', 'temperature-unit', 'gauge-unit-apparent');

  tempCurrent.innerText = '000';
  apparentTempPara.innerText = 'Feels like: ';
  apparentTemp.innerText = '000';

  apparentParaDiv.append(apparentTempPara, apparentTemp, apparentUnit);
  tempDiv.append(tempCurrent, tempUnit, apparentParaDiv);

  // humidity div
  const humidityDiv = document.createElement('div');
  const humidityTitle = document.createElement('p');
  const humidityGauge = document.createElement('div');
  const humidityGaugePercent = document.createElement('div');
  const humidity = document.createElement('p');

  humidityDiv.classList.add('humidity-div');
  humidityTitle.classList.add('humidity-title');
  humidityGauge.classList.add('humidity-gauge');
  humidityGaugePercent.classList.add('humidity-gauge-percent');
  humidity.classList.add('humidity');

  humidityTitle.innerText = 'Humidity %';
  humidity.innerText = '000';

  humidityGauge.append(humidity, humidityGaugePercent);
  humidityDiv.append(humidityGauge, humidityTitle);

  // wind div
  const windDiv = document.createElement('div');
  const windTitleDiv = document.createElement('div');
  const windTitle = document.createElement('p');
  const windGauge = document.createElement('div');
  const windCompass = document.createElement('div');
  const windSpeed = document.createElement('p');
  const windSpeedUnit = document.createElement('input');
  const windSpeedDirection = document.createElement('div');

  windDiv.classList.add('wind-div');
  windTitleDiv.classList.add('wind-title-div');
  windTitle.classList.add('wind-title');
  windGauge.classList.add('wind-gauge');
  windCompass.classList.add('wind-compass');
  windSpeed.classList.add('wind-speed');
  windSpeedUnit.classList.add('gauge-unit', 'wind-speed-unit');
  windSpeedUnit.type = 'checkbox';
  windSpeedDirection.classList.add('wind-direction');

  windTitle.innerText = 'Max wind';
  windSpeed.innerText = '00';

  windTitleDiv.append(windTitle, windSpeedUnit);
  windGauge.append(windSpeed, windCompass, windSpeedDirection);
  windDiv.append(windGauge, windTitleDiv);

  // append everything
  section.append(cityDiv, icon, weathercodeDiv, tempDiv, humidityDiv, windDiv);

  return section;
}
