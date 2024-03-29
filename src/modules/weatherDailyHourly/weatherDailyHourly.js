import dailyCard from './weatherDaily/dailyCard';
import weatherHourly from './weatherHourly/weatherHourly';
import updateHourlyWeather from './weatherHourly/updateHourlyWeather';

export default function weatherDailyHourly() {
  const section = document.createElement('section');
  const dailyDiv = document.createElement('div');

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
    card.addEventListener('click', (e) => {
      const allCards = document.querySelectorAll('.daily-card');
      allCards.forEach((thisCard) => thisCard.classList.remove('active'));
      const thisCard = e.currentTarget;
      thisCard.classList.add('active');
      const startFromIndex = i * 24;
      updateHourlyWeather(null, startFromIndex);
    });
  });
  return section;
}
