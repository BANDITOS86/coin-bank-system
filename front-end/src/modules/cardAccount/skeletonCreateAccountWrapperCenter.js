import { el, setChildren } from 'redom';
import skeletonCreateAccountWrapperCenterChart from './skeletonCreateAccountWrapperCenterChart';

export default function skeletonCreateAccountWrapperCenter() {
  const wrapperCenter = el('div', {
    className: 'account__wrapper account__wrapper-center',
  });

  const wrapper = el('div', {
    className: 'account__wrap skeleton-account-center-form',
  });

  const title = el('div', {
    className: 'account__wrap-title skeleton-account skeleton-account-center-title',
  });

  const form = el('div', {
    className: 'account__wrap-form',
  });

  const wrapperLabel = el('div', {
    className: 'account__wrap-form-wrapper',
  });

  const labelNumber = el('label', {
    className: 'account__wrap-form-label',
  },
  [
    el('div', {
      className: 'account__wrap-form-label-number skeleton-account skeleton-account-center-number',
    }),
    el('div', {
      className: 'account__wrap-form-label-input account__wrap-form-label-input_number skeleton-account skeleton-account-center-input',
    }),
  ]);

  const labelSum = el('div', {
    className: 'account__wrap-form-label',
  },
  [
    el('div', {
      className: 'account__wrap-form-label-sum skeleton-account skeleton-account-center-sum',
    }),
    el('div', {
      className: 'account__wrap-form-label-input account__wrap-form-label-input_amount skeleton-account skeleton-account-center-input',
    }),
  ]);

  const button = el('div', {
    className: 'account__wrap-form-button btn-reset skeleton-account skeleton-account-center-button',
  });

  const buttonChart = el('div', {
    className: 'account__wrapper-center-button btn-reset skeleton-account-center-chart-button',
  });

  const titleChart = el('div', {
    className: 'account__wrapper-center-button-title skeleton-account skeleton-account-center-chart-title',
  });

  const wrapperChart = skeletonCreateAccountWrapperCenterChart();

  setChildren(wrapperLabel, labelNumber);
  setChildren(form, [wrapperLabel, labelSum, button]);
  setChildren(wrapper, [title, form]);
  setChildren(buttonChart, titleChart, wrapperChart);
  setChildren(wrapperCenter, [wrapper, buttonChart]);

  return wrapperCenter;
}
