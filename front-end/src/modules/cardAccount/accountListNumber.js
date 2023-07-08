import { el, mount } from 'redom';

/* eslint-disable max-len */
export default function accountListNumber() {
  // Получаем элементы DOM
  const inputField = document.querySelector('.account__wrap-form-label-input_number');

  const list = el('ul', {
    className: 'account__wrap-form-wrapper-list list-reset',
  });

  // Событие input для поля ввода
  inputField.addEventListener('input', () => {
    const inputValue = inputField.value.toLowerCase(); // Получаем текущее значение и приводим к нижнему регистру

    // Очищаем контейнер с результатами
    list.innerHTML = '';

    // Получаем список счетов из localStorage
    const accounts = JSON.parse(localStorage.getItem('arrayListAccountNumber')) || [];

    // Фильтруем список счетов на основе текущего значения поля ввода
    const filteredAccounts = accounts.filter((account) => account.toLowerCase().indexOf(inputValue) > -1);

    // Отображаем отфильтрованные результаты
    filteredAccounts.forEach((account) => {
      const item = el('li', {
        className: 'account__wrap-form-wrapper-item',
      });
      item.textContent = account;

      // Обработчик клика для выбора счета
      item.addEventListener('click', () => {
        inputField.value = account;
        list.innerHTML = '';

        if (list.classList.contains('list-active')) {
          list.classList.remove('list-active');
        }
      });

      mount(list, item);
    });

    if (inputValue.length > 0 && filteredAccounts.length) {
      list.classList.add('list-active');
    } else {
      list.classList.remove('list-active');
    }
  });

  mount(document.querySelector('.account__wrap-form-wrapper'), list);
}
