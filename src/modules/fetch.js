export async function fetchWeather(apiKey, city){
  try {
    const apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`);
    const responseJson = await apiResponse.json();
    
    return responseJson;
  } catch(err) {
    console.warn("Something went wrong: \n" + err)
  }
}

export async function fetchGeocoding(apiKey, locationsLimit, location){
  try {
    const apiResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${locationsLimit}&appid=${apiKey}`);
    const responseJson = await apiResponse.json();
  
    return responseJson;
  } catch(err) {
    console.warn("Something went wrong: \n" + err);
  }
}