export default function getWeathercode(requestedCode) {
  /*
  * source: https://open-meteo.com/en/docs
  * WMO Weather interpretation codes (WW)
  * Code - Description
  * 0 ---------- Clear sky
  * 1, 2, 3 ---- Mainly clear, partly cloudy, and overcast
  * 45, 48 ----- Fog and depositing rime fog
  * 51, 53, 55 - Drizzle: Light, moderate, and dense intensity
  * 56, 57 ----- Freezing Drizzle: Light and dense intensity
  * 61, 63, 65 - Rain: Slight, moderate and heavy intensity
  * 66, 67 ----- Freezing Rain: Light and heavy intensity
  * 71, 73, 75 - Snow fall: Slight, moderate, and heavy intensity
  * 77 --------- Snow grains
  * 80, 81, 82 - Rain showers: Slight, moderate, and violent
  * 85, 86 ----- Snow showers slight and heavy
  * 95 * ------- Thunderstorm: Slight or moderate
  * 96, 99 * --- Thunderstorm with slight and heavy hail
  * (*) Thunderstorm forecast with hail is only available in Central Europe
  */

  const codes = [
    {
      code: 0,
      weather: 'clear sky',
      icon: ['sunMoon'],
    },
    {
      code: 1,
      weather: 'mainly clear',
      icon: ['sunMoon', 'cloudsLow'],
    },
    {
      code: 2,
      weather: 'partly cloudy',
      icon: ['sunMoon', 'cloudsMiddle'],
    },
    {
      code: 3,
      weather: 'overcast',
      icon: ['cloudsHigh'],
    },
    {
      code: 45,
      weather: 'fog',
      icon: ['sunMoon', 'cloudsHigh', 'fog'],
    },
    {
      code: 48,
      weather: 'depositing rime fog',
      icon: ['cloudsHigh', 'fog', 'iceSmall'],
    },
    {
      code: 51,
      weather: 'drizzle',
      intensity: 'light',
      icon: ['cloudsHigh', 'rainDrizzleLow'],
    },
    {
      code: 53,
      weather: 'drizzle',
      intensity: 'moderate',
      icon: ['cloudsHigh', 'rainDrizzleMiddle'],
    },
    {
      code: 55,
      weather: 'drizzle',
      intensity: 'dense',
      icon: ['cloudsHigh', 'rainDrizzleHigh'],
    },
    {
      code: 56,
      weather: 'freezing drizzle',
      intensity: 'light',
      icon: ['cloudsHigh', 'rainDrizzleHigh'],
    },
    {
      code: 57,
      weather: 'freezing drizzle',
      intensity: 'dense',
      icon: ['cloudsHigh', 'rainDrizzleHigh', 'iceMiddle'],
    },
    {
      code: 61,
      weather: 'rain',
      intensity: 'slight',
      icon: ['cloudsHigh', 'rainLow'],
    },
    {
      code: 63,
      weather: 'rain',
      intensity: 'moderate',
      icon: ['cloudsHigh', 'rainMiddle'],
    },
    {
      code: 65,
      weather: 'rain',
      intensity: 'heavy',
      icon: ['cloudsHigh', 'rainHigh'],
    },
    {
      code: 66,
      weather: 'freezing rain',
      intensity: 'light',
      icon: ['cloudsHigh', 'rainLow', 'iceMiddle'],
    },
    {
      code: 67,
      weather: 'freezing rain',
      intensity: 'heavy',
      icon: ['cloudsHigh', 'rainHigh', 'iceMiddle'],
    },
    {
      code: 71,
      weather: 'snow fall',
      intensity: 'slight',
      icon: ['cloudsHigh', 'snowLow'],
    },
    {
      code: 73,
      weather: 'snow fall',
      intensity: 'moderate',
      icon: ['cloudsHigh', 'snowMiddle'],
    },
    {
      code: 75,
      weather: 'snow fall',
      intensity: 'heavy',
      icon: ['cloudsHigh', 'snowHigh'],
    },
    {
      code: 77,
      weather: 'snow grains',
      icon: ['cloudsHigh', 'iceLow'],
    },
    {
      code: 80,
      weather: 'rain showers',
      intensity: 'slight',
      icon: ['cloudsHigh', 'rainBigLow'],
    },
    {
      code: 81,
      weather: 'rain showers',
      intensity: 'moderate',
      icon: ['cloudsHigh', 'rainBigMiddle'],
    },
    {
      code: 82,
      weather: 'rain showers',
      intensity: 'violent',
      icon: ['cloudsHigh', 'rainBigHigh'],
    },
    {
      code: 85,
      weather: 'snow showers',
      intensity: 'slight',
      icon: ['cloudsHigh', 'snowBigLow'],
    },
    {
      code: 86,
      weather: 'snow showers',
      intensity: 'heavy',
      icon: ['cloudsHigh', 'snowBigHigh'],
    },
    {
      code: 95,
      weather: 'thunderstorm',
      intensity: 'slight or moderate',
      icon: ['cloudsHigh', 'rainHigh', 'thunder'],
    },
    {
      code: 96,
      weather: 'thunderstorm',
      intensity: 'slight hail',
      icon: ['cloudsHigh', 'hailLow'],
    },
    {
      code: 99,
      weather: 'thunderstorm',
      intensity: 'heavy hail',
      icon: ['cloudsHigh', 'hailHigh'],
    },
  ];

  const requested = codes.findIndex((item) => item.code === requestedCode);

  return codes[requested];
}
