import { mount, setChildren } from 'redom';
import createElementContainer from '../generalElements/createElementContainer';
import createElementAccountsControl from './createElementAccountsControl';
import { createElementAccountsList } from './createElementAccountsList';
import skeletonElementAccountsList from './skeletonElementAccountsList';

export default function createElementAccaunts(router) {
  const container = createElementContainer();

  const accountsControl = createElementAccountsControl();
  const accountsList = createElementAccountsList(router);
  const skeleton = skeletonElementAccountsList();

  mount(container, accountsControl);
  setChildren(container, [accountsControl, accountsList]);
  mount(container, skeleton);

  return container;
}
