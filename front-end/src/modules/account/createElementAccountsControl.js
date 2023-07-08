/* eslint-disable import/prefer-default-export */
import { el, setChildren } from 'redom';

export default function createElementAccountsControl() {
  const accountList = el('div', {
    className: 'accounts',
  });

  const accountSort = el('div', {
    className: 'accounts__sort',
  },
  el('p', 'Ваши счета', {
    className: 'accounts__sort-title',
  }),
  el('select', {
    className: 'accounts__sort-select',
    name: '',
  },
  [
    el('option', 'Сортировка', {
      value: '',
    }),
    el('option', 'По номеру'),
    el('option', 'По балансу'),
    el('option', 'По последней транзакции'),
  ]));

  const accountsNew = el('button', 'Создать новый счёт', {
    className: 'accounts__new btn-reset',
  });

  setChildren(accountList, [accountSort, accountsNew]);

  return accountList;
}
