import { el, mount } from 'redom';

export default function skeletonElementAccountsList() {
  const list = el('ul', {
    className: 'accounts__list list-reset skeleton-list',
  });

  for (let i = 0; i < 9; i++) {
    const item = el('li', {
      className: 'accounts__item',
    },
    [
      el('div', {
        className: 'accounts__item-number skeleton-accounts skeleton-accounts-number',
      }),
      el('div', {
        className: 'accounts__item-balance skeleton-accounts skeleton-accounts-balance',
      }),
      el(
        'div',
        {
          className: 'accounts__item-wrapper',
        },
        [
          el('div', {
            className: 'accounts__item-wrapper-transaction skeleton-accounts skeleton-accounts-transaction',
          }),
          el('div', {
            className: 'accounts__item-wrapper-date skeleton-accounts skeleton-accounts-date',
          }),
        ],
      ),
      el('div', {
        className: 'accounts__item-open btn-reset skeleton-accounts skeleton-accounts-open',
      }),
    ]);

    mount(list, item);
  }

  return list;
}
