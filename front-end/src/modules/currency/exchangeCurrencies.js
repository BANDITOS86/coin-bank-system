import { setChildren } from 'redom';
import { exchangeCurrency } from '../api/api';
import createElementYourCurrencyList from './createElementYourCurrencyList';

export default function exchangeCurrencies() {
  const divWrapper = document.querySelector('.currency__exchange');
  const button = document.querySelector('.currency__exchange-form-button');
  const from = document.querySelector('.currency__exchange-form-selectors-from');
  const to = document.querySelector('.currency__exchange-form-selectors-to');
  const sum = document.querySelector('.currency__exchange-form-input');
  const noMoney = document.querySelector('.message-error-nomoney');
  const exchangeСompleted = document.querySelector('.exchange-completed');
  const token = localStorage.getItem('token');

  button.addEventListener('click', (e) => {
    e.preventDefault();

    exchangeCurrency(from.value, to.value, sum.value, token).then((data) => {
      if (data.error === 'Overdraft prevented') {
        noMoney.style.opacity = 1;
        noMoney.style.visibility = 'visible';
        divWrapper.classList.add('error-div');
        sum.classList.add('error-input-exchange');
        sum.value = '';
        button.disabled = true;
        setTimeout(() => {
          noMoney.style.opacity = 0;
          noMoney.style.visibility = 'hidden';
          divWrapper.classList.remove('error-div');
          sum.classList.remove('error-input-exchange');
        }, 2500);
      } else {
        sum.value = '';
        button.disabled = true;
        setTimeout(() => {
          divWrapper.classList.add('complete-div');
          exchangeСompleted.style.opacity = 1;
          exchangeСompleted.style.visibility = 'visible';
        }, 1500);
        setTimeout(() => {
          exchangeСompleted.style.opacity = 0;
          exchangeСompleted.style.visibility = 'hidden';
          divWrapper.classList.remove('complete-div');
        }, 3500);
        setChildren(document.querySelector('.currency__wrap'), createElementYourCurrencyList(token));
      }
    });
  });
}
