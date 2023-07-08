import { el, mount, setChildren } from 'redom';

export default function createAccountWrapperBottomTable(data) {
  const table = el('table', {
    className: 'account__history-table',
  });

  const thead = el('thead', {
    className: 'account__history-thead',
  },
  [
    el('tr', {
      className: 'account__history-thead-tr',
    },
    [
      el('th', 'Счёт отправителя', {
        className: 'account__history-thead-tr-th',
      }),
      el('th', 'Счёт получателя', {
        className: 'account__history-thead-tr-th',
      }),
      el('th', 'Сумма', {
        className: 'account__history-thead-tr-th',
      }),
      el('th', 'Дата', {
        className: 'account__history-thead-tr-th',
      }),
    ]),
  ]);

  const tbody = el('tbody', {
    className: 'account__history-tbody',
  });

  const lastFiveTransactionsArray = data.transactions.slice(-5).reverse();
  lastFiveTransactionsArray.forEach((element) => {
    let statusTransaction = null;
    let amount = null;

    if (element.from !== data.account) {
      statusTransaction = 'account__history-tbody-tr-td_amount-green';
      amount = `+ ${element.amount} ₽`;
    } else {
      statusTransaction = 'account__history-tbody-tr-td_amount-red';
      amount = `- ${element.amount} ₽`;
    }

    const date = new Date(element.date);
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
      className: 'account__history-tbody-tr',
    },
    [
      el('td', element.from, {
        className: 'account__history-tbody-tr-td account__history-tbody-tr-td_from',
      }),
      el('td', element.to, {
        className: 'account__history-tbody-tr-td account__history-tbody-tr-td_to',
      }),
      el('td', amount, {
        className: `account__history-tbody-tr-td account__history-tbody-tr-td_amount ${statusTransaction}`,
      }),
      el('td', `${day}.${month}.${year}`, {
        className: 'account__history-tbody-tr-td account__history-tbody-tr-td_date',
      }),
    ]);

    mount(tbody, tbodyTr);
  });

  setChildren(table, [thead, tbody]);

  return table;
}
