import "./style.css";
import { apiKey } from "./modules/apiKeys";
import { fetchWeather, fetchGeocoding } from "./modules/fetch";

fetchWeather("-34.61", "-58.38", "America%2FSao_Paulo")
.then(weather => console.log(weather));

fetchGeocoding(apiKey.openWeatherMap(), 10, "buenos aires")
.then(weather => console.log(weather));
