import createElementAccountsControl from '../src/modules/account/createElementAccountsControl'; // Замените './your-file' на путь к вашему файлу

describe('createElementAccountsControl', () => {
  test('should create the correct account control element', () => {
    const accountList = createElementAccountsControl();

    // Проверяем, что создан корректный элемент accountList
    expect(accountList.tagName).toBe('DIV');
    expect(accountList.classList).toContain('accounts');

    // Проверяем, что accountList содержит два дочерних элемента
    expect(accountList.children.length).toBe(2);

    // Проверяем, что первый дочерний элемент accountList это accountSort
    const accountSort = accountList.children[0];
    expect(accountSort.tagName).toBe('DIV');
    expect(accountSort.classList).toContain('accounts__sort');

    // Проверяем, что accountSort содержит корректные дочерние элементы
    expect(accountSort.children.length).toBe(2);
    expect(accountSort.children[0].tagName).toBe('P');
    expect(accountSort.children[0].classList).toContain('accounts__sort-title');
    expect(accountSort.children[0].textContent).toBe('Ваши счета');
    expect(accountSort.children[1].tagName).toBe('SELECT');
    expect(accountSort.children[1].classList).toContain('accounts__sort-select');
    expect(accountSort.children[1].options.length).toBe(4);

    // Проверяем, что второй дочерний элемент accountList это accountsNew
    const accountsNew = accountList.children[1];
    expect(accountsNew.tagName).toBe('BUTTON');
    expect(accountsNew.classList).toContain('accounts__new');
    expect(accountsNew.classList).toContain('btn-reset');
    expect(accountsNew.textContent).toBe('Создать новый счёт');
  });
});
