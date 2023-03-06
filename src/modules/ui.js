import search from './dom/search';
import weatherCurrent from './dom/weatherCurrent';
import weatherDaily from './dom/weatherDaily';

export default function loadUi() {
  const body = document.querySelector('body');
  body.append(
    search(),
    weatherCurrent(),
    weatherDaily(),
  );
}
