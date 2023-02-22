import search from './dom/search';
import weatherCurrent from './dom/weatherCurrent';

export default function loadUi() {
  const body = document.querySelector('body');
  body.append(
    search(),
    weatherCurrent(),
  );
}
