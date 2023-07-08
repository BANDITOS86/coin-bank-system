/* eslint-disable no-undef */

/// <reference types="cypress" />

describe('Приложение Coin', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
    cy.get('.form__login').type('developer');
    cy.get('.form__password').type('skillbox');
    cy.contains('Войти').click();
  });

  it('Авторизуемся в приложении, проходимся по всем страницам и разлогиниваемся', () => {
    cy.wait(2000);
    cy.contains('Банкоматы').click();
    cy.url().should('include', '/atms');

    cy.wait(2000);
    cy.contains('Счета').click();
    cy.url().should('include', '/account');

    cy.wait(2000);
    cy.get('.accounts__item').first().within(() => {
      cy.contains('Открыть').click({ force: true });
    });

    cy.wait(2000);
    cy.contains('Динамика баланса').click();
    cy.url().should('include', '/card-account-history');

    cy.wait(2000);
    cy.contains('Вернуться назад').click();
    cy.url().should('include', '/card-account');

    cy.wait(2000);
    cy.contains('Вернуться назад').click();
    cy.url().should('include', '/account');

    cy.wait(2000);
    cy.contains('Валюта').click();
    cy.url().should('include', '/currency');

    cy.wait(2000);
    cy.contains('Выйти').click();
    cy.url().should('include', '/');
  });
});
