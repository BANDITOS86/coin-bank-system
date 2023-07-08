import JustValidate from 'just-validate';

export default function validationCurrencyExchange() {
  const validator = new JustValidate(document.querySelector('.currency__exchange-form'), {
    validateBeforeSubmitting: true,
  });

  validator
    .addField('.currency__exchange-form-input', [
      {
        rule: 'required',
        errorMessage: 'Сумма обязательна к заполнению',
      },
      {
        rule: 'number',
      },
      {
        rule: 'minNumber',
        value: 0.1,
        errorMessage: 'Минимальная сумма 0.1',
      },
    ])
    .onSuccess((e) => {
      e.preventDefault();
    });

  const input = document.querySelector('.currency__exchange-form-input');
  const btn = document.querySelector('.currency__exchange-form-button');

  input.addEventListener('keyup', () => {
    btn.disabled = !validator.isValid;
  });
}
