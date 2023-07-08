import { el, setChildren } from 'redom';

export default function createLoginForm() {
  const form = el('form', {
    className: 'form',
  });

  const formTitle = el('h1', 'Вход в аккаунт', {
    className: 'form__title',
  });

  const labelLogin = el(
    'label',
    {
      className: 'form__label',
      for: 'label-login',
    },
    [
      el('span', 'Логин', {
        className: 'form__login-span',
      }),
      el('input', {
        className: 'form__login',
        id: 'label-login',
        type: 'text',
        required: true,
        placeholder: 'Введите логин',
      }),
      el('p', {
        className: 'form-login-error',
      }),
    ],
  );

  const labelPassword = el(
    'label',
    {
      className: 'form__label',
      for: 'label-password',
    },
    [
      el('span', 'Пароль', {
        className: 'form__password-span',
      }),
      el('input', {
        className: 'form__password',
        id: 'label-password',
        type: 'password',
        required: true,
        placeholder: 'Введите пароль',
      }),
      el('p', {
        className: 'form-password-error',
      }),
    ],
  );

  const formBtn = el('button', 'Войти', {
    className: 'form__btn btn-reset',
    disabled: 'true',
  });

  setChildren(form, [formTitle, labelLogin, labelPassword, formBtn]);

  return form;
}
