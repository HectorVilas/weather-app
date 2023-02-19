import { domSearch } from "./dom/search";
import { searchCity } from "./functions/searchCity";

export function loadUi(){
  const body = document.querySelector("body");
  let keydownTimeout;
  const timeoutDelay = 500;

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
    }, timeoutDelay);
  });
};

