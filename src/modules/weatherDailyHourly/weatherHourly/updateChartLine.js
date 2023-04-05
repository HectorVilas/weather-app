import { rangePercent, rangePercentToPixels, hideBetween } from './graphFunctions';
import valueAdjust from '../../valueAdjust';
import { celsiusToFahrenheit, kilometersToMiles } from '../../unitConverter';

export default function updateChartLine(
  values,
  positionsX,
  chartsHeight,
  hours,
  textSpace,
  className,
  unitType,
) {
  // repeat previos value for missing 8th day data at 0hs
  if (values.at(-1) === undefined) values[values.length - 1] = values.at(-2);
  const chart = document.querySelector(`.hourly-chart-${className}`);
  const chartVertices = document.querySelectorAll(`.${className}-chart-vertex`);
  const chartTexts = document.querySelectorAll(`.${className}-chart-text`);
  const chartNumbers = document.querySelectorAll(`.${className}-chart-text ${unitType}`);
  const positionsY = [];
  // set values for vertex vertical positions
  for (let i = 0; i <= hours; i += 1) {
    const currentValue = parseFloat(values[i]);
    positionsY.push(currentValue);
  }
  const minValue = positionsY.reduce((min, current) => (min < current ? min : current));
  const maxValue = positionsY.reduce((max, current) => (max > current ? max : current));
  // turn values to pixels
  const positionsToPixels = positionsY.map((value) => {
    const percent = rangePercent(minValue, maxValue, value);
    return rangePercentToPixels(percent, chartsHeight);
  });
  // use values on draw
  let drawChart = '';
  positionsX.forEach((pos, i) => {
    const lineCommand = i === 0 ? 'M' : 'L';
    const posX = pos;
    const posY = positionsToPixels[i];
    drawChart += ` ${lineCommand} ${posX} ${posY + (textSpace / 2)}`;
  });

  chart.setAttribute('d', drawChart);

  if (className === 'temp') {
  // position the numbers on each vertex
    chartTexts.forEach((text, i) => {
      text.setAttribute('x', positionsX[i]);
      text.setAttribute('y', positionsToPixels[i] + (textSpace / 4));
    });
    hideBetween(chartTexts);
    chartNumbers.forEach((number, i) => {
      valueAdjust(number, number.textContent, values[i], 10);
      if (unitType === '.temperature-number') {
        number.dataset.celsius = values[i];
        number.dataset.fahrenheit = celsiusToFahrenheit(values[i]);
      } else if (unitType === '.speed-number') {
        number.dataset.kilometers = values[i];
        number.dataset.miles = kilometersToMiles(values[i]);
      }
    });
  }

  // position circle vertices
  chartVertices.forEach((vertex, i) => {
    vertex.setAttribute('cx', `${positionsX[i]}`);
    vertex.setAttribute('cy', `${positionsToPixels[i] + (textSpace / 2)}`);
  });
  hideBetween(chartVertices);
}
