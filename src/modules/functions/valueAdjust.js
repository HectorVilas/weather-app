export default function valueAdjust(domElement, fromValue, toValue) {
  const timeout = 20;
  let step;
  if (domElement.className.includes('temperature-number')) step = 0.1;
  if (domElement.className.includes('humidity')
  || domElement.className.includes('speed-number')) step = 1;
  const fDomValue = parseFloat(domElement.innerText);
  const fFromValue = parseFloat(fromValue);
  const fToValue = parseFloat(toValue);
  const increment = fFromValue < fToValue ? step : step * -1;
  if (fDomValue !== fToValue) {
    domElement.innerText = parseFloat((fDomValue + increment).toFixed(1));
    setTimeout(() => {
      valueAdjust(domElement, fromValue, toValue);
    }, timeout);
  }
}
