export default function rotateChartVertices(vertices, angles) {
  vertices.forEach((vertex, i) => {
    vertex.style.rotate = `${angles[i]}deg`;
  });
}
