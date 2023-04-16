export default function createBackground() {
  const section = document.createElement('section');
  const window = document.createElement('div');

  window.classList.add('bg-window');
  section.classList.add('background');

  section.append(
    window,
  );

  return section;
}
