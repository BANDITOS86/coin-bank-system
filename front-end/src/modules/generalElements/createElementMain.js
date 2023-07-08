import { el, mount } from 'redom';

export default function createElementMain() {
  const main = el('main', {
    className: 'main',
  });

  mount(document.body, main);

  return main;
}
