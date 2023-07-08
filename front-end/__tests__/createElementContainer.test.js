import createElementContainer from '../src/modules/generalElements/createElementContainer';

describe('Создание контйнера', () => {
  test('Должен вернуться "div" с классом "container"', () => {
    const container = createElementContainer();

    expect(container.tagName).toBe('DIV');
    expect(container.className).toBe('container');
  });
});
