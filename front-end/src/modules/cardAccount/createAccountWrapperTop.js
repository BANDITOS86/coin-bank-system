import { el, setChildren } from 'redom';
import clickBackAccounts from '../generalElements/clickBackAccounts';

export default function createAccountWrapperTop(data, router) {
  const accountWrapper = el('div', {
    className: 'account__wrapper account__wrapper-top',
  });

  const accountWrapperLeft = el('div', {
    className: 'account__wrapper-view',
  },
  [
    el('h2', 'Простмотр счёта', {
      className: 'account__wrapper-view-title',
    }),
    el('p', `№ ${data.account}`, {
      className: 'account__wrapper-view-number',
    }),
  ]);

  const accountWrapperRight = el('div', {
    className: 'account__wrapper-back',
  });

  const button = el('button', 'Вернуться назад', {
    className: 'account__wrapper-back-button btn-reset',
  });

  const balanceText = el('span', 'Баланс', {
    className: 'account__wrapper-back-balance',
  },
  [
    el('p', `${data.balance} ₽`, {
      className: 'account__wrapper-back-balance-sum',
    }),
  ]);

  setChildren(accountWrapperRight, button, balanceText);
  setChildren(accountWrapper, [accountWrapperLeft, accountWrapperRight]);

  clickBackAccounts(router, button, '/account');

  return accountWrapper;
}
