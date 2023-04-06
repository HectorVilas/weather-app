import { setHours } from 'date-fns';
import weatherIcon from '../../weatherIcon';
import getWeathercode from '../../weathercode';

export default function updateChartIcons(next25Weathercodes, next25Hours, width) {
  const iconsDiv = document.querySelector('.chart-weather-icons-div');
  const icons = document.querySelectorAll('.chart-weather-icon');

  iconsDiv.style.width = `${width}px`;

  icons.forEach((icon, i) => {
    const iconWidth = width / 23;
    const iconParts = getWeathercode(next25Weathercodes[i + 1]).icon;
    if (i === 0) icon.style.marginLeft = `${iconWidth / 2}px`;
    if (i === icons.length - 1) icon.style.marginRight = `${iconWidth / 2}px`;
    icon.style.backgroundImage = weatherIcon(
      iconParts,
      new Date(next25Hours[i + 1]),
      setHours(new Date(next25Hours[i + 1]), 6),
      setHours(new Date(next25Hours[i + 1]), 18),
    );
  });
}
