describe('template spec', () => {
  it('passes', () => {
    const PRODUCT = 'Apple MacBook Pro'

    cy.visit('https://demo.nopcommerce.com/', {failOnStatusCode: false})

    cy.searchForProduct(PRODUCT)

    cy.contains('a', PRODUCT).parent('article').within(() => {
      cy.addToCart()
    })

    cy.addToCart()

    cy.get('.bar-notification').should('exist')
    cy.get('.bar-notification').within(() => {
      cy.contains('The product has been added to your shopping cart')
    })
  })
})
