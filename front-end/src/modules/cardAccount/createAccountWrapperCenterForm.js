import { el, setChildren } from 'redom';

export default function createAccountWrapperCenterForm() {
  const wrapper = el('div', {
    className: 'account__wrap',
  });

  const title = el('h3', 'Новый перевод', {
    className: 'account__wrap-title',
  });

  const form = el('form', {
    className: 'account__wrap-form',
    action: '\\',
    autocomplete: 'on',
  });

  const transferComplete = el('p', 'Перевод выполнен успешно', {
    className: 'transfer-complete',
  });

  const wrapperLabel = el('div', {
    className: 'account__wrap-form-wrapper',
  });

  const labelNumber = el('label', {
    className: 'account__wrap-form-label',
  },
  [
    el('span', 'Номер счёта получателя', {
      className: 'account__wrap-form-label-number',
    }),
    el('input', {
      className: 'account__wrap-form-label-input account__wrap-form-label-input_number',
      type: 'number',
      required: true,
    }),
    el('span', {
      className: 'transfer-error transfer-error-number',
    }),
  ]);

  const labelSum = el('label', {
    className: 'account__wrap-form-label',
  },
  [
    el('span', 'Сумма перевода', {
      className: 'account__wrap-form-label-sum',
    }),
    el('input', {
      className: 'account__wrap-form-label-input account__wrap-form-label-input_amount',
      type: 'number',
      required: true,
    }),
    el('span', {
      className: 'transfer-error transfer-error-amount',
    }),
  ]);

  const button = el('button', 'Отправить', {
    className: 'account__wrap-form-button btn-reset',
    disabled: true,
  });

  setChildren(wrapperLabel, labelNumber);
  setChildren(form, [wrapperLabel, labelSum, button, transferComplete]);
  setChildren(wrapper, [title, form]);

  return wrapper;
}
