import { el, mount, setChildren } from 'redom';

export default function skeletonCreateAccountWrapperBottomTable() {
  const table = el('div', {
    className: 'account__history-table skeleton-account-bottom-table',
  });

  const thead = el('div', {
    className: 'account__history-thead skeleton-account skeleton-account-bottom-thead',
  },
  [
    el('div', {
      className: 'account__history-thead-tr skeleton-account skeleton-account-bottom-thead-tr',
    }),
  ]);

  const wrapper = el('div');

  for (let i = 0; i < 4; i++) {
    const tbody = el('div', {
      className: 'account__history-tbody skeleton-account skeleton-account-bottom-tbody',
    });

    const tbodyTr = el('div', {
      className: 'account__history-tbody-tr skeleton-account skeleton-account-bottom-tbody-tr',
    });

    mount(tbody, tbodyTr);
    mount(wrapper, tbody);
  }

  setChildren(table, [thead, wrapper]);

  return table;
}
