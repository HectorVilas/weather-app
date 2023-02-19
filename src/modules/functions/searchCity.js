import { domCitiesList } from "../dom/citiesList";

let previousSearch;

export async function searchCity(search){
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