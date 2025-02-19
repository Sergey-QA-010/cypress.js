import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"


describe('Проверка авторизации', function () {

   beforeEach('Начало теста', function () {
      cy.visit('/'); // Зашли на сайт
      cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки восст. пароль
        });

   afterEach('Конец теста', function () {
      cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю что крестик виден пользователю
   })
    


    it('Верный пароль и верный логин', function () {
         cy.get('#mail').type(data.login); // Ввели верный логин
         cy.get('#pass').type(data.password); // Ввели верный пароль
         cy.get('#loginButton').click(); // Нажал войти
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Проверяю что текст виден пользователю
    })
    
    it('Восстановление пароля', function () {
        cy.get('#forgotEmailButton').click(); // Нажали забыли пароль
        cy.get('#mailForgot').type(data.login); // Ввели верный логин
        cy.get('#restoreEmailButton').click(); // Нажали отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю что после отправки кода вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю что текст виден пользователю
        })
     
        it('Верный логин и НЕверный пароль', function () {
        cy.get('#mail').type(data.login); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio2'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю что текст виден пользователю
   
      })
     it('НЕверный логин и верный пароль', function () {
        cy.get('#mail').type('kostay@dolnikov.ru'); // Ввели НЕверный логин
        cy.get('#pass').type(data.password); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю что текст виден пользователю
       
        
        
     })
     it('Ввести логин без @', function () {
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type(data.password); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверить, что получаем текст с ошибкой
        cy.get('#messageHeader').should('be.visible'); // Проверяю что текст виден пользователю
       
        
     })
     it('Проверка к строчным буквам в логине', function () {
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин по строчным буквам
        cy.get('#pass').type(data.password); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Проверяю что текст виден пользователю
        
  
        })
       
   });
   

            
        
        
    
