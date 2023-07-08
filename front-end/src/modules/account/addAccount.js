import { setChildren } from 'redom';
import { createAccount } from '../api/api';
import createElementAccaunts from './createElementAccounts';
import accountSortSelectChoices from './accountSortSelectChoices';

export default function addAccount() {
  document.querySelector('.accounts__new').addEventListener('click', async () => {
    const token = localStorage.getItem('token');

    await createAccount(token);

    setChildren(document.querySelector('.main'), createElementAccaunts());
    accountSortSelectChoices();
  });
}
