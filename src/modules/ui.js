import search from './dom/search';

export default function loadUi() {
  const body = document.querySelector('body');
  body.append(search());
}
