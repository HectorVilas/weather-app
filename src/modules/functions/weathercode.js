export default function getWeathercode(requestedCode) {
  // source: https://open-meteo.com/en/docs
  const codes = [
    {
      codes: [0],
      quote: 'Clear sky',
    },
    {
      codes: [1, 2, 3],
      quote: 'Mainly clear, partly cloudy, and overcast',
    },
    {
      codes: [45, 48],
      quote: 'Fog and depositing rime fog',
    },
    {
      codes: [51, 53, 55],
      quote: 'Drizzle: Light, moderate, and dense intensity',
    },
    {
      codes: [56, 57],
      quote: 'Freezing Drizzle: Light and dense intensity',
    },
    {
      codes: [61, 63, 65],
      quote: 'Rain: Slight, moderate and heavy intensity',
    },
    {
      codes: [66, 67],
      quote: 'Freezing Rain: Light and heavy intensity',
    },
    {
      codes: [71, 73, 75],
      quote: 'Snow fall: Slight, moderate, and heavy intensity',
    },
    {
      codes: [77],
      quote: 'Snow grains',
    },
    {
      codes: [80, 81, 82],
      quote: 'Rain showers: Slight, moderate, and violent',
    },
    {
      codes: [85, 86],
      quote: 'Snow showers slight and heavy',
    },
    {
      codes: [95],
      quote: 'Thunderstorm: Slight or moderate',
    },
    {
      codes: [96, 99],
      quote: 'Thunderstorm with slight and heavy hail',
    },
  ];

  const requested = codes.findIndex((item) => item.codes.includes(requestedCode));

  return codes[requested];
}
