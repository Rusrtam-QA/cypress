describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки "Востановить пароль"

        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton') .click(); // Нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пльзователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он видет пользователю
    })

 it('Верный логин и не верный парольль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки "Востановить пароль"

        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio7'); // Ввели не верный пароль
        cy.get('#loginButton') .click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пльзователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он видет пользователю

    })
  it('Не верный логин и верный парольль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки "Востановить пароль"

        cy.get('#mail').type('gGGG@dolnikov.ru'); // Ввели не верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton') .click(); // Нажал войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пльзователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он видет пользователю

    })
    it('Проверка, что в логине есть @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки "Востановить пароль"

        cy.get('#mail').type('germandolnikov.ru'); // Ввели не верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton') .click(); // Нажал войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пльзователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он видет пользователю

    })
     it('Проверка, регистра', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверка цвета кнопки "Востановить пароль"

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели верный логин, с регистром
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton') .click(); // Нажал войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пльзователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Есть крестик и он видет пользователю

    })
})
