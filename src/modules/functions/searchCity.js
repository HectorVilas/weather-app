import domCitiesList from '../dom/citiesList';
import { fetchWeather } from '../fetch';
import updateCurrentWeather from './updateCurrentWeather';
import getWeathercode from './weathercode';

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
      // disable and autocomplete input while fetching data
      searchInput.setAttribute('disabled', true);
      searchInput.value = city.dataset.location;
      searchInput.classList.add('loading');
      loadingIcon.classList.remove('hidden');

      cityList.replaceChildren();
      const { latitude } = city.dataset;
      const { longitude } = city.dataset;
      const weather = await fetchWeather(latitude, longitude);
      const currentHour = new Date().getHours();
      const currentWeatherData = {
        city: city.dataset.location,
        weathercode: getWeathercode(weather.current_weather.weathercode),
        temp: weather.current_weather.temperature,
        tempApparent: weather.hourly.apparent_temperature[currentHour],
        humidity: weather.hourly.relativehumidity_2m[currentHour],
        windSpeed: weather.current_weather.windspeed,
        windDirection: weather.current_weather.winddirection,
        sunrise: weather.daily.sunrise,
        sunset: weather.daily.sunset,
        localHour: weather.current_weather.time,
      };
      hideSearch();
      updateCurrentWeather(currentWeatherData);
    });
  });
}

function hideSearch() {
  const search = document.querySelector('.city-search');
  search.classList.add('hidden');
  // clear results after hiding
  domCitiesList('');
}
