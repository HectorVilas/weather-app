export default function getWeathercode(requestedCode) {
  // source: https://open-meteo.com/en/docs
  const codes = [
    {
      code: 0,
      weather: 'clear sky',
      icon: ['sun-moon'],
    },
    {
      code: 1,
      weather: 'mainly clear',
      icon: ['sun-moon', 'clouds-low'],
    },
    {
      code: 2,
      weather: 'partly cloudy',
      icon: ['sun-moon', 'clouds-middle'],
    },
    {
      code: 3,
      weather: 'overcast',
      icon: ['clouds-high'],
    },
    {
      code: 45,
      weather: 'fog',
      icon: ['sun-moon', 'clouds-high', 'fog'],
    },
    {
      code: 48,
      weather: 'depositing rime fog',
      icon: ['clouds-high', 'fog', 'ice-small'],
    },
    {
      code: 51,
      weather: 'drizzle',
      intensity: 'light',
      icon: ['clouds-high', 'rain-drizzle-low'],
    },
    {
      code: 53,
      weather: 'drizzle',
      intensity: 'moderate',
      icon: ['clouds-high', 'rain-drizzle-middle'],
    },
    {
      code: 55,
      weather: 'drizzle',
      intensity: 'dense',
      icon: ['clouds-high', 'rain-drizzle-high'],
    },
    {
      code: 56,
      weather: 'freezing drizzle',
      intensity: 'light',
      icon: ['clouds-high', 'rain-drizzle-high'],
    },
    {
      code: 57,
      weather: 'freezing drizzle',
      intensity: 'dense',
      icon: ['clouds-high', 'rain-drizzle-high', 'ice-middle'],
    },
    {
      code: 61,
      weather: 'rain',
      intensity: 'slight',
      icon: ['clouds-high', 'rain-low'],
    },
    {
      code: 63,
      weather: 'rain',
      intensity: 'moderate',
      icon: ['clouds-high', 'rain-middle'],
    },
    {
      code: 65,
      weather: 'rain',
      intensity: 'heavy',
      icon: ['clouds-high', 'rain-high'],
    },
    {
      code: 66,
      weather: 'freezing rain',
      intensity: 'light',
      icon: ['clouds-high', 'rain-low', 'ice-middle'],
    },
    {
      code: 67,
      weather: 'freezing rain',
      intensity: 'heavy',
      icon: ['clouds-high', 'rain-high', 'ice-middle'],
    },
    {
      code: 71,
      weather: 'snow fall',
      intensity: 'slight',
      icon: ['clouds-high', 'snow-low'],
    },
    {
      code: 73,
      weather: 'snow fall',
      intensity: 'moderate',
      icon: ['clouds-high', 'snow-middle'],
    },
    {
      code: 75,
      weather: 'snow fall',
      intensity: 'heavy',
      icon: ['clouds-high', 'snow-high'],
    },
    {
      code: 77,
      weather: 'snow grains',
      icon: ['clouds-high', 'ice-low'],
    },
    {
      code: 80,
      weather: 'rain showers',
      intensity: 'slight',
      icon: ['clouds-high', 'rain-big-low'],
    },
    {
      code: 81,
      weather: 'rain showers',
      intensity: 'moderate',
      icon: ['clouds-high', 'rain-big-middle'],
    },
    {
      code: 82,
      weather: 'rain showers',
      intensity: 'violent',
      icon: ['clouds-high', 'rain-big-high'],
    },
    {
      code: 85,
      weather: 'snow showers',
      intensity: 'slight',
      icon: ['clouds-high', 'snow-big-low'],
    },
    {
      code: 86,
      weather: 'snow showers',
      intensity: 'heavy',
      icon: ['clouds-high', 'snow-big-high'],
    },
    {
      code: 95,
      weather: 'thunderstorm',
      intensity: 'slight or moderate',
      icon: ['clouds-high', 'rain-high', 'thunder'],
    },
    {
      code: 96,
      weather: 'thunderstorm',
      intensity: 'slight hail',
      icon: ['clouds-high', 'hail-low'],
    },
    {
      code: 99,
      weather: 'thunderstorm',
      intensity: 'heavy hail',
      icon: ['clouds-high', 'hail-high'],
    },
  ];

  const requested = codes.findIndex((item) => item.code === requestedCode);

  return codes[requested];
}