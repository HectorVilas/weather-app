import { fetchGeocoding } from "./fetch";
import { countryCodeEmoji } from "country-code-emoji";
import { getName } from "country-list";

export async function domCitiesList(search){
  const list = document.createElement("div");
  const locations = await fetchGeocoding(search);
  console.log(locations);
  locations.forEach(location => {
    const searchResult = document.createElement("div");
    const flag = document.createElement("p");
    const place = document.createElement("p");

    searchResult.classList.add("search-result");
    flag.classList.add("country-flag");
    flag.innerText = countryCodeEmoji(location.country);
    place.innerText = `${location.name}, ${location.state ? location.state + ", " : ""} ${getName(location.country)}`;

    searchResult.append(flag, place);
    list.append(searchResult);
  });
  
  return list;
}