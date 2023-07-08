/* eslint-disable no-console */
import { setChildren } from 'redom';
import { getAtmsBank } from '../api/api';
import createMapAtms from './createMapAtms';
import createElementContainer from '../generalElements/createElementContainer';
import createSkeletonMapAtms from './createSkeletonMapAtms';

export default function createMap() {
  const token = localStorage.getItem('token');
  const container = createElementContainer();
  const skeleton = createSkeletonMapAtms();

  setChildren(container, skeleton);

  const atms = getAtmsBank(token);
  atms.then((data) => {
    const arrayAtms = data.payload;
    const mapAtms = createMapAtms(arrayAtms);

    setChildren(container, mapAtms);
  }).catch((error) => {
    console.error('Ошибка получения данных:', error);
    container.textContent = 'Ошибка загрузки данных.';
  });

  return container;
}
