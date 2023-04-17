export default function openLocationSearch() {
  const mainMenuBackground = document.querySelector('.main-menu-background');
  const citySearch = document.querySelector('.city-search');

  mainMenuBackground.classList.remove('invisible');
  citySearch.classList.remove('hidden');
}
