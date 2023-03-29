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
