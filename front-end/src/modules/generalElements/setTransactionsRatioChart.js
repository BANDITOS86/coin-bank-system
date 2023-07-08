/* eslint-disable no-unused-vars */
import Chart from 'chart.js/auto';

/** *********************DIAGRAMS***************************** */
// функция настройки диаграммы соотношение входящих и исходящих транзакций
export default function setTransactionsRatioChart(canvas, balanceDataObj) {
  // плагин для рамки вокруг поля диаграмы
  const chartAreaBorder = {
    id: 'chartAreaBorder',
    beforeDraw(chart, options) {
      const {
        ctx, chartArea: {
          left, top, width, height,
        },
      } = chart;
      ctx.save();
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.strokeRect(left, top, width, height);
      ctx.restore();
    },
  };

  // функция настройки диаграммы динамика баланса
  const monthes = balanceDataObj.map((item) => item.month);

  // вставляем пустые строки для увеличения отступов слева и справа от крайних столбцов
  monthes.unshift('');
  monthes.push('');

  const commonTransSums = balanceDataObj.map((item) => item.transactions.commonTransSum);
  const min = 0;
  const max = Math.ceil(Math.max(...commonTransSums));
  const outgoing = balanceDataObj.map((item) => item.transactions.outgoing);
  const outgoingMax = Math.max(...outgoing);
  const incoming = balanceDataObj.map((item) => item.transactions.incoming);
  const incomingMax = Math.max(...incoming);
  const minFromOutAndInMax = Math.min(outgoingMax, incomingMax);
  const data = {
    labels: monthes,
    datasets: [
      {
        data: outgoing,
        backgroundColor: '#FD4E5D',
        borderColor: '#FD4E5D',
      },
      {
        data: incoming,
        backgroundColor: '#76CA66',
        borderColor: '#76CA66',
      },
    ],
  };

  // вставляем в datasets в начало и конец массива null для отступов
  data.datasets[0].data.unshift(null);
  data.datasets[0].data.push(null);
  data.datasets[1].data.unshift(null);
  data.datasets[1].data.push(null);

  // настройки диаграммы
  const chartConfig = {
    type: 'bar',
    data,
    options: {
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          usePointStyle: true,
          callbacks: {
            title: (context) => {
              const month = context[0].label;
              const { year } = balanceDataObj.find(
                (item) => item.month === month,
              );
              return `${month} ${year}`;
            },
            labelPointStyle: () => ({ pointStyle: 'rect' }),
          },
        },
        chartAreaBorder: {
          borderColor: '#000000',
          borderWidth: 1,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          beforeTickToLabelConversion: (ctx) => {
            ctx.ticks = [];
            ctx.ticks.push({ value: min, label: `${min} ₽` });
            ctx.ticks.push({ value: minFromOutAndInMax, label: `        ${minFromOutAndInMax} ₽` });
            ctx.ticks.push({ value: max, label: `        ${max} ₽` });
          },
          position: 'right',
          min,
          max,
          ticks: {
            color: '#000000',
            font: { weight: '500', size: 16 },
            padding: 0,
          },
        },
        x: {
          offset: false,
          stacked: true,
          grid: {
            display: false,
          },
          ticks: {
            color: '#000000',
            font: { weight: '600', size: 16 },
          },
        },
      },
    },
    plugins: [chartAreaBorder],
  };

  const chart = new Chart(canvas, chartConfig);
}
