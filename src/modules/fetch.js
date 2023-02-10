export async function fetchWeather(city){
  const scrambled = "64865b2ad14523a6cedd21bd516bf7b2";
  const apiKey = decipher(scrambled);
  const apiResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`);
  const responseJson = await apiResponse.json();
  
  return responseJson;
}

function decipher(string){
  let stringToArray = string.split("");
  let unscrambled;

  stringToArray.forEach(char => {
    unscrambled = unscrambled ? char + unscrambled : char;
  });
  
  return unscrambled;
}