import { setChildren } from 'redom';
import { getAccount } from '../api/api';
import createElementContainer from '../generalElements/createElementContainer';
import createAccountHistoryCenter from './createAccountHistoryCenter';
import createAccountHistoryTop from './createAccountHistoryTop';
import skeletonCreateHistoryTop from './skeletonCreateHistoryTop';
import createAccountHistoryBottom from './createAccountHistoryBottom';
import skeletonCreateHistoryCenter from './skeletonCreateHistoryCenter';
import skeletonCreateHistoryBottom from './skeletonCreateHistoryBottom';

export default function createAccountHistory(router) {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('idAccount');
  const container = createElementContainer();
  container.classList.add('history');

  const skeletonTop = skeletonCreateHistoryTop();
  const skeletonCenter = skeletonCreateHistoryCenter();
  const skeletonBottom = skeletonCreateHistoryBottom();

  setChildren(container, [skeletonTop, skeletonCenter, skeletonBottom]);

  getAccount(id, token).then((res) => {
    const data = res.payload;

    const wrapperTop = createAccountHistoryTop(data, router);
    const wrapperCenter = createAccountHistoryCenter(data);
    const wrapperBottom = createAccountHistoryBottom(data);

    setChildren(container, [wrapperTop, wrapperCenter, wrapperBottom]);
  });

  return container;
}
