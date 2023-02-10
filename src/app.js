import "./style.css";
import { fetchWeather } from "./modules/fetch";

async function test(){
  const weather = await fetchWeather("london");
  console.log(weather);
}

test();