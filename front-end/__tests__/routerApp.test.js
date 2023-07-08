import routerApp from '../src/modules/generalElements/routerApp';

describe('routerApp', () => {
  test('should prevent default behavior and call router.navigate', () => {
    // Создаем фиктивные элементы DOM
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', '/path');
    linkElement.classList.add('header__item-link');
    document.body.appendChild(linkElement);

    // Создаем фиктивный объект router
    const mockRouter = {
      navigate: jest.fn(),
    };

    // Вызываем функцию routerApp
    routerApp(mockRouter);

    // Симулируем клик на элементе
    const clickEvent = new Event('click', { bubbles: true });
    linkElement.dispatchEvent(clickEvent);

    expect(mockRouter.navigate).toHaveBeenCalledWith('/path');

    // Удаляем фиктивный элемент из DOM
    document.body.removeChild(linkElement);
  });
});
