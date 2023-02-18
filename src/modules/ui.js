import { domSearch } from "./domSearch";
import { domCitiesList } from "./domCitiesList";

export function loadUi(){
  const body = document.querySelector("body");
  let keydownTimeout;

  body.append(domSearch());

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
  console.log("fetching");
  const searchInput = document.querySelector(".search-input");
  const cityList = document.querySelector(".search-results");
  const loadingIcon = document.querySelector(".search-loading");
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