export default function createChartLineGroup(className, unitSymbol, unitType) {
  const svgNs = 'http://www.w3.org/2000/svg';
  const chartGroup = document.createElementNS(svgNs, 'g');
  const chart = document.createElementNS(svgNs, 'path');
  const chartNumbers = [];
  const chartVertices = [];

  if (unitSymbol !== undefined && unitType !== undefined) {
    for (let i = 0; i <= 24; i += 1) {
      const values = document.createElementNS(svgNs, 'text');
      const valuesNumber = document.createElementNS(svgNs, 'tspan');
      const valuesSymbol = document.createElementNS(svgNs, 'tspan');
      const numbersClasses = [`${className}-chart`, unitType];
      values.setAttribute('x', 0);
      values.setAttribute('y', 0);
      values.setAttribute('text-anchor', 'middle');
      values.classList.add(`${className}-chart-text`);
      valuesNumber.classList.add(...numbersClasses);
      valuesNumber.textContent = '0';
      valuesSymbol.textContent = `${unitSymbol}`;
      values.append(valuesNumber, valuesSymbol);
      chartNumbers.push(values);
    }
  }

  for (let i = 0; i <= 24; i += 1) {
    const vertex = document.createElementNS(svgNs, 'circle');
    vertex.classList.add(`${className}-chart-vertex`);
    vertex.setAttribute('r', 4);
    vertex.setAttribute('cx', 500);
    vertex.setAttribute('cy', 500);
    vertex.dataset.hidden = true;
    chartVertices.push(vertex);
  }

  chartGroup.classList.add('hourly-chart-group', `${className}-chart-group`);
  chart.classList.add(`hourly-chart-${className}`);

  chartGroup.append(chart, ...chartNumbers, ...chartVertices);

  return chartGroup;
}
