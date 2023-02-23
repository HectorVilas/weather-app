export default function updateCurrentWeather(data) {
  const city = document.querySelector('.city-para');
  const icon = document.querySelector('.weather-current-icon');
  const weathercode = document.querySelector('.weathercode-para');
  const temp = document.querySelector('.temp-current');
  const tempApparent = document.querySelector('.temp-apparent');
  const humidity = document.querySelector('.humidity');
  const humidityGauge = document.querySelector('.humidity-gauge');
  const windSpeed = document.querySelector('.wind-speed');
  const windDirection = document.querySelector('.wind-direction');

  // eslint-disable-next-line no-console
  console.log(data);
  city.innerText = data.city;
  // image will be defined by other module
  icon.style.backgroundImage = 'url(#)';
  weathercode.innerText = `${data.weathercode.weather}${data.weathercode.intensity ? `, ${data.weathercode.intensity}` : ''}`;
  temp.innerText = data.temp;
  tempApparent.innerText = data.tempApparent;
  humidity.innerText = data.humidity;
  humidityGauge.style.maskImage = `radial-gradient(red 50%, transparent 50%), conic-gradient(red ${data.humidity}%, transparent ${data.humidity}%)`;
  windSpeed.innerText = data.windSpeed;
  windDirection.style.rotate = `${data.windDirection}deg`;
}
