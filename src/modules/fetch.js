import { getApiKey } from "./apiKeys";

export async function fetchWeather(latitude, longitude, timezone = "auto"){
  try {
    /**
    * for Buenos Aires, Argentina:
    * &latitude=-34.61&longitude=-58.38
    * &timezone=America%2FSao_Paulo
    */
    const apiResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation,weathercode,cloudcover,visibility,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_sum,precipitation_hours,windspeed_10m_max,winddirection_10m_dominant&timezone=${timezone}`);
    const responseJson = await apiResponse.json();
    
    return responseJson;
  } catch(err) {
    console.warn("Something went wrong: \n" + err)
  }
}

export async function fetchGeocoding(location){
  if(!location.length) return [];
  
  try {
    const locationsLimit = 10;
    const apiKey = getApiKey.openWeatherMap();
    const apiResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${locationsLimit}&appid=${apiKey}`);
    const responseJson = await apiResponse.json();
  
    return responseJson;
  } catch(err) {
    console.warn("Something went wrong: \n" + err);
  }
}