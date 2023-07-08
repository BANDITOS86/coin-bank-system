import './index.html';
import './scss/main.scss';

import { setChildren } from 'redom';
import Navigo from 'navigo';
import ResizeObserver from 'resize-observer-polyfill';
import { createHeader } from './modules/header/createHeader';
import menuClassTogler from './modules/header/menuClassTogler';
import createElementMain from './modules/generalElements/createElementMain';
import createLoginForm from './modules/login/createLoginForm';
import validationLoginFrom from './modules/login/validationLoginForm';
import { getChangedCurrency } from './modules/api/api';
import createElementContainer from './modules/generalElements/createElementContainer';
import createCurrency from './modules/currency/createCurrency';
import choicesSelect from './modules/currency/choices';
import exchangeCurrencies from './modules/currency/exchangeCurrencies';
import validationCurrencyExchange from './modules/currency/validationCurrencyExchange';
import createMap from './modules/atms/createMap';
import createElementAccaunts from './modules/account/createElementAccounts';
import addAccount from './modules/account/addAccount';
import userAuthorization from './modules/login/userAuthorization';
import routerApp from './modules/generalElements/routerApp';
import createCardAccount from './modules/cardAccount/createCardAccount';
import accountSortSelectChoices from './modules/account/accountSortSelectChoices';
import createAccountHistory from './modules/cardAccountHistory/createAccountHistory';

const main = createElementMain();
const container = createElementContainer();
setChildren(document.body, [createHeader(true), main]);

const router = new Navigo('/');

router.on('/', () => {
  localStorage.removeItem('token');
  setChildren(document.body, [createHeader(), main]);
  setChildren(main, container);
  setChildren(container, createLoginForm());
  validationLoginFrom();
  userAuthorization(router);
});

router.on('/atms', () => {
  menuClassTogler('/atms');
  setChildren(main, createMap());
});

router.on('/currency', () => {
  window.ResizeObserver = ResizeObserver;
  menuClassTogler('/currency');
  setChildren(main, createCurrency());
  getChangedCurrency();
  exchangeCurrencies();
  choicesSelect();
  validationCurrencyExchange();
});

router.on('/account', () => {
  setChildren(document.body, [createHeader(true), main]);
  menuClassTogler('/account');
  routerApp(router);
  setChildren(main, createElementAccaunts(router));
  addAccount();
  accountSortSelectChoices();
});

router.on('/card-account', () => {
  setChildren(main, createCardAccount(router));
  menuClassTogler('');
});

router.on('/card-account-history', () => {
  setChildren(main, createAccountHistory(router));
  menuClassTogler('');
});

router.resolve();
