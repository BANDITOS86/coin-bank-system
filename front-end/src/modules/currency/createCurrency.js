import { el, setChildren } from 'redom';
import createElementContainer from '../generalElements/createElementContainer';
import createElementYourCurrency from './createElementYourCurrency';
import createCurrencyRate from './createCurrencyRate';
import createCurrencyExchange from './createCurrencyExchange';

export default function createCurrency() {
  const container = createElementContainer();
  container.classList.add('currency');

  const title = el('h2', 'Валютный обмен', {
    className: 'currency__title',
  });

  const wrapper = el('div', {
    className: 'currency__wrapper',
  });

  setChildren(wrapper,
    [
      createElementYourCurrency(),
      createCurrencyExchange(),
      createCurrencyRate(),
    ]);

  setChildren(container, [title, wrapper]);

  return container;
}
