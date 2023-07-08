import { el } from 'redom';

export default function createElementContainer() {
  const container = el('div', {
    className: 'container',
  });

  return container;
}
