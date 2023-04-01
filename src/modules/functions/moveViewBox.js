export default function moveViewBox(domParent, svg, startFromHour = 0, startFromDay = 0) {
  const width = parseInt(domParent.clientWidth, 10);
  const height = parseInt(domParent.clientHeight, 10);
  const viewboxStart = ((width / 24) * startFromHour) + (width * startFromDay);
  svg.setAttribute('viewBox', `${viewboxStart} ${0} ${width} ${height}`);
}
