import domCitiesList from '../dom/citiesList';
import { fetchWeather } from '../fetch';

let previousSearch;

export default async function searchCity(search) {
  const searchInput = document.querySelector('.search-input');
  const cityList = document.querySelector('.search-results');
  const loadingIcon = document.querySelector('.search-loading');

  if (search === previousSearch) {
    searchInput.classList.remove('loading');
    loadingIcon.classList.add('hidden');
    return;
  }

  previousSearch = search;
  const list = await domCitiesList(search);
  searchInput.classList.remove('loading');
  loadingIcon.classList.add('hidden');
  cityList.replaceChildren();
  cityList.append(list);

  const domList = document.querySelectorAll('.search-result');
  domList.forEach((city) => {
    city.addEventListener('click', async () => {
      cityList.replaceChildren();
      const { latitude } = city.dataset;
      const { longitude } = city.dataset;
      const weather = await fetchWeather(latitude, longitude);
      // eslint-disable-next-line no-console
      console.log(
        `\ntemperature: ${weather.current_weather.temperature}`,
        `\nwindspeed: ${weather.current_weather.windspeed}`,
        `\nwinddirection: ${weather.current_weather.winddirection}`,
        `\nweathercode: ${weather.current_weather.weathercode}`,
      );
    });
  });
}
