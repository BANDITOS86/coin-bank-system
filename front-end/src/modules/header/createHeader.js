/* eslint-disable import/prefer-default-export */
import { el, setChildren } from 'redom';

export function createHeader(login = null) {
  const header = el('header', {
    className: 'header',
  });

  const container = el('div', {
    className: 'container header__container',
  });

  const logoHeader = el('a', 'Coin.', {
    className: 'header__logo',
    href: '#',
  });

  if (login) {
    const menuHeader = el('ul', {
      className: 'header__list list-reset',
    },
    [
      el('li', {
        className: 'header__item',
      }, el('a', 'Банкоматы', {
        className: 'header__item-link',
        href: '/atms',
        data: 'data-navigo',
      })),
      el('li', {
        className: 'header__item',
      }, el('a', 'Счета', {
        className: 'header__item-link',
        href: '/account',
        data: 'data-navigo',
      })),
      el('li', {
        className: 'header__item',
      }, el('a', 'Валюта', {
        className: 'header__item-link',
        href: '/currency',
        data: 'data-navigo',
      })),
      el('li', {
        className: 'header__item',
      }, el('a', 'Выйти', {
        className: 'header__item-link',
        href: '/',
        data: 'data-navigo',
      })),
    ]);

    setChildren(container, [logoHeader, menuHeader]);
  } else {
    setChildren(container, logoHeader);
  }

  setChildren(header, container);

  return header;
}
