/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
import { el, mount } from 'redom';
import { getAccounts } from '../api/api';
import clickCardAccount from './clickCardAccount';

export function createElementAccountsList(router) {
  const token = localStorage.getItem('token');

  const list = el('ul', {
    className: 'accounts__list list-reset',
  });

  getAccounts(token).then((res) => {
    console.log(res);
    const arrayAccounts = res.payload;
    const arrayAccountsHelp = [];

    arrayAccounts.forEach((data) => {
      let date = null;
      const arrayMonth = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря',
      ];

      if (data.transactions[0]) {
        date = new Date(data.transactions[0].date);
        date = `${date.getDate()} ${
          arrayMonth[date.getMonth()]
        } ${date.getFullYear()}`;
      } else {
        date = '';
      }

      const item = el('li', {
        className: 'accounts__item',
      },
      [
        el('p', data.account, {
          className: 'accounts__item-number',
          'data-number': data.account,
        }),
        el('p', `${data.balance.toFixed(2)} ₽`, {
          className: 'accounts__item-balance',
          'data-balance': data.balance.toFixed(2),
        }),
        el(
          'div',
          {
            className: 'accounts__item-wrapper',
          },
          [
            el('p', 'Последняя транзакция:', {
              className: 'accounts__item-wrapper-transaction',
            }),
            el('p', date, {
              className: 'accounts__item-wrapper-date',
              'data-last-transaction': date,
            }),
          ],
        ),
        el('button', 'Открыть', {
          className: 'accounts__item-open btn-reset',
        }),
      ]);

      arrayAccountsHelp.push(item);
    });

    arrayAccountsHelp.forEach((item) => {
      mount(list, item);
    });

    const skeletonList = document.querySelector('.skeleton-list');
    if (skeletonList !== null) {
      skeletonList.remove();
    }

    clickCardAccount(router);
  });

  return list;
}
