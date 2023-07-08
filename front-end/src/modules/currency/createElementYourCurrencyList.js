/* eslint-disable import/order */
/* eslint-disable import/no-duplicates */
import { el, mount, setChildren } from 'redom';
import { getCurrencyAccounts } from '../api/api';
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import SimpleBar from 'simplebar';
import skeletonYourCurrencyList from './skeletonYourCurrencyList';

export default function createElementYourCurrencyList(token) {
  const arrayCurrencyHelp = [];

  const skeleton = skeletonYourCurrencyList();

  const wrapper = el('div', {
    className: 'currency__wrap-list',
    id: 'simple',
    'data-simplebar': true,
    'data-simplebar-auto-hide': false,
  });

  const currency = getCurrencyAccounts(token);
  currency.then((data) => {
    const list = el('ul', {
      className: 'currency__list list-reset',
    });

    data.forEach((element) => {
      const item = el('li', {
        className: 'currency__item',
      },
      [
        el('span', `${element.code}`, {
          className: 'currency__item-code',
        }), el('span', {
          className: 'currency__item-dashed ',
        }), el('span', `${element.amount.toFixed(2)}`, {
          className: 'currency__item-amount',
        }),
      ]);
      arrayCurrencyHelp.push(item);
    });

    arrayCurrencyHelp.forEach((elem) => {
      mount(list, elem);
    });

    setChildren(wrapper, list);

    const simpleBar = new SimpleBar(document.getElementById('simple'), { autoHide: false });
    simpleBar.recalculate();
  });
  setChildren(wrapper, skeleton);

  return wrapper;
}
