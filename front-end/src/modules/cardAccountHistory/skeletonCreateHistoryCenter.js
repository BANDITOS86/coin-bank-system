import { el } from 'redom';

export default function skeletonCreateHistoryCenter() {
  const wrapper = el('div', {
    className: 'history__center',
  },
  [
    el('div', {
      className: 'history__center-dynamic skeleton-history-dynamic',
    },
    [
      el('h2', {
        className: 'history__center-dynamic-title skeleton-history skeleton-history-dynamic-title',
      }),
      el('canvas', {
        className: 'history__center-dynamic-chart skeleton-history skeleton-history-dynamic-chart',
      }),
    ]),
    el('div', {
      className: 'history__center-ratio skeleton-history-ratio',
    },
    [
      el('h2', {
        className: 'history__center-ratio-title skeleton-history skeleton-history-ratio-title',
      }),
      el('canvas', {
        className: 'history__center-ratio-chart skeleton-history skeleton-history-ratio-chart',
      }),
    ]),
  ]);

  return wrapper;
}
