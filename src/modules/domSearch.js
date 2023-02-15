import { domCitiesList } from "./domCitiesList";

export function domSearch(){
  const search = document.createElement("section");
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const cityList = document.createElement("div");
  
  search.classList.add("location-search");
  cityList.classList.add("search-results");
  input.type = "search";
  button.type = "submit";
  button.innerText = "🔎";
  cityList.innerText = "Write a location name.";
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const search = input.value;
    
    cityList.replaceChildren();
    cityList.append(await domCitiesList(search));
  });

  form.append(input, button);
  search.append(form, cityList);

  return search;
}
