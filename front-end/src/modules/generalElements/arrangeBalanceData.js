/* eslint-disable no-shadow */
/* eslint-disable max-len */
export default function arrangeBalanceData(response, monthesToSubtract) {
  const monthNames = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июн',
    'июл',
    'авг',
    'сен',
    'окт',
    'ноя',
    'дек',
  ];

  // Получаем начальную дату для отсчета на основе указанного количества месяцев monthesToSubtract.
  // Определяет текущую дату, вычисляет месяц и год,
  // с учетом вычитания указанного количества месяцев, и возвращает соответствующую дату.
  function getStartDate() {
    const nowDate = new Date();
    let startMonth = nowDate.getMonth() - (monthesToSubtract - 1);
    let startYear = nowDate.getFullYear();
    if (startMonth < 0) {
      const yearToSubtract = Math.ceil(Math.abs(startMonth) / 12);
      startYear -= yearToSubtract;
      startMonth += yearToSubtract * 12;
    }
    return new Date(startYear, startMonth);
  }

  // Разделяем транзакции по месяцам.
  // Принимает массив транзакций transArray и начальную дату startDate.
  // Создает массив transByMonths для хранения транзакций по месяцам.
  // Затем проходит по массиву транзакций, начиная с даты startDate,
  // и распределяет каждую транзакцию в соответствующий месяц transByMonths.
  // Возвращает массив transByMonths с транзакциями, разделенными по месяцам.
  function divideTransPerMonth(transArray, startDate) {
    const transByMonths = [];
    const beginFrom = new Date(startDate);
    const nowDate = new Date();
    while (beginFrom < nowDate) {
      const monthNum = beginFrom.getMonth();
      const monthName = monthNames[monthNum];
      const year = beginFrom.getFullYear();
      const checkArray = transByMonths.find(
        (item) => item.month === monthName && item.year === year,
      );
      if (!checkArray) {
        transByMonths.push({
          month: monthName,
          year,
          transactions: [],
        });
      }
      beginFrom.setMonth(monthNum + 1);
    }

    const searchIndex = transArray.findIndex(
      (el) => new Date(el.date) >= startDate,
    );

    const newTransArr = transArray.slice(searchIndex);

    for (const item of newTransArr) {
      const transDate = new Date(item.date);
      const transMonthName = monthNames[transDate.getMonth()];
      const transYear = transDate.getFullYear();
      const itemToChangeInd = transByMonths.findIndex(
        (item) => item.month === transMonthName && item.year === transYear,
      );
      if (itemToChangeInd !== -1) {
        transByMonths[itemToChangeInd].transactions.push(item);
      }
    }

    return transByMonths;
  }

  // Вычисляем сумму входящих и исходящих транзакций для каждого месяца.
  // Принимает массив транзакций transactions и идентификатор счета countId.
  // Перебирает транзакции и суммирует суммы входящих и исходящих транзакций,
  // сравнивая их с countId. Возвращает объект с суммой входящих и исходящих транзакций.
  function calculateBalancePerMonth(transactions, countId) {
    let incoming = 0;
    let outgoing = 0;
    if (transactions.length > 0) {
      for (const item of transactions) {
        if (item.to === countId) {
          incoming += item.amount;
        }
        if (item.from === countId) {
          outgoing += item.amount;
        }
      }
    }
    return { incoming, outgoing };
  }

  // Основная функция arrangeBalanceData, которая объединяет все шаги для расчета баланса по месяцам.
  // Принимает объект response/data с исходными данными и количество месяцев для отображения monthesToSubtract.
  // Извлекает текущий баланс, массив транзакций и идентификатор счета из объекта response.
  // Затем вызывает getStartDate для получения начальной даты.
  // Далее вызывает divideTransPerMonth для разделения транзакций по месяцам.
  // Затем проходит по массиву транзакций по месяцам и вычисляет суммы входящих и исходящих транзакций, а также разницу между ними.
  // Суммирует входящие и исходящие транзакции для получения общей суммы транзакций.
  // Обновляет начальный баланс с учетом разницы между входящими и исходящими транзакциями. Возвращает массив с данными о балансе по месяцам.
  const currentBalance = response.balance;
  const transArray = response.transactions;
  const countId = response.account;
  const startDate = getStartDate();
  const transPerMonth = divideTransPerMonth(transArray, startDate);
  let startBalance = currentBalance;
  let toSubtractDifference = 0;
  const balancePerMonth = transPerMonth
    .reverse()
    .map((item) => {
      const { incoming, outgoing } = calculateBalancePerMonth(
        item.transactions,
        countId,
      );
      const difference = incoming - outgoing;
      const commonTransSum = incoming + outgoing;
      startBalance -= toSubtractDifference;
      toSubtractDifference = difference;
      item.transactions = {
        incoming,
        outgoing,
        difference,
        commonTransSum,
        balance: startBalance,
      };
      return item;
    })
    .reverse();

  return balancePerMonth;
}
