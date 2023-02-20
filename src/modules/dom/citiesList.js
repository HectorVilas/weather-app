import { countryCodeEmoji } from 'country-code-emoji';
import { fetchGeocoding } from '../fetch';

export default async function domCitiesList(search) {
  const list = document.createElement('div');
  const response = await fetchGeocoding(search);
  const cities = response.results;

  if (!cities) {
    const empty = document.createElement('div');
    return empty;
  }

  cities.forEach((city) => {
    const searchResult = document.createElement('div');
    const flag = document.createElement('p');
    const place = document.createElement('p');

    searchResult.classList.add('search-result');
    searchResult.dataset.latitude = city.lat;
    searchResult.dataset.longitude = city.lon;
    flag.classList.add('country-flag');
    flag.innerText = countryCodeEmoji(city.country_code);
    place.innerText = `${city.name}, ${city.admin3 ? `${city.admin3}, ` : ''}${city.admin2 ? `${city.admin2}, ` : ''}${city.admin1 ? `${city.admin1}, ` : ''} ${city.country}`;

    searchResult.append(flag, place);
    list.append(searchResult);
  });

  return list;
}
