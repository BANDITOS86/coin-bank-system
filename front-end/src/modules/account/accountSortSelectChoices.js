/* eslint-disable no-inner-declarations */
/* eslint-disable no-use-before-define */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
import Choices from 'choices.js';
import '../../../node_modules/choices.js/src/styles/choices.scss';

export default function accountSortSelectChoices() {
  const select = document.querySelector('.accounts__sort-select');
  const choicesSelect = new Choices((select), {
    allowHTML: false,
    searchEnabled: false,
    shouldSort: false,
    itemSelectText: '',
  });

  select.addEventListener('change', () => {
    const selectedValue = choicesSelect.getValue(); // Получаем выбранное значение
    const items = document.querySelectorAll('.accounts__item');
    const arr = Array.prototype.slice.call(items);

    if (selectedValue.value === 'По номеру') {
      arr.sort((a, b) => {
        const aNumber = parseInt(a.querySelector('.accounts__item-number').getAttribute('data-number'));
        const bNumber = parseInt(b.querySelector('.accounts__item-number').getAttribute('data-number'));
        return aNumber - bNumber;
      });
    }
    if (selectedValue.value === 'По балансу') {
      arr.sort((a, b) => {
        const aNumber = parseInt(a.querySelector('.accounts__item-balance').getAttribute('data-balance'));
        const bNumber = parseInt(b.querySelector('.accounts__item-balance').getAttribute('data-balance'));
        return aNumber - bNumber;
      });
    }
    if (selectedValue.value === 'По последней транзакции') {
      // Сортируем массив элементов li по дате последней транзакции
      arr.sort((a, b) => {
        const aDateAttr = a.querySelector('.accounts__item-wrapper-date').getAttribute('data-last-transaction');
        const bDateAttr = b.querySelector('.accounts__item-wrapper-date').getAttribute('data-last-transaction');

        // Проверяем наличие атрибута data-last-transaction
        if (aDateAttr && bDateAttr) {
          const aDate = parseDate(aDateAttr);
          const bDate = parseDate(bDateAttr);
          return aDate - bDate;
        } if (aDateAttr) {
          // Если у b нет атрибута, a будет считаться "меньшим" и будет расположен впереди b
          return -1;
        } if (bDateAttr) {
          // Если у a нет атрибута, b будет считаться "меньшим" и будет расположен впереди a
          return 1;
        }
        // Если у обоих элементов нет атрибута, порядок сортировки остается неизменным
        return 0;
      });

      // Функция для разбора строки даты в формате "день месяц год"
      function parseDate(dateString) {
        const parts = dateString.split(' ');
        const day = parseInt(parts[0]);
        const monthIndex = getMonthIndex(parts[1]);
        const year = parseInt(parts[2]);
        return new Date(year, monthIndex, day);
      }

      // Функция для получения индекса месяца по его названию
      function getMonthIndex(monthName) {
        const months = [
          'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
          'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
        ];
        return months.indexOf(monthName);
      }
    }

    const list = document.querySelector('.accounts__list');
    list.innerHTML = '';

    arr.forEach((li) => {
      list.append(li);
    });
  });
}
