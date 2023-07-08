/* eslint-disable no-return-await */
/* eslint-disable guard-for-in */
/* eslint-disable no-console */
/* eslint-disable consistent-return */
import pause from '../generalElements/pause';

const URL = 'http://localhost:3000';
const PAUSE_MS_300 = 300;

export async function autorization(login, password) {
  try {
    const response = await fetch(`${URL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        login,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch (error) {
    console.log(
      'Ошибка загрузки, сервер недоступен, попробуйте повторить попытку позже.',
    );
  }
}

export async function getAccounts(token) {
  try {
    await pause(PAUSE_MS_300);
    return await fetch(`${URL}/accounts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Basic ${token}`,
      },
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

export async function createAccount(token) {
  try {
    let result = await fetch(`${URL}/create-account`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${token}`,
      },
    });
    result = await result.json();
    return result;
  } catch (err) {
    console.log(
      'Ошибка загрузки, сервер недоступен, попробуйте повторить попытку позже.',
    );
  }
}

export async function getCurrencyAccounts(token) {
  try {
    await pause(PAUSE_MS_300);
    let result = await fetch(`${URL}/currencies`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    });

    result = await result.json();
    const resultArray = [];

    for (const key in result.payload) {
      resultArray.push(result.payload[key]);
    }

    return resultArray;
  } catch (err) {
    console.log(
      'Ошибка загрузки, сервер недоступен, попробуйте повторить попытку позже.',
    );
  }
}

export async function getAtmsBank(token) {
  try {
    await pause(PAUSE_MS_300);
    return await fetch(`${URL}/banks`, {
      headers: {
        Authorization: `Basic ${token}`,
      },
    }).then((data) => data.json());
  } catch (error) {
    console.log(error);
    console.log(
      'Ошибка загрузки, сервер недоступен, попробуйте повторить попытку позже.',
    );
  }
}

export async function getChangedCurrency() {
  try {
    return new WebSocket('ws://localhost:3000/currency-feed');
  } catch (error) {
    console.log(error);
  }
}

export async function getKnownCurrwncies() {
  try {
    return await fetch(`${URL}/all-currencies`).then((data) => data.json());
  } catch (error) {
    console.log(error);
  }
}

export async function exchangeCurrency(from, to, amount, token) {
  try {
    await pause(PAUSE_MS_300);
    return await fetch(`${URL}/currency-buy`, {
      method: 'POST',
      body: JSON.stringify({
        from,
        to,
        amount,
      }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Basic ${token}`,
      },
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

export async function getAccount(id, token) {
  try {
    await pause(PAUSE_MS_300);
    return await fetch(`${URL}/account/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Basic ${token}`,
      },
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}

export async function transferFunds(from, to, amount, token) {
  try {
    return await fetch(`${URL}/transfer-funds`, {
      method: 'POST',
      body: JSON.stringify({
        from,
        to,
        amount,
      }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Basic ${token}`,
      },
    }).then((res) => res.json());
  } catch (error) {
    console.log(error);
  }
}
