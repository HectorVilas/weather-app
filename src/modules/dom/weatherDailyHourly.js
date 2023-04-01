import dailyCard from './dailyCard';
import weatherHourly from './weatherHourly';
import moveViewBox from '../functions/moveViewBox';

export default function weatherDailyHourly() {
  const section = document.createElement('section');
  const dailyDiv = document.createElement('div');
  // const hourlyDiv = document.createElement('div');

  section.classList.add('weather-daily-hourly');
  dailyDiv.classList.add('weather-daily', 'invisible');

  for (let i = 0; i < 7; i += 1) {
    dailyDiv.append(dailyCard());
  }

  section.append(
    weatherHourly(),
    dailyDiv,
  );
  // adding listeners to hourly cards
  const hourlyCards = section.querySelectorAll('.daily-card');
  hourlyCards.forEach((card, i) => {
    card.addEventListener('click', () => {
      const parent = document.querySelector('.weather-hourly');
      const svg = document.querySelector('.hourly-chart');
      moveViewBox(parent, svg, 0, i);
    });
  });
  return section;
}
