export const apiKey = (() => {
  // openweathermap.org
  function openWeatherMap(){
    const scrambled = "64865b2ad14523a6cedd21bd516bf7b2";
    const apiKey = decipher(scrambled);
    
    return apiKey;
  }

  function decipher(string){
    let stringToArray = string.split("");
    let unscrambled;
  
    stringToArray.forEach(char => {
      unscrambled = unscrambled ? char + unscrambled : char;
    });
    
    return unscrambled;
  }
  
  return { openWeatherMap }
})();

