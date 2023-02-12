import "./style.css";
import { apiKey } from "./modules/apiKeys";
import { fetchWeather } from "./modules/fetch";

fetchWeather(apiKey.openWeatherMap(), "london")
.then(weather => console.log(weather));
