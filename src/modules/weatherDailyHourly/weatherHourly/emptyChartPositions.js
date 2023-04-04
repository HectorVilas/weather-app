export function emptyChart(domElement, positionsX, height) {
  let drawTemp = '';
  positionsX.forEach((pos, i) => {
    const lineCommand = i === 0 ? 'M' : 'L';
    const posX = pos;
    drawTemp += ` ${lineCommand} ${posX} ${height}`;
  });
  domElement.setAttribute('d', drawTemp);
}

export function emptyChartVertices(domElements, positionsX, height) {
  domElements.forEach((vertex, i) => {
    vertex.setAttribute('cx', `${positionsX[i]}`);
    vertex.setAttribute('cy', `${height}`);
  });
}
