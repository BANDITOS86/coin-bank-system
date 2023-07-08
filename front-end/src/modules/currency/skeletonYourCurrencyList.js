import { el } from 'redom';

export default function skeletonYourCurrencyList() {
  const list = el('ul', {
    className: 'currency__wrap-list',
  },
  [
    el('li', {
      className: 'currency__item',
    },
    [
      el('div', {
        className: 'currency__item-code skeleton-currency skeleton-currency-code',
      }), el('div', {
        className: 'currency__item-dashed skeleton-currency skeleton-currency-dashed',
      }), el('div', {
        className: 'currency__item-amount skeleton-currency skeleton-currency-amount',
      }),
    ]),
    el('li', {
      className: 'currency__item',
    },
    [
      el('div', {
        className: 'currency__item-code skeleton-currency skeleton-currency-code',
      }), el('div', {
        className: 'currency__item-dashed skeleton-currency skeleton-currency-dashed',
      }), el('div', {
        className: 'currency__item-amount skeleton-currency skeleton-currency-amount',
      }),
    ]),
    el('li', {
      className: 'currency__item',
    },
    [
      el('div', {
        className: 'currency__item-code skeleton-currency skeleton-currency-code',
      }), el('div', {
        className: 'currency__item-dashed skeleton-currency skeleton-currency-dashed',
      }), el('div', {
        className: 'currency__item-amount skeleton-currency skeleton-currency-amount',
      }),
    ]),
    el('li', {
      className: 'currency__item',
    },
    [
      el('div', {
        className: 'currency__item-code skeleton-currency skeleton-currency-code',
      }), el('div', {
        className: 'currency__item-dashed skeleton-currency skeleton-currency-dashed',
      }), el('div', {
        className: 'currency__item-amount skeleton-currency skeleton-currency-amount',
      }),
    ]),
    el('li', {
      className: 'currency__item',
    },
    [
      el('div', {
        className: 'currency__item-code skeleton-currency skeleton-currency-code',
      }), el('div', {
        className: 'currency__item-dashed skeleton-currency skeleton-currency-dashed',
      }), el('div', {
        className: 'currency__item-amount skeleton-currency skeleton-currency-amount',
      }),
    ]),
  ]);

  return list;
}
