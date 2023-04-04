import {
  setMinutes,
  getMinutes,
  isBefore,
  isAfter,
} from 'date-fns';
import cloudsHigh from '../media/images/weather-icon-parts/clouds-high.png';
import cloudsLow from '../media/images/weather-icon-parts/clouds-low.png';
import cloudsMiddle from '../media/images/weather-icon-parts/clouds-middle.png';
import drizzleHigh from '../media/images/weather-icon-parts/drizzle-high.png';
import drizzleLow from '../media/images/weather-icon-parts/drizzle-low.png';
import drizzleMiddle from '../media/images/weather-icon-parts/drizzle-middle.png';
import fog from '../media/images/weather-icon-parts/fog.png';
import hailHigh from '../media/images/weather-icon-parts/hail-high.png';
import hailLow from '../media/images/weather-icon-parts/hail-low.png';
import iceLow from '../media/images/weather-icon-parts/ice-low.png';
import iceMiddle from '../media/images/weather-icon-parts/ice-middle.png';
import iceSmall from '../media/images/weather-icon-parts/ice-small.png';
import moon from '../media/images/weather-icon-parts/moon.png';
import moonClearSky from '../media/images/weather-icon-parts/moon-clear-sky.png';
import rainBigHigh from '../media/images/weather-icon-parts/rain-big-high.png';
import rainBigLow from '../media/images/weather-icon-parts/rain-big-low.png';
import rainBigMiddle from '../media/images/weather-icon-parts/rain-big-middle.png';
import rainHigh from '../media/images/weather-icon-parts/rain-high.png';
import rainLow from '../media/images/weather-icon-parts/rain-low.png';
import rainMiddle from '../media/images/weather-icon-parts/rain-middle.png';
import snowBigHigh from '../media/images/weather-icon-parts/snow-big-high.png';
import snowBigLow from '../media/images/weather-icon-parts/snow-big-low.png';
import snowHigh from '../media/images/weather-icon-parts/snow-high.png';
import snowLow from '../media/images/weather-icon-parts/snow-low.png';
import snowMiddle from '../media/images/weather-icon-parts/snow-middle.png';
import sun from '../media/images/weather-icon-parts/sun.png';
import sunClearSky from '../media/images/weather-icon-parts/sun-clear-sky.png';
import thunder from '../media/images/weather-icon-parts/thunder.png';

export default function weatherIcon(iconParts, localTime, sunrise, sunset) {
  // each image will be added here CSS format before returning it
  let images = '';
  // apply local minutes to city time as the API always returns 00
  let sunMoon;
  if (localTime !== undefined) {
    const cityTime = setMinutes(new Date(localTime), getMinutes(new Date()));
    const isDay = isBefore(new Date(sunrise), new Date(cityTime))
    && isAfter(new Date(sunset), new Date(cityTime));
    const isClearDay = iconParts.length === 1 && iconParts[0] === 'sunMoon';

    if (isDay) {
      sunMoon = isClearDay ? sunClearSky : sun;
    } else {
      sunMoon = isClearDay ? moonClearSky : moon;
    }
  } else {
    sunMoon = sun;
  }

  // list images so they can be called directly from a string
  const icons = {
    sunMoon,
    cloudsHigh,
    cloudsLow,
    cloudsMiddle,
    drizzleHigh,
    drizzleLow,
    drizzleMiddle,
    fog,
    hailHigh,
    hailLow,
    iceLow,
    iceMiddle,
    iceSmall,
    rainBigHigh,
    rainBigLow,
    rainBigMiddle,
    rainHigh,
    rainLow,
    rainMiddle,
    snowBigHigh,
    snowBigLow,
    snowHigh,
    snowLow,
    snowMiddle,
    thunder,
  };

  iconParts.forEach((part, i) => {
    const comma = `${i !== 0 ? ', ' : ''}`;
    images += `${comma}url(${icons[part]})`;
  });

  return images;
}
