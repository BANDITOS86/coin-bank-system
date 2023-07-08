import { el, setChildren } from 'redom';

export default function skeletonCreateHistoryTop() {
  const wrapper = el('div', {
    className: 'history__top',
  });

  const wrapperLeft = el('div', {
    className: 'history__account',
  },
  [
    el('h2', {
      className: 'history__account-title skeleton-history skeleton-history-top-title',
    }),
    el('p', {
      className: 'history__account-number skeleton-history skeleton-history-top-number',
    }),
  ]);

  const wrapperRight = el('div', {
    className: 'history__account-back',
  },
  [
    el('button', {
      className: 'history__account-back-button btn-reset skeleton-history skeleton-history-top-back',
    }),
    el('span', {
      className: 'history__account-back-balance skeleton-history skeleton-history-top-back-balance',
    }),
  ]);

  setChildren(wrapper, [wrapperLeft, wrapperRight]);

  return wrapper;
}
