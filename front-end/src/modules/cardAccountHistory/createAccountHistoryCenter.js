import { el, setChildren } from 'redom';
import createAccountHistoryCenterDynamic from './createAccountHistoryCenterDynamic';
import createAccountHistoryCenterRatio from './createAccountHistoryCenterRatio';

export default function createAccountHistoryCenter(data) {
  const wrapper = el('div', {
    className: 'history__center',
  });

  const dynamicBalance = createAccountHistoryCenterDynamic(data);
  const ratioBalance = createAccountHistoryCenterRatio(data);

  setChildren(wrapper, [dynamicBalance, ratioBalance]);

  return wrapper;
}
