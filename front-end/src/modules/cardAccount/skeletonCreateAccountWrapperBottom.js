import { el, setChildren } from 'redom';
import skeletonCreateAccountWrapperBottomTable from './skeletonCreateAccountWrapperBottomTable';

export default function skeletonCreateAccountWrapperBottom() {
  const button = el('div', {
    className: 'account__history btn-reset skeleton-account-bottom-button',
  });

  const title = el('div', {
    className: 'account__history-title skeleton-account skeleton-account-bottom-title',
  });

  const wrapperTable = el('div', {
    className: 'account__history-wrapper',
  });

  const table = skeletonCreateAccountWrapperBottomTable();

  setChildren(wrapperTable, table);
  setChildren(button, [title, wrapperTable]);

  return button;
}
