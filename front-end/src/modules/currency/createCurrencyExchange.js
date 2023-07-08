/* eslint-disable import/no-extraneous-dependencies */
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import { el, setChildren } from 'redom';

export default function createCurrencyExchange() {
  const currencyWrapper = el('div', {
    className: 'currency__exchange',
  });

  const title = el('h2', 'Обмен валюты', {
    className: 'currency__exchange-title',
  });

  const form = el('form', {
    className: 'currency__exchange-form',
  });

  const selectWrapper = el('div', {
    className: 'currency__exchange-form-selectors',
  });

  const selectFromText = el('span', 'Из', {
    className: 'currency__exchange-form-selectors-text',
  });

  const selectFromSelect = el('select', {
    className: 'currency__exchange-form-selectors-from',
    id: 'from',
  });

  const selectToText = el('span', 'в', {
    className: 'currency__exchange-form-selectors-text',
  });

  const selectToSelect = el('select', {
    className: 'currency__exchange-form-selectors-to',
    id: 'to',
  });

  const label = el('label', {
    className: 'currency__exchange-form-label',
    for: 'sum',
  });

  const labelText = el('span', 'Сумма', {
    className: 'currency__exchange-form-text',
  });

  const input = el('input', {
    className: 'currency__exchange-form-input',
    id: 'sum',
    type: 'number',
    placeholder: 'Введите сумму',
    inputmode: 'numeric',
  });

  const errorMessage = el('p', 'Недостаточно средств валюты списания', {
    className: 'message-error-nomoney',
  });

  const button = el('button', 'Обменять', {
    className: 'currency__exchange-form-button btn-reset',
    disabled: true,
  });

  const exchangeСompleted = el('p', 'Обмен успешно выполнен', {
    className: 'exchange-completed',
  });

  setChildren(selectWrapper,
    [
      selectFromText,
      selectFromSelect,
      selectToText,
      selectToSelect,
    ]);
  setChildren(label, [labelText, input, errorMessage]);
  setChildren(form, [selectWrapper, label, button, exchangeСompleted]);
  setChildren(currencyWrapper, [title, form]);

  return currencyWrapper;
}
