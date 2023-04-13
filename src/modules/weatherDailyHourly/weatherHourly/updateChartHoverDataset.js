export default function updateChartHoverDataset(
  temps,
  apparents,
  windSpeeds,
  windDirectons,
  humidity,
  weathercodes,
) {
  const chartHover = document.querySelectorAll('.chart-weather-icon');
  // removing unnecesary first and last elements
  [temps, apparents, windSpeeds, humidity, weathercodes]
    .forEach((data) => {
      data.shift();
      data.pop();
    });
  chartHover.forEach((item, i) => {
    // as the first div starts from the 2nd mark, the first element is discarded
    item.dataset.temp = temps[i];
    item.dataset.apparent = apparents[i];
    item.dataset.wind = windSpeeds[i];
    item.dataset.windDirection = windDirectons[i];
    item.dataset.humidity = humidity[i];
    item.dataset.weathercode = weathercodes[i];
  });
}
