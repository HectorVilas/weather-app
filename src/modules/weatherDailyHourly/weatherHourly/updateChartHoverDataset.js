export default function updateChartHoverDataset(
  hours,
  temps,
  apparents,
  windSpeeds,
  humidity,
  weathercodes,
) {
  const chartHover = document.querySelectorAll('.chart-weather-icon');
  // removing unnecesary first and last elements
  [hours, temps, apparents, windSpeeds, humidity, weathercodes]
    .forEach((data) => {
      data.shift();
      data.pop();
    });
  chartHover.forEach((item, i) => {
    // as the first div starts from the 2nd mark, the first element is discarded
    item.dataset.hour = hours[i];
    item.dataset.temp = temps[i];
    item.dataset.apparent = apparents[i];
    item.dataset.wind = windSpeeds[i];
    item.dataset.hunidity = humidity[i];
    item.dataset.weathercode = weathercodes[i];
  });
}
