import { el, setChildren } from 'redom';
import arrangeBalanceData from '../generalElements/arrangeBalanceData';
import setTransactionsRatioChart from '../generalElements/setTransactionsRatioChart';

export default function createAccountHistoryCenterRatio(data) {
  const monthesToSubtract = 12;
  const balanceDataArray = arrangeBalanceData(data, monthesToSubtract);

  const wrapper = el('div', {
    className: 'history__center-ratio',
  });

  const title = el('h2', 'Соотношение входящих исходящих транзакций', {
    className: 'history__center-ratio-title',
  });

  const chart = el('canvas', {
    className: 'history__center-ratio-chart',
  });

  setTransactionsRatioChart(chart, balanceDataArray);

  setChildren(wrapper, [title, chart]);

  return wrapper;
}
