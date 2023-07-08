import { setChildren } from 'redom';
import createElementContainer from '../generalElements/createElementContainer';
import createAccountWrapperTop from './createAccountWrapperTop';
import { getAccount } from '../api/api';
import createAccountWrapperCenter from './createAccountWrapperCenter';
import accountTransferNumber from './accountTransferNumber';
import validationAccountTransferNumber from './validationAccountTransferNumber';
import accountListNumber from './accountListNumber';
import createAccountWrapperBottom from './createAccountWrapperBottom';
import skeltonCreateAccountWrapperTop from './skeltonCreateAccountWrapperTop';
import skeletonCreateAccountWrapperCenter from './skeletonCreateAccountWrapperCenter';
import skeletonCreateAccountWrapperBottom from './skeletonCreateAccountWrapperBottom';

export default function createCardAccount(router) {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('idAccount');
  const container = createElementContainer();
  container.classList.add('account');

  const skeletonTop = skeltonCreateAccountWrapperTop();
  const skeletonCenter = skeletonCreateAccountWrapperCenter();
  const skeletonBottom = skeletonCreateAccountWrapperBottom();

  setChildren(container, [skeletonTop, skeletonCenter, skeletonBottom]);

  getAccount(id, token).then((res) => {
    const data = res.payload;
    const wrapperTop = createAccountWrapperTop(data, router);
    const wrapperCenter = createAccountWrapperCenter(data, router);
    const wrapperBottom = createAccountWrapperBottom(data, router);

    setChildren(container, [wrapperTop, wrapperCenter, wrapperBottom]);
    accountListNumber();
    validationAccountTransferNumber();
    accountTransferNumber(token, data);
  });

  return container;
}
