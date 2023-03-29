export default function valueAdjust(domElement, fromValue, toValue) {
  const quantity = 50;
  const isFloat = domElement.classList.contains('temperature-number') ? 1 : 0;
  for (let i = 0; i < 50; i += 1) {
    setTimeout(() => {
      const currentValue = parseFloat(fromValue) + (((toValue - fromValue) / quantity) * (i + 1));
      domElement.textContent = i === quantity - 1 ? toValue : currentValue.toFixed(isFloat);
    }, 25 * (i + 1));
  }
}

// export default function valueAdjust(domElement, fromValue, toValue) {
//   const timeout = 20;
//   let step;
//   if (domElement.className.includes('temperature-number')) step = 0.1;
//   if (domElement.className.includes('humidity')
//   || domElement.className.includes('speed-number')) step = 1;
//   const fDomValue = parseFloat(domElement.innerText);
//   const fFromValue = parseFloat(fromValue);
//   const fToValue = parseFloat(toValue);
//   const increment = fFromValue < fToValue ? step : step * -1;
//   if (fDomValue !== fToValue) {
//     domElement.innerText = parseFloat((fDomValue + increment).toFixed(1));
//     setTimeout(() => {
//       valueAdjust(domElement, fromValue, toValue);
//     }, timeout);
//   }
// }
