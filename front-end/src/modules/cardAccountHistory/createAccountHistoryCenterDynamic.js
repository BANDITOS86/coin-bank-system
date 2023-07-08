import { el, setChildren } from 'redom';
import arrangeBalanceData from '../generalElements/arrangeBalanceData';
import setBalanceDynamicChart from '../generalElements/setBalanceDynamicChart';

export default function createAccountHistoryCenterDynamic(data) {
  const monthesToSubtract = 12;
  const balanceDataArray = arrangeBalanceData(data, monthesToSubtract);

  const wrapper = el('div', {
    className: 'history__center-dynamic',
  });

  const title = el('h2', 'Динамика баланса', {
    className: 'history__center-dynamic-title',
  });

  const chart = el('canvas', {
    className: 'history__center-dynamic-chart',
  });

  setBalanceDynamicChart(chart, balanceDataArray);

  setChildren(wrapper, [title, chart]);

  return wrapper;
}
