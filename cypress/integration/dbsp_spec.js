const faker = require('faker');

describe('DBSP', () => {
    const randomEmail = faker.internet.email();
    it('Ácessar Site', () => {

        //Acessando o site
        cy.visit('http://automationpractice.com/');
        cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
        cy.get('.button-medium > span').click();
        cy.get('.cart_navigation > .button > span').should('be.visible');
        cy.get('.cart_navigation > .button > span').click();

        //Criando email 
        cy.get('#email_create').focus().type(randomEmail);  
        cy.get('#SubmitCreate > span').should('be.visible');
        cy.get('#SubmitCreate > span').click(); 

        //Preenchendo formulario de cadastro
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').focus().type('fernando')
        cy.get('#customer_lastname').focus().type('magno')
        cy.get('#passwd').focus().type(faker.internet.password())
        cy.get('#days').select('15')
        cy.get('#months').select('6')
        cy.get('#years').select('1984')
        cy.get('#company').focus().type('dbsp')
        cy.get('#address1').focus().type('stress')
        cy.get('#address2').focus().type('stress')
        cy.get('#city').focus().type('Miami')
        cy.get('#id_state').select('6')
        cy.get('#postcode').focus().type('72201')
        cy.get('#other').focus().type('teste')
        cy.get('#phone').focus().type('5511947213168')
        cy.get('#phone_mobile').focus().type('5511947213168')
        cy.get('#alias').focus().type('teste@teste.com')
        cy.get('#submitAccount > span').should('be.visible');
        cy.get('#submitAccount > span').click();
        
        //tela de carrinho
        cy.get('.cart_navigation > .button > span').should('be.visible');
        cy.get('.cart_navigation > .button > span').click();

        //tela de resumo
        cy.get('#cgv').click();
        cy.get('.cart_navigation > .button > span').should('be.visible');
        cy.get('.cart_navigation > .button > span').click();

        //forma de pagamento
        cy.get('.bankwire').should('be.visible');
        cy.get('.bankwire').click();

        //Finalizando a compra
        cy.get('#cart_navigation > .button > span').should('be.visible');
        cy.get('#cart_navigation > .button > span').click();

        //Validando a compra com sucesso
        cy.get('.cheque-indent > .dark').should('be.visible');
        cy.get('#step_end > span').should('be.visible');
        cy.get('.page-heading').should('be.visible');
     
    });
});