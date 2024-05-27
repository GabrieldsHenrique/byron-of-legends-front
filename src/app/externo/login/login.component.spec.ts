/// <reference types="cypress" />

context("Login Page", ()=> {
  it("should sign in", () => {
    cy.visit("http://localhost:4200/login")
    cy.get('input[name="email"]').type('gabriel.henrique@gmail.com.br')
    cy.get('input[name="password"]').type('1234@Mudar')
  })
})
