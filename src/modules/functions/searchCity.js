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
      const hour = new Date().getHours();
      // eslint-disable-next-line no-console
      console.log(
        `\ntime: ${weather.hourly.time[hour]}`,
        `\ntemperature_2m: ${weather.hourly.temperature_2m[hour]}`,
        `\nrelativehumidity_2m: ${weather.hourly.relativehumidity_2m[hour]}`,
        `\napparent_temperature: ${weather.hourly.apparent_temperature[hour]}`,
        `\nprecipitation: ${weather.hourly.precipitation[hour]}`,
        `\nweathercode: ${weather.hourly.weathercode[hour]}`,
        `\ncloudcover: ${weather.hourly.cloudcover[hour]}`,
        `\nvisibility: ${weather.hourly.visibility[hour]}`,
        `\nwindspeed_10m: ${weather.hourly.windspeed_10m[hour]}`,
        `\nwinddirection_10m: ${weather.hourly.winddirection_10m[hour]}`,
      );
    });
  });
}
