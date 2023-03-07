import dailyCard from './dailyCard';

export default function weatherDaily() {
  const section = document.createElement('section');

  section.classList.add('weather-daily');

  section.append(dailyCard());

  return section;
}
