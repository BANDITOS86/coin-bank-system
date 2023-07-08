/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import JustValidate from 'just-validate';

export default function validationLoginFrom() {
  const validator = new JustValidate(document.querySelector('.form'), {
    validateBeforeSubmitting: true,
  });

  validator
    .addField(document.querySelector('.form__login'), [
      {
        rule: 'required',
        errorMessage: 'Логин обязателен к заполнению',
      },
      {
        rule: 'customRegexp',
        value: /^[^ .\\/:-]+$/,
        errorMessage: 'Не допускается ввод пробела, -, ., /, :,',
      },
      {
        rule: 'minLength',
        value: 6,
        errorMessage: 'Минимальная длинна логина 6 символов',
      },
    ])
    .addField(document.querySelector('.form__password'), [
      {
        rule: 'required',
        errorMessage: 'Пароль обязателен к заполнению',
      },
      {
        rule: 'customRegexp',
        value: /^[^ .\\/:-]+$/,
        errorMessage: 'Не допускается ввод пробела, -, ., /, :,',
      },
      {
        rule: 'minLength',
        value: 6,
        errorMessage: 'Минимальная длинна пароля 6 символов',
      },
    ])
    .onSuccess((e) => {
      e.preventDefault();
    });

  const inputs = document.querySelectorAll('input');
  const btn = document.querySelector('.form__btn');

  inputs.forEach((value) => {
    value.addEventListener('keyup', () => {
      btn.disabled = !validator.isValid;
    });
  });
}
