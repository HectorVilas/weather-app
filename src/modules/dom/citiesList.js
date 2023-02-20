import { countryCodeEmoji } from 'country-code-emoji';
import { getName } from 'country-list';
import { fetchGeocoding } from '../fetch';

export default async function domCitiesList(search) {
  const list = document.createElement('div');
  const cities = await fetchGeocoding(search);

  if (cities.length === 0) {
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
    flag.innerText = countryCodeEmoji(city.country);
    place.innerText = `${city.name}, ${city.state ? `${city.state}, ` : ''} ${getName(city.country)}`;

    searchResult.append(flag, place);
    list.append(searchResult);
  });

  return list;
}
