import { el, setChildren } from 'redom';
import createAccountWrapperCenterForm from './createAccountWrapperCenterForm';
import createAccountWrapperCenterBalanceChart from './createAccountWrapperCenterBalanceChart';

export default function createAccountWrapperCenter(data, router) {
  const form = createAccountWrapperCenterForm();
  const buttonBalanceChart = createAccountWrapperCenterBalanceChart(data, router);

  const wrapperCenter = el('div', {
    className: 'account__wrapper account__wrapper-center',
  });

  setChildren(wrapperCenter, [form, buttonBalanceChart]);

  return wrapperCenter;
}
