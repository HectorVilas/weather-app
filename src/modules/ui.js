import { search } from "./dom/search";

export function loadUi(){
  const body = document.querySelector("body");
  body.append(search());
};
