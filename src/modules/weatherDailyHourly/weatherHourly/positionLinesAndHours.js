import { hideBetween } from './graphFunctions';

export default function positionLinesAndHours(hours, positionsX, textSpace, width, height) {
  // repeat first value for first hour on missing 8th day
  if (hours.at(-1) === undefined) {
    const firstHour = hours[0];
    hours[hours.length - 1] = firstHour;
  }
  const startsPastZero = new Date(hours[0]).getHours() !== 0;
  const hourLines = document.querySelectorAll('.chart-line-hour');
  const baseLine = document.querySelector('.chart-line-base');
  const hoursTexts = document.querySelectorAll('.hours-chart-text');
  const hoursNumbers = document.querySelectorAll('.hours-chart-numbers');
  // position lines
  baseLine.setAttribute('x1', `${0}`);
  baseLine.setAttribute('y1', `${height - (textSpace / 2)}`);
  baseLine.setAttribute('x2', `${width}`);
  baseLine.setAttribute('y2', `${height - (textSpace / 2)}`);

  hourLines.forEach((line, i) => {
    const positionX = positionsX[i];
    const localHour = new Date(hours[i]).getHours();
    const isZeroHour = startsPastZero && localHour % 24 === 0;
    let lineLength = 4;
    if ((i + 2) % 3 === 0) lineLength = 10;
    if (isZeroHour) lineLength = 30;
    line.setAttribute('x1', `${positionX}`);
    line.setAttribute('y1', `${height - (textSpace / 2) + (isZeroHour ? 10 : 0)}`);
    line.setAttribute('x2', `${positionX}`);
    line.setAttribute('y2', `${height - (textSpace / 2) - lineLength}`);
  });
  // position hour text
  hoursTexts.forEach((text, i) => {
    const textMargin = 1;
    text.setAttribute('x', `${positionsX[i]}`);
    text.setAttribute('y', `${height - textMargin}`);
  });
  hideBetween(hoursTexts, width);
  // add hour numbers
  hoursNumbers.forEach((hour, i) => {
    const thisHour = new Date(hours[i]).getHours();
    hour.textContent = thisHour;
  });
}
