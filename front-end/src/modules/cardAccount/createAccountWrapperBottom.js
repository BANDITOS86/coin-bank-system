import { el, setChildren } from 'redom';
import createAccountWrapperBottomTable from './createAccountWrapperBottomTable';
import clickButtonHistory from './clickButtonHistory';

export default function createAccountWrapperBottom(data, router) {
  const button = el('button', {
    className: 'account__history btn-reset',
  });

  const title = el('h2', 'История переводов', {
    className: 'account__history-title',
  });

  const wrapperTable = el('div', {
    className: 'account__history-wrapper',
  });

  const table = createAccountWrapperBottomTable(data);

  setChildren(wrapperTable, table);
  setChildren(button, [title, wrapperTable]);

  clickButtonHistory(router, button);

  return button;
}
