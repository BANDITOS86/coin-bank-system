/* eslint-disable func-names */
/* eslint-disable no-new */
import { el, setChildren } from 'redom';
import createAccountChart from './createAccountChart';
import clickButtonHistory from './clickButtonHistory';

export default function createAccountWrapperCenterBalanceChart(data, router) {
  const buttonChart = el('button', {
    className: 'account__wrapper-center-button btn-reset',
  });

  const title = el('h2', 'Динамика баланса', {
    className: 'account__wrapper-center-button-title',
  });

  const wrapper = el('div', {
    className: 'account__wrapper-center-button-wrap',
  });

  const chart = createAccountChart(data);

  setChildren(wrapper, chart);
  setChildren(buttonChart, [title, wrapper]);

  clickButtonHistory(router, buttonChart);

  return buttonChart;
}
