export default function weatherCurrent() {
  const section = document.createElement('section');
  const icon = document.createElement('div');
  const tempDiv = document.createElement('div');
  const tempCurrent = document.createElement('p');
  const tempUnit = document.createElement('input');
  const apparentTemp = document.createElement('p');
  const windDiv = document.createElement('div');
  const windSpeed = document.createElement('p');
  const windSpeedUnit = document.createElement('input');
  const windSpeedDirection = document.createElement('div');

  section.classList.add('weather-current');
  icon.classList.add('icon');
  tempDiv.classList.add('temp-div');
  tempCurrent.classList.add('temp-current');
  tempUnit.classList.add('temp-unit');
  tempUnit.type = 'checkbox';
  apparentTemp.classList.add('temp-apparent');
  windDiv.classList.add('wind-div');
  windSpeed.classList.add('wind-speed');
  windSpeedUnit.classList.add('speed-unit');
  windSpeedUnit.type = 'checkbox';
  windSpeedDirection.classList.add('wind-direction');

  tempDiv.append(tempCurrent, tempUnit, apparentTemp);
  windDiv.append(windSpeed, windSpeedUnit, windSpeedDirection);
  section.append(icon, tempDiv, windDiv);

  return section;
}
