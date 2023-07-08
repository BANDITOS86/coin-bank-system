import { el, setChildren } from 'redom';

export default function createSkeletonMapAtms() {
  const wrapper = el('div', {
    className: 'skeleton',
  });

  const title = el('div', {
    className: 'atms__title skeleton-atms skeleton-atms-title',
  });

  const map = el('div', {
    className: 'map skeleton-atms skeleton-atms-map',
  });

  setChildren(wrapper, [title, map]);

  return wrapper;
}
