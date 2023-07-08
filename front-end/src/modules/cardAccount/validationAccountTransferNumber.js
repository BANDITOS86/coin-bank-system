import JustValidate from 'just-validate';

export default function validationAccountTransferNumber() {
  const validator = new JustValidate(document.querySelector('.account__wrap-form'), {
    validateBeforeSubmitting: true,
  });

  validator
    .addField(document.querySelector('.account__wrap-form-label-input_number'), [
      {
        rule: 'required',
        errorMessage: 'Номер счёта обязателен к заполнению',
      },
      {
        rule: 'number',
      },
    ])
    .addField(document.querySelector('.account__wrap-form-label-input_amount'), [
      {
        rule: 'required',
        errorMessage: 'Сумма обязательна к заполнению',
      },
      {
        rule: 'number',
      },
      {
        rule: 'minNumber',
        value: 1,
        errorMessage: 'Минимальная сумма 1',
      },
    ])
    .onSuccess((e) => {
      e.preventDefault();
    });

  const inputs = document.querySelectorAll('.account__wrap-form-label-input');
  const button = document.querySelector('.account__wrap-form-button');

  inputs.forEach((value) => {
    value.addEventListener('keyup', () => {
      button.disabled = !validator.isValid;
    });
  });
}
