export default function getWeathercode(code) {
  // source: https://open-meteo.com/en/docs
  const codes = [
    'Clear sky',
    'Mainly clear, partly cloudy, and overcast',
    'Fog and depositing rime fog',
    'Drizzle: Light, moderate, and dense intensity',
    'Freezing Drizzle: Light and dense intensity',
    'Rain: Slight, moderate and heavy intensity',
    'Freezing Rain: Light and heavy intensity',
    'Snow fall: Slight, moderate, and heavy intensity',
    'Snow grains',
    'Rain showers: Slight, moderate, and violent',
    'Snow showers slight and heavy',
    'Thunderstorm: Slight or moderate',
    'Thunderstorm with slight and heavy hail',
  ];

  const weathercode = {
    0: codes[0],
    1: codes[1],
    2: codes[1],
    3: codes[1],
    45: codes[2],
    48: codes[2],
    51: codes[3],
    53: codes[3],
    55: codes[3],
    56: codes[4],
    57: codes[4],
    61: codes[5],
    63: codes[5],
    65: codes[5],
    66: codes[6],
    67: codes[6],
    71: codes[7],
    73: codes[7],
    75: codes[7],
    77: codes[8],
    80: codes[9],
    81: codes[9],
    82: codes[9],
    85: codes[10],
    86: codes[10],
    95: codes[11],
    96: codes[12],
    99: codes[12],
  };

  return weathercode[code];
}
