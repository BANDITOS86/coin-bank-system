import { el, setChildren } from 'redom';

export default function skeltonCreateAccountWrapperTop() {
  const accountWrapper = el('div', {
    className: 'account__wrapper account__wrapper-top',
  });

  const accountWrapperLeft = el('div', {
    className: 'account__wrapper-view',
  },
  [
    el('h2', {
      className: 'account__wrapper-view-title skeleton-account skeleton-account-top-title',
    }),
    el('p', {
      className: 'account__wrapper-view-number skeleton-account skeleton-account-top-number',
    }),
  ]);

  const accountWrapperRight = el('div', {
    className: 'account__wrapper-back',
  },
  [
    el('button', {
      className: 'account__wrapper-back-button btn-reset skeleton-account skeleton-account-top-back',
    }),
    el('span', {
      className: 'account__wrapper-back-balance skeleton-account skeleton-account-top-back-balance',
    }),
  ]);

  setChildren(accountWrapper, [accountWrapperLeft, accountWrapperRight]);

  return accountWrapper;
}
