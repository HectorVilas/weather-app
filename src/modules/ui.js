import search from './search/search';
import weatherCurrent from './weatherCurrent/weatherCurrent';
import weatherDailyHourly from './weatherDailyHourly/weatherDailyHourly';

export default function loadUi() {
  const body = document.querySelector('body');
  body.append(
    search(),
    weatherCurrent(),
    weatherDailyHourly(),
  );
}
