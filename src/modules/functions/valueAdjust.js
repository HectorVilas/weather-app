export default function valueAdjust(domElement, fromValue, toValue) {
  const values = [];
  const quantity = 50;
  for (let i = 0; i < quantity; i += 1) {
    const currentValue = parseFloat(fromValue) + (((toValue - fromValue) / quantity) * (i + 1));
    values.push(currentValue.toFixed(1));
  }
  values.forEach((value, i) => {
    setTimeout(() => {
      domElement.innerText = value;
    }, 25 * (i + 1));
  });
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
