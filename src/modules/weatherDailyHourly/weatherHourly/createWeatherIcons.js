import { showHourlyDetail, hideHourlyDetail } from './hourlyDetailHover';

export default function createWeatherIcons() {
  const div = document.createElement('div');
  const imagesAndHover = [];
  for (let i = 0; i < 23; i += 1) {
    const img = document.createElement('div');
    img.classList.add('chart-weather-icon');
    imagesAndHover.push(img);
    img.dataset.pointed = i + 1;
    img.addEventListener('mouseenter', showHourlyDetail);
    img.addEventListener('mouseleave', hideHourlyDetail);
  }

  div.classList.add('chart-weather-icons-div');

  div.append(...imagesAndHover);

  return div;
}
