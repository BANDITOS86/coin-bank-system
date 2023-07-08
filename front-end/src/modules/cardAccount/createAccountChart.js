/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-shadow */
import { el } from 'redom';
import arrangeBalanceData from '../generalElements/arrangeBalanceData';
import setBalanceDynamicChart from '../generalElements/setBalanceDynamicChart';

export default function createAccountChart(data) {
  // data: Объект с исходными данными, включающим баланс, идентификатор счета и массив транзакций.
  // monthesToSubtract: Количество месяцев для отображения в результирующем балансе.
  // balanceData: Результирующий массив с данными о балансе по месяцам, полученный из функции arrangeBalanceData.
  const monthesToSubtract = 6;
  const balanceData = arrangeBalanceData(data, monthesToSubtract);

  // отрисовка таблицы
  const chart = el('canvas', {
    className: 'account__wrapper-center-button-chart',
    id: 'chart',
  });

  setBalanceDynamicChart(chart, balanceData);

  return chart;
}
