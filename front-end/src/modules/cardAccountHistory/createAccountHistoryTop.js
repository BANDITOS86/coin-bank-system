import { el, setChildren } from 'redom';
import clickBackAccounts from '../generalElements/clickBackAccounts';

export default function createAccountHistoryTop(data, router) {
  const wrapper = el('div', {
    className: 'history__top',
  });

  const wrapperLeft = el('div', {
    className: 'history__account',
  },
  [
    el('h2', 'История счёта', {
      className: 'history__account-title',
    }),
    el('p', `№ ${data.account}`, {
      className: 'history__account-number',
    }),
  ]);

  const wrapperRight = el('div', {
    className: 'history__account-back',
  });

  const button = el('button', 'Вернуться назад', {
    className: 'history__account-back-button btn-reset',
  });

  const balanceText = el('span', 'Баланс', {
    className: 'history__account-back-balance',
  },
  [
    el('p', `${data.balance} ₽`, {
      className: 'history__account-back-balance-sum',
    }),
  ]);

  setChildren(wrapperRight, [button, balanceText]);
  setChildren(wrapper, wrapperLeft, wrapperRight);

  clickBackAccounts(router, button, '/card-account');

  return wrapper;
}
