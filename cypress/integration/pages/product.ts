export class Product{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'

    addProduct(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible').click()
        cy.get('#remove-sauce-labs-backpack').contains('Remove')
    }

    assertionCart(){
        cy.get('.shopping_cart_link')
        .find('span')
        .should('be.visible')
    }

    CartClick(){
        cy.get('.shopping_cart_link')
        .find('span')
        .click()
    }

    checkoutProduct(){
        cy.contains(this.link_sauceLabsBackpack).should('be.visible')
        cy.get('#checkout').should('be.visible').click()
    }

    checkoutInfoProduct(){
        cy.contains('Checkout: Your Information').should('be.visible')
        cy.get('#first-name').type('Test1').should('have.value', 'Test1')
        .get('#last-name').type('Test1').should('have.value', 'Test1')
        .get('#postal-code').type('Test1').should('have.value', 'Test1')
        .get('#continue').should('be.visible').click()
    }

    checkoutOverviewAssrt(){
        cy.get('.title').contains('Checkout: Overview').should('be.visible')
        cy.get('#finish').click()
        cy.get('#checkout_complete_container > h2').contains('Thank you for your order!').should('be.visible')
    }

}