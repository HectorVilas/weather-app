import dailyCard from './dailyCard';

export default function weatherDailyHourly() {
  const section = document.createElement('section');
  const dailyDiv = document.createElement('div');
  const hourlyDiv = document.createElement('div');

  section.classList.add('weather-daily-hourly');
  dailyDiv.classList.add('weather-daily', 'invisible');

  for (let i = 0; i < 7; i += 1) {
    dailyDiv.append(dailyCard());
  }

  section.append(
    dailyDiv,
    hourlyDiv,
  );

  return section;
}
