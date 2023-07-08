import { el, setChildren } from 'redom';
import createElementYourCurrencyList from './createElementYourCurrencyList';

export default function createElementYourCurrency() {
  const token = localStorage.getItem('token');

  const yourСurrencies = el('div', {
    className: 'currency__your',
  });

  const yourСurrenciesTitle = el('h3', 'Ваши валюты', {
    className: 'currency__your-title',
  });

  const wrapper = el('div', {
    className: 'currency__wrap',
  });

  const wrapperList = createElementYourCurrencyList(token);

  setChildren(wrapper, wrapperList);
  setChildren(yourСurrencies, [yourСurrenciesTitle, wrapper]);

  return yourСurrencies;
}
