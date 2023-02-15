import { domSearch } from "./domSearch";

export function loadUi(){
  const body = document.querySelector("body");

  body.append(domSearch());
  
}