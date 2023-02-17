import { domSearch } from "./domSearch";
import { domCitiesList } from "./domCitiesList";

export function loadUi(){
  const body = document.querySelector("body");

  body.append(domSearch());
  
  const searchForm = document.querySelector(".search-form");
  const searchInput = document.querySelector(".search-input");
  const cityList = document.querySelector(".search-results");
  
  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const search = searchInput.value;
    const list = await domCitiesList(search);
    cityList.replaceChildren();
    cityList.append(list);

    const domList = document.querySelectorAll(".search-result");
    domList.forEach(city => {
      city.addEventListener("click", () => {
        console.log(city.dataset.latitude, city.dataset.longitude);
      });
    });
  });
};