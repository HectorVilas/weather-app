export function rangePercent(min, max, target) {
  const percentRange = ((target - min) / (max - min)) * 100;
  return parseFloat(parseFloat(percentRange).toFixed(1));
}
export function rangePercentToPixels(percent, height) {
  const toPixels = ((percent * height) / 100);
  // invert default Y axis behavior, use base as zero, ascend going up
  return (toPixels * -1) + height;
}

export function hideBetween(domElements, parentWidth) {
  let startFrom;
  let every;
  if (parentWidth < 190) {
    startFrom = 0;
    every = 0;
  } else if (parentWidth < 290) {
    startFrom = 2;
    every = 4;
  } else if (parentWidth < 400) {
    startFrom = 2;
    every = 3;
  } else if (parentWidth < 950) {
    startFrom = 1;
    every = 2;
  } else {
    startFrom = 1;
    every = -1;
  }
  domElements.forEach((element, i) => {
    if ((i + startFrom) % every !== 0) {
      element.classList.add('hidden');
      element.dataset.hidden = true;
    } else {
      element.classList.remove('hidden');
      element.dataset.hidden = false;
    }
  });
}

export function getNext25(array, startFromIndex = 0) {
  const newArray = [];
  for (let i = 0; i < 25; i += 1) {
    newArray.push(array[i + startFromIndex]);
  }

  return newArray;
}
