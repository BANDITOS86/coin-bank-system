import showErrorMessage from '../src/modules/generalElements/showErrorMessage';

describe('Показать сообщение об ошибке', () => {
  jest.useFakeTimers(); // Используем фейковые таймеры

  test('Должно отобразиться сообщение об ошибке, добавлен класс ошибки и отключена кнопка', () => {
    // Создаем фиктивные элементы DOM
    const element = document.createElement('div');
    const input = document.createElement('input');
    const btn = document.createElement('button');

    // Вызываем функцию showErrorMessage
    showErrorMessage('Error message', element, input, btn);

    // Проверяем изменения, сделанные функцией
    expect(element.style.display).toBe('block');
    expect(element.textContent).toBe('Error message');
    expect(input.classList.contains('error-message')).toBe(true);
    expect(btn.disabled).toBe(false); // Вместо true ожидаем false

    // Перематываем таймеры на 3000 миллисекунд
    jest.advanceTimersByTime(3000);

    // Проверяем, что функция сбросила изменения
    expect(element.style.display).toBe('none');
    expect(element.textContent).toBe('');
    expect(input.classList.contains('error-message')).toBe(false);
    expect(btn.disabled).toBe(true);
  });
});
