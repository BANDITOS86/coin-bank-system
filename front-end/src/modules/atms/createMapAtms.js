/* eslint-disable import/no-extraneous-dependencies */
import { el, setChildren } from 'redom';
import ymaps from 'ymaps';

export default function createMapAtms(arrayAtms) {
  const wrapper = el('div', {
    className: 'atms__wrapper',
  });

  const title = el('h2', 'Карта банкоматов', {
    className: 'atms__title',
  });

  const map = el('div', {
    className: 'map',
    id: 'map',
  });

  ymaps.load('https://api-maps.yandex.ru/2.1/?apikey=fe250f75-7719-412f-a245-802cd13d0166&lang=ru_RU').then((maps) => {
    const myMap = new maps.Map(map, {
      center: [55.76, 37.64],
      zoom: 11,
      controls: ['searchControl'],
    });

    arrayAtms.forEach((item) => {
      const placemark = new maps.Placemark([item.lat, item.lon]);
      myMap.geoObjects.add(placemark);
    });
  });

  setChildren(wrapper, [title, map]);

  return wrapper;
}
