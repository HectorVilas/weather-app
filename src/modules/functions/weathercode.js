export default function getWeathercode(requestedCode) {
  // source: https://open-meteo.com/en/docs
  const codes = [
    {
      code: 0,
      weather: 'clear sky',
    },
    {
      code: 1,
      weather: 'mainly clear',
    },
    {
      code: 2,
      weather: 'partly cloudy',
    },
    {
      code: 3,
      weather: 'overcast',
    },
    {
      code: 45,
      weather: 'fog',
    },
    {
      code: 48,
      weather: 'depositing rime fog',
    },
    {
      code: 51,
      weather: 'drizzle',
      intensity: 'light',
    },
    {
      code: 53,
      weather: 'drizzle',
      intensity: 'moderate',
    },
    {
      code: 55,
      weather: 'drizzle',
      intensity: 'dense',
    },
    {
      code: 56,
      weather: 'freezing drizzle',
      intensity: 'light',
    },
    {
      code: 57,
      weather: 'freezing drizzle',
      intensity: 'dense',
    },
    {
      code: 61,
      weather: 'rain',
      intensity: 'slight',
    },
    {
      code: 63,
      weather: 'rain',
      intensity: 'moderate',
    },
    {
      code: 65,
      weather: 'rain',
      intensity: 'heavy',
    },
    {
      code: 66,
      weather: 'freezing rain',
      intensity: 'light',
    },
    {
      code: 67,
      weather: 'freezing rain',
      intensity: 'heavy',
    },
    {
      code: 71,
      weather: 'snow fall',
      intensity: 'slight',
    },
    {
      code: 73,
      weather: 'snow fall',
      intensity: 'moderate',
    },
    {
      code: 75,
      weather: 'snow fall',
      intensity: 'heavy',
    },
    {
      code: 77,
      weather: 'snow grains',
    },
    {
      code: 80,
      weather: 'rain showers',
      intensity: 'slight',
    },
    {
      code: 81,
      weather: 'rain showers',
      intensity: 'moderate',
    },
    {
      code: 82,
      weather: 'rain showers',
      intensity: 'violent',
    },
    {
      code: 85,
      weather: 'snow showers',
      intensity: 'slight',
    },
    {
      code: 86,
      weather: 'snow showers',
      intensity: 'heavy',
    },
    {
      code: 95,
      weather: 'thunderstorm',
      intensity: 'slight or moderate',
    },
    {
      code: 96,
      weather: 'thunderstorm',
      intensity: 'slight hail',
    },
    {
      code: 99,
      weather: 'thunderstorm',
      intensity: 'heavy hail',
    },
  ];

  const requested = codes.findIndex((item) => item.code === requestedCode);

  return codes[requested];
}
