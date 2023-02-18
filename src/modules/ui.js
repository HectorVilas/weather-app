import { domSearch } from "./domSearch";
import { domCitiesList } from "./domCitiesList";

let previousSearch;
export function loadUi(){
  const body = document.querySelector("body");
  let keydownTimeout;

  body.append(domSearch());

  const form = document.querySelector(".search-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  const searchInput = document.querySelector(".search-input");
  searchInput.addEventListener("keypress", () => {
    const searchInput = document.querySelector(".search-input");
    const loadingIcon = document.querySelector(".search-loading");
    searchInput.classList.add("loading");
    loadingIcon.classList.remove("hidden");

    clearTimeout(keydownTimeout);
    keydownTimeout = setTimeout(() => {
      searchCity(searchInput.value);
    }, 750);
  });
};

async function searchCity(search){
  const searchInput = document.querySelector(".search-input");
  const cityList = document.querySelector(".search-results");
  const loadingIcon = document.querySelector(".search-loading");
  
  if(search == previousSearch) {
    searchInput.classList.remove("loading");
    loadingIcon.classList.add("hidden");
    return;
  };
  
  previousSearch = search;
  const list = await domCitiesList(search);
  searchInput.classList.remove("loading");
  loadingIcon.classList.add("hidden");
  cityList.replaceChildren();
  cityList.append(list);

  const domList = document.querySelectorAll(".search-result");
  domList.forEach(city => {
    city.addEventListener("click", () => {
      console.log(city.dataset.latitude, city.dataset.longitude);
    });
  });
};