import { setChildren } from 'redom';
import { transferFunds } from '../api/api';
import showErrorMessage from '../generalElements/showErrorMessage';
import createAccountWrapperBottomTable from './createAccountWrapperBottomTable';
import createAccountChart from './createAccountChart';
import skeletonCreateAccountWrapperCenterChart from './skeletonCreateAccountWrapperCenterChart';
import skeletonCreateAccountWrapperBottomTable from './skeletonCreateAccountWrapperBottomTable';

export default function accountTransferNumber(token) {
  const number = document.querySelector('.account__wrap-form-label-input_number');
  const amount = document.querySelector('.account__wrap-form-label-input_amount');
  const button = document.querySelector('.account__wrap-form-button');
  const from = localStorage.getItem('idAccount');
  let message;
  let formElementError;

  button.addEventListener('click', () => {
    transferFunds(from, number.value, amount.value, token).then((data) => {
      if (data.error) {
        if (data.error === 'Invalid account to') {
          message = 'Данного счёта не существует';
          formElementError = document.querySelector('.transfer-error-number');
          showErrorMessage(message, formElementError, number, button);
          setTimeout(() => {
            number.value = '';
            amount.value = '';
            amount.classList.remove('just-validate-success-field');
          }, 3000);
        }

        if (data.error === 'Overdraft prevented') {
          message = `На счёте № ${from} недостаточно средств`;
          formElementError = document.querySelector('.transfer-error-amount');
          formElementError.style.left = 0;
          showErrorMessage(message, formElementError, amount, button);
          setTimeout(() => {
            number.value = '';
            amount.value = '';
            number.classList.remove('just-validate-success-field');
          }, 3000);
        }
      }

      let arrayListAccountNumber = JSON.parse(localStorage.getItem('arrayListAccountNumber'));

      if (data.payload) {
        // Обновление динамики
        const wrapperChart = document.querySelector('.account__wrapper-center-button-wrap');
        const chart = createAccountChart(data.payload);
        const skeletonChart = skeletonCreateAccountWrapperCenterChart();
        setChildren(wrapperChart, skeletonChart);
        setTimeout(() => {
          setChildren(wrapperChart, chart);
        }, 3000);

        // Обновление истории транзакций
        const wrapperTable = document.querySelector('.account__history-wrapper');
        const table = createAccountWrapperBottomTable(data.payload);
        const skeletonTable = skeletonCreateAccountWrapperBottomTable();
        setChildren(wrapperTable, skeletonTable);
        setTimeout(() => {
          setChildren(document.querySelector('.account__history-wrapper'), table);
        }, 3000);

        if (!arrayListAccountNumber) {
          arrayListAccountNumber = [];
        }

        if (!arrayListAccountNumber.includes(number.value)) {
          arrayListAccountNumber.push(number.value);
        }

        localStorage.setItem('arrayListAccountNumber', JSON.stringify(arrayListAccountNumber));

        const transferComplete = document.querySelector('.transfer-complete');
        transferComplete.style.opacity = 1;
        transferComplete.style.visibility = 'visible';
        number.value = '';
        amount.value = '';
        amount.classList.remove('just-validate-success-field');
        number.classList.remove('just-validate-success-field');
        setTimeout(() => {
          transferComplete.style.opacity = 0;
          transferComplete.style.visibility = 'hidden';
        }, 3000);
      }
    });
  });
}
