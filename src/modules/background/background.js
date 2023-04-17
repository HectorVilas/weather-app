export default function createBackground() {
  const section = document.createElement('section');
  const window = document.createElement('div');
  const curtains = document.createElement('div');
  const curtainFolds = 10;

  for (let i = 0; i < curtainFolds; i += 1) {
    const curtain = document.createElement('div');
    const className = i < curtainFolds / 2 ? 'bg-curtain-left' : 'bg-curtain-right';
    curtain.classList.add('bg-curtain', className);
    curtains.append(curtain);
  }

  section.classList.add('background');
  window.classList.add('bg-window');
  curtains.classList.add('bg-curtains');

  section.append(
    curtains,
    window,
  );

  return section;
}
