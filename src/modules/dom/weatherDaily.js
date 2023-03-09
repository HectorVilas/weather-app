import dailyCard from './dailyCard';

export default function weatherDaily() {
  const section = document.createElement('section');

  section.classList.add('weather-daily');

  for (let i = 0; i < 7; i += 1) {
    section.append(dailyCard());
  }

  return section;
}
