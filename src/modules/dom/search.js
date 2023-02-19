export function search(){
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
  
  loadingAnimDiv.append(loadingAnim1, loadingAnim2, loadingAnim3)
  form.append(input, loadingAnimDiv);
  search.append(form, cityList);

  return search;
}
