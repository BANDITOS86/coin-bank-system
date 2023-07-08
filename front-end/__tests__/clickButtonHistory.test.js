import clickButtonHistory from '../src/modules/cardAccount/clickButtonHistory';

describe('Нажатие на кнопку перехода к истории транзакций', () => {
  test('Добавил обработчик клика на кнопку', () => {
    // Создаем фейковый элемент button
    const button = {
      addEventListener: jest.fn(),
    };
    const router = {
      navigate: jest.fn(),
    };

    clickButtonHistory(router, button);

    // Проверяем, что функция addEventListener вызывается с ожидаемыми аргументами
    expect(button.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));

    // Имитируем вызов обработчика клика
    const clickHandler = button.addEventListener.mock.calls[0][1];
    clickHandler();

    // Проверяем, что функция navigate вызывается с ожидаемым аргументом
    expect(router.navigate).toHaveBeenCalledWith('/card-account-history');
  });
});
