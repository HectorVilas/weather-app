import { setHours } from 'date-fns';
import weatherIcon from '../../weatherIcon';
import getWeathercode from '../../weathercode';

export default function updateChartIcons(next25Weathercodes, next25Hours, width) {
  const iconsDiv = document.querySelector('.chart-weather-icons-div');
  const icons = document.querySelectorAll('.chart-weather-icon');
  let previousWeathercode;

  iconsDiv.style.width = `${width}px`;

  icons.forEach((icon, i) => {
    const iconWidth = width / 23;
    const currentWeathercode = next25Weathercodes[i + 1];
    const iconParts = getWeathercode(currentWeathercode).icon;
    if (i === 0) icon.style.marginLeft = `${iconWidth / 2}px`;
    if (i === icons.length - 1) icon.style.marginRight = `${iconWidth / 2}px`;

    // use icon only if it's different from the previous one
    if (currentWeathercode !== previousWeathercode) {
      icon.style.backgroundImage = weatherIcon(
        iconParts,
        new Date(next25Hours[i + 1]),
        setHours(new Date(next25Hours[i + 1]), 6),
        setHours(new Date(next25Hours[i + 1]), 18),
      );
    } else {
      icon.style.backgroundImage = 'none';
    }

    previousWeathercode = currentWeathercode;
  });
}
