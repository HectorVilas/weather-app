export default function updateCurrentWeather(data) {
  const element = document.querySelector('.weather-current ');
  const city = document.querySelector('.city-para');
  const icon = document.querySelector('.weather-current-icon');
  const weathercode = document.querySelector('.weathercode-para');
  const temp = document.querySelector('.temp-current');
  const tempApparent = document.querySelector('.temp-apparent');
  const humidity = document.querySelector('.humidity');
  const humidityGaugePercent = document.querySelector('.humidity-gauge-percent');
  const windSpeed = document.querySelector('.wind-speed');
  const windDirection = document.querySelector('.wind-direction');

  element.classList.remove('invisible');
  city.innerText = data.city;
  // image will be defined by other module
  icon.style.backgroundImage = 'url(../media/images/placeholder.png)';
  weathercode.innerText = `${data.weathercode.weather}${data.weathercode.intensity ? `, ${data.weathercode.intensity}` : ''}`;
  temp.innerText = data.temp;
  tempApparent.innerText = data.tempApparent;
  humidity.innerText = data.humidity;
  humidityGaugePercent.style.maskImage = `conic-gradient(red ${data.humidity}%, transparent ${data.humidity}%)`;
  windSpeed.innerText = data.windSpeed;
  windDirection.style.rotate = `${data.windDirection}deg`;
}
