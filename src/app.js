import "./style.css";
import { apiKey } from "./modules/apiKeys";
import { fetchWeather, fetchGeocoding } from "./modules/fetch";

fetchWeather("-34.61", "-58.38")
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
  }
});
