/* eslint-disable no-unused-vars */
import Chart from 'chart.js/auto';

/** *********************DIAGRAMS***************************** */
// функция настройки динамической диаграммы
export default function setBalanceDynamicChart(canvas, balanceDataArray) {
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
  const monthes = balanceDataArray.map((item) => item.month);

  // вставляем пустые строки для увеличения отступов слева и справа от крайних столбцов
  monthes.unshift('');
  monthes.push('');

  const transDiff = balanceDataArray.map((item) => item.transactions.difference);

  const max = Math.ceil(Math.max(...transDiff));
  let min = Math.floor(Math.min(...transDiff));
  min = min < 0 ? min : 0;

  // данные для динамики баланса
  const data = {
    labels: monthes,
    datasets: [
      {
        data: transDiff,
        backgroundColor: '#116ACC',
        borderColor: '#116ACC',
      },
    ],
  };

  // вставляем в datasets в начало и конец массива null для отступов
  data.datasets[0].data.unshift(null);
  data.datasets[0].data.push(null);

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
              const { year } = balanceDataArray.find((item) => item.month === month);
              return `${month} ${year}`;
            },
            labelPointStyle: (context) => {
              const isOut = context.formattedValue.startsWith('-');
              if (isOut) return { pointStyle: 'triangle', rotation: 180, radius: 2 };
              return { pointStyle: 'triangle', radius: 2 };
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          position: 'right',
          min,
          max,
          ticks: {
            labelOffset: 0,
            maxTicksLimit: min < 0 ? 3 : 2,
            color: '#000000',
            font: { weight: '500', size: 16 },
            padding: 0,
            callback(value) {
            // Добавляем отступы слева от подписи
              if (value === 0) {
              // Если value равно 0, нет отступа
                return `${value} ₽`;
              }
              // Если value не равно 0, добавляем отступы слева от подписи
              return `        ${value} ₽`;
            },
          },
        },
        x: {
          offset: false,
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
    plugins: [
      chartAreaBorder,
    ],
  };

  const chart = new Chart(canvas, chartConfig);
}
