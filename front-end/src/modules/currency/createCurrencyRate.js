import { el, setChildren } from 'redom';
import createElementRateList from './createElementRateList';
import skeletonElementRateList from './skeletonElementRateList';

export default function createCurrencyRate() {
  const currencyRateWrapper = el('div', {
    className: 'currency__rate',
  });

  const currencyRateTitle = el('h2', 'Изменение курсов в реальном времени', {
    className: 'currency__rate-title',
  });

  const wrapper = el('div', {
    className: 'currency__rate-wrapper',
  });

  const skeleton = skeletonElementRateList();
  const list = createElementRateList();

  setChildren(wrapper, list);
  setChildren(wrapper, skeleton);
  setChildren(currencyRateWrapper, [currencyRateTitle, wrapper]);

  return currencyRateWrapper;
}
