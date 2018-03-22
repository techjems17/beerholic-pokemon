describe('Poke favorite beers', function () {
    it('should correctly give favorite beer and location', function () {
        cy.visit('https://beerholic-pokemon.herokuapp.com/');

        cy.get('header > nav > .navbar-brand').should('have.text', 'Beerholic Pokemon');

        cy.get('ol > li').should('have.length', 3);
        
        cy.get('.btn').click();
        cy.wait(5000);
        cy.url().should('have', '/poke');

        cy.get('select > option').should('have.length', 21);

        cy.get('select').select('charizard');
        cy.get('h2').should('have.text', "Safe Word");

        cy.get('select').select('bulbasaur');
        cy.get('h3').should('have.text', "Visit: Bull & Bush Brewpub");

        cy.get('header > nav > button').click();
        cy.get('ul').find('li').eq(1).should('contain', 'Contact').click();
        cy.url().should('have', '/contact');
    });
});