import search from './search/search';
import weatherCurrent from './weatherCurrent/weatherCurrent';
import weatherDailyHourly from './weatherDailyHourly/weatherDailyHourly';
import updateHourlyWeather from './weatherDailyHourly/weatherHourly/updateHourlyWeather';
import createBackground from './background/background';

export default function loadUi() {
  const body = document.querySelector('body');
  body.append(
    createBackground(),
    search(),
    weatherCurrent(),
    weatherDailyHourly(),
  );
}

// add listener to window resize to adjust graph
let windowResizeTimeout;

window.addEventListener('resize', () => {
  clearTimeout(windowResizeTimeout);
  windowResizeTimeout = setTimeout(() => {
    updateHourlyWeather();
  }, 100);
});
