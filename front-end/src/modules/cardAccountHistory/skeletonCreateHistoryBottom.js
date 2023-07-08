import { el } from 'redom';

export default function skeletonCreateHistoryBottom() {
  const wrapper = el('div', {
    className: 'history__bottom',
  },
  [
    el('div', {
      className: 'history__bottom-title skeleton-history skeleton-history-bottom-title',
    }),
    el('div', {
      className: 'history__bottom-table',
    },
    [
      el('div', {
        className: 'history__bottom-thead',
      },
      [
        el('div', {
          className: 'history__bottom-thead-tr skeleton-history skeleton-history-bottom-thead-tr',
        },
        [
          el('div', {
            className: 'history__bottom-thead-tr-th skeleton-history skeleton-history-bottom-thead-tr-th',
          }),
        ]),
      ]),
    ]),
    el('div', {
      className: 'history__bottom-tbody',
    },
    [
      el('div', {
        className: 'history__bottom-tbody-tr skeleton-history-bottom-tbody-tr',
      },
      [
        el('div', {
          className: 'history__bottom-tbody-tr-td skeleton-history skeleton-history-bottom-tbody-tr-td',
        }),
        el('div', {
          className: 'history__bottom-tbody-tr-td skeleton-history skeleton-history-bottom-tbody-tr-td',
        }),
        el('div', {
          className: 'history__bottom-tbody-tr-td skeleton-history skeleton-history-bottom-tbody-tr-td',
        }),
        el('div', {
          className: 'history__bottom-tbody-tr-td skeleton-history skeleton-history-bottom-tbody-tr-td',
        }),
        el('div', {
          className: 'history__bottom-tbody-tr-td skeleton-history skeleton-history-bottom-tbody-tr-td',
        }),
      ]),
    ]),
  ]);

  return wrapper;
}
