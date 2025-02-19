
 describe('Покупаем аватар', function () {
it('Покупка нового аватара для своего тренера', function () {
    cy.visit('https://pokemonbattle.ru/'); // Зашли на сайт
    cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Ввели вверный логин 
    cy.get('#password').type('USER_PASSWORD'); // Ввели верный пароль
    cy.get('.auth__button').click(); // Нажал войти
    cy.get('.header__container > .header__id').click() // Нажамаем на тренера
    cy.get('[href="/shop"]').click() // Нажамаем сменить аватар
    cy.get('.available > button').first().click({ force: true }); // Нажимаем купить аватар
    cy.get('.credit').type('4620869113632996'); // водим номер карты
    cy.get('.k_input_ccv').type('125'); // Вводим CVV карты
    cy.get('.k_input_date').type('1225'); // Вводим срок действия карты
    cy.get('.k_input_name').type('NAME'); // вводим имя владельца действия карты
    cy.get('.pay-btn').click(); // Нажимаем кнопку Оплатить
    cy.get('#cardnumber').type('56456'); // Вводим код подтверждения СМС
    cy.get('.payment__submit-button').click(); // Нажимаем кнопку Отправить
    cy.contains('Покупка прошла успешно').should('be.visible'); // Проверяем наличие и видимость сообщения о успешной покупке
})
 })