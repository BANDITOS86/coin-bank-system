import { autorization } from '../api/api';
import showErrorMessage from '../generalElements/showErrorMessage';

export default function userAuthorization(router) {
  const login = document.querySelector('.form__login');
  const password = document.querySelector('.form__password');
  const btnLogin = document.querySelector('.form__btn');
  let message;
  let formElementError;

  btnLogin.addEventListener('click', async () => {
    const response = await autorization(login.value, password.value);
    login.value = '';
    password.value = '';

    if (response.payload) {
      localStorage.setItem('token', response.payload.token);
      router.navigate('/account');
    }

    if (response.error) {
      if (response.error === 'No such user') {
        message = 'Пользователя с таким логином не существует';
        formElementError = document.querySelector('.form-login-error');
        password.classList.remove('just-validate-success-field');
        showErrorMessage(message, formElementError, login, btnLogin);
      } else {
        message = 'Введен неверный пароль';
        formElementError = document.querySelector('.form-password-error');
        login.classList.remove('just-validate-success-field');
        showErrorMessage(message, formElementError, password, btnLogin);
      }
    }
  });
}
