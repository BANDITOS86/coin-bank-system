/* eslint-disable no-loop-func */
/* eslint-disable no-use-before-define */
import { el, mount, setChildren } from 'redom';

export default function createAccountHistoryBottom(data) {
  const wrapper = el('div', {
    className: 'history__bottom',
  });

  const title = el('h2', 'История переводов', {
    className: 'history__bottom-title',
  });

  const table = el('table', {
    className: 'history__bottom-table',
  });

  const thead = el('thead', {
    className: 'history__bottom-thead',
  },
  [
    el('tr', {
      className: 'history__bottom-thead-tr',
    },
    [
      el('th', 'Счёт отправителя', {
        className: 'history__bottom-thead-tr-th',
      }),
      el('th', 'Счёт получателя', {
        className: 'history__bottom-thead-tr-th',
      }),
      el('th', 'Сумма', {
        className: 'history__bottom-thead-tr-th',
      }),
      el('th', 'Дата', {
        className: 'history__bottom-thead-tr-th',
      }),
    ]),
  ]);

  const tbody = el('tbody', {
    className: 'history__bottom-tbody',
  });

  const pagination = el('div', {
    className: 'history__bottom-pagination',
  });

  // Текущая страница
  let currentPage = 1;
  // Количество записей на странице
  const recordsPerPage = 20;
  // Количество всех транзакций
  const totalRecords = data.transactions.length;
  // Массив для хранения всех транзакций
  const transactions = data.transactions.reverse().slice(0, totalRecords);

  // Рендер таблицы
  function renderTable(trans) {
    tbody.innerHTML = '';

    // Создание строк и ячеек таблицы для каждой транзакции
    trans.forEach((transaction) => {
      let statusTransaction = null;
      let amount = null;

      if (transaction.from !== data.account) {
        statusTransaction = 'history__bottom-tbody-tr-td_amount-green';
        amount = `+ ${transaction.amount} ₽`;
      } else {
        statusTransaction = 'history__bottom-tbody-tr-td_amount-red';
        amount = `- ${transaction.amount} ₽`;
      }

      const date = new Date(transaction.date);
      let day = date.getDate();
      let month = date.getMonth() + 1;
      const year = date.getFullYear();

      if (day < 10) {
        day = `0${day}`;
      }

      if (month < 10) {
        month = `0${month}`;
      }

      const tbodyTr = el('tr', {
        className: 'history__bottom-tbody-tr',
      },
      [
        el('td', transaction.from, {
          className: 'history__bottom-tbody-tr-td history__bottom-tbody-tr-td_from',
        }),
        el('td', transaction.to, {
          className: 'history__bottom-tbody-tr-td history__bottom-tbody-tr-td_to',
        }),
        el('td', amount, {
          className: `history__bottom-tbody-tr-td history__bottom-tbody-tr-td_amount ${statusTransaction}`,
        }),
        el('td', `${day}.${month}.${year}`, {
          className: 'history__bottom-tbody-tr-td history__bottom-tbody-tr-td_date',
        }),
      ]);

      mount(tbody, tbodyTr);
    });
  }

  function generatePagination() {
    pagination.innerHTML = '';

    const totalPages = Math.ceil(totalRecords / recordsPerPage);

    // Создание кнопки "назад"
    const prevButton = el('button', 'Назад', {
      className: 'history__bottom-pagination-prev btn-reset',
    });

    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        generatePagination();
        renderPageData();
      }
    });
    mount(pagination, prevButton);

    // Создание кнопок выбора страницы
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(startPage + 4, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      const pageButton = el('button', {
        className: 'history__bottom-pagination-num btn-reset',
      });
      pageButton.innerText = i;
      pageButton.disabled = i === currentPage;
      pageButton.addEventListener('click', ((page) => () => {
        currentPage = page;
        generatePagination();
        renderPageData();
      })(i));
      mount(pagination, pageButton);
    }

    // Создание кнопки "вперед"
    const nextButton = el('button', 'Вперед', {
      className: 'history__bottom-pagination-next btn-reset',
    });

    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        generatePagination();
        renderPageData();
      }
    });
    mount(pagination, nextButton);

    // Отображение текущей страницы
    // const currentPageLabel = document.createElement('span');
    // currentPageLabel.innerText = `Текущая страница: ${currentPage}`;
    // pagination.appendChild(currentPageLabel);
  }

  function renderPageData() {
    const startIndex = (currentPage - 1) * recordsPerPage;
    const endIndex = Math.min(startIndex + recordsPerPage, totalRecords);

    const pageTransactions = transactions.slice(startIndex, endIndex);
    renderTable(pageTransactions);
  }

  // Инициализация пагинации и загрузка данных при загрузке страницы
  renderPageData();
  generatePagination();

  setChildren(table, [thead, tbody]);
  setChildren(wrapper, [title, table, pagination]);

  return wrapper;
}
