import "./style.css";
import { apiKey } from "./modules/apiKeys";
import { fetchWeather, fetchGeocoding } from "./modules/fetch";

function getWeather(latitude, longitude){
  fetchWeather(latitude, longitude)
  .then(weather => {
    const hours = weather.hourly.time.length;
  
    for(let i = 0; i < hours; i++){
      console.log(
        "\ntime: " + weather.hourly.time[i],
        "\ntemperature_2m: " + weather.hourly.temperature_2m[i],
        "\nrelativehumidity_2m: " + weather.hourly.relativehumidity_2m[i],
        // "\napparent_temperature: " + weather.hourly.apparent_temperature[i],
        "\nprecipitation: " + weather.hourly.precipitation[i],
        // "\nweathercode: " + weather.hourly.weathercode[i],
        // "\ncloudcover: " + weather.hourly.cloudcover[i],
        // "\nvisibility: " + weather.hourly.visibility[i],
        // "\nwindspeed_10m: " + weather.hourly.windspeed_10m[i],
        // "\nwinddirection_10m: " + weather.hourly.winddirection_10m[i],
      );
    };
    console.log("End of report.");  
  });
}

const body = document.querySelector("body");
const form = document.createElement("form");
const search = document.createElement("input");
const btn = document.createElement("button");
const output = document.createElement("output");
search.type = "search";
search.placeholder = "Write a location here";
btn.innerText = ">>";
output.style.color = "white";
output.style.fontSize = "1.5rem";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if(search.value == "") {
    output.innerText = "Please write a location name."
    return;
  };
  fetchGeocoding(apiKey.openWeatherMap(), 10, search.value)
  .then(locations => {
    output.replaceChildren();
    if(locations.length == 0){
      output.innerText = "Location not found.";
      return;
    };
    
    locations.forEach(location => {
      const div = document.createElement("div");
      const place = document.createElement("p");
      const coordinates = document.createElement("p");
      place.innerText = `${location.name}, ${location.state ? location.state + ", " : ""} ${location.country}`;
      coordinates.innerText = `Coordinates: ${location.lat} - ${location.lon}`
      
      div.addEventListener("click", () => {
        getWeather(location.lat, location.lon)
      })

      div.append(place, coordinates);
      output.append(div);
    })
  });
})

form.append(search, btn);
body.append(form, output);