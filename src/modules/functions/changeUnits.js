export default function changeUnits(e) {
  const newValue = e.target.checked;
  const unitsClass = e.target.className.includes('temperature-unit')
    ? '.temperature-unit' : '.wind-speed-unit';
  const valuesClass = unitsClass === '.temperature-unit'
    ? '.temperature-number' : '.speed-number';
  // change the rest of the units
  const units = document.querySelectorAll(unitsClass);
  units.forEach((unit) => {
    unit.checked = newValue;
  });
  // change the related values
  const values = document.querySelectorAll(valuesClass);
  values.forEach((number) => {
    if (valuesClass === '.temperature-number') {
      number.innerText = newValue ? number.dataset.fahrenheit : number.dataset.celsius;
    } else {
      number.innerText = newValue ? number.dataset.miles : number.dataset.kilometers;
    }
  });
}
