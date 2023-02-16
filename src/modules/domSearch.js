export function domSearch(){
  const search = document.createElement("section");
  const form = document.createElement("form");
  const input = document.createElement("input");
  const button = document.createElement("button");
  const cityList = document.createElement("div");
  
  search.classList.add("location-search");
  form.classList.add("search-form");
  cityList.classList.add("search-results");
  input.classList.add("search-input");
  input.type = "search";
  button.type = "submit";
  button.innerText = "🔎";
  cityList.innerText = "Write a location name.";
  
  form.append(input, button);
  search.append(form, cityList);

  return search;
}
