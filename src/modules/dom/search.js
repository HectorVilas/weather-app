import { searchCity } from "../functions/searchCity";

export function search(){
  let keydownTimeout;
  const timeoutDelay = 500;

  const search = document.createElement("section");
  const form = document.createElement("form");
  const input = document.createElement("input");
  const cityList = document.createElement("div");
  const loadingAnimDiv = document.createElement("div");
  const loadingAnim1 = document.createElement("div");
  const loadingAnim2 = document.createElement("div");
  const loadingAnim3 = document.createElement("div");
  
  search.classList.add("city-search");
  form.classList.add("search-form");
  cityList.classList.add("search-results");
  loadingAnimDiv.classList.add("search-loading", "hidden");
  input.classList.add("search-input");
  input.type = "search";
  input.placeholder = "Write a location name";

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  input.addEventListener("keypress", () => {
    input.classList.add("loading");
    loadingAnimDiv.classList.remove("hidden");
    clearTimeout(keydownTimeout);
    keydownTimeout = setTimeout(() => {
      searchCity(input.value);
    }, timeoutDelay);
  });

  loadingAnimDiv.append(loadingAnim1, loadingAnim2, loadingAnim3);
  form.append(input, loadingAnimDiv);
  search.append(form, cityList);

  return search;
};
