describe("Cadastrar sem o email da corporação", ()=> {
  it("passes", () => {
    cy.visit("/cadastrar")
    cy.get('input[id="nome"]').type('Gabriel')
    cy.get('input[id="email"]').type('gabriel@gmail.com.br')
    cy.get('input[id="senha"]').type('2030@Mudar')
    cy.get('input[id="confirmarSenha"]').type('2030@Mudar')
    cy.get('button[id="cadastrar"]').should('be.disabled')
  })
})

describe("Cadastrar com a senha sem preencher os pre-requisitos", ()=> {
  it("passes", () => {
    cy.visit("/cadastrar")
    cy.get('input[id="nome"]').type('Gabriel')
    cy.get('input[id="email"]').type('gabriel@byronsolutions.com')
    cy.get('input[id="senha"]').type('gabrielhenrique')
    cy.get('input[id="confirmarSenha"]').type('gabrielhenrique')
    cy.get('button[id="cadastrar"]').should('be.disabled')
  })
})

describe("Cadastrar com a senha e confirmar senhas diferentes", ()=> {
  it("passes", () => {
    cy.visit("/cadastrar")
    cy.get('input[id="nome"]').type('Gabriel')
    cy.get('input[id="email"]').type('gabriel@byronsolutions.com')
    cy.get('input[id="senha"]').type('2030@Mudar')
    cy.get('input[id="confirmarSenha"]').type('gabrielhenrique')
    cy.get('button[id="cadastrar"]').should('be.disabled')
  })
})

describe("Cadastrar com Sucesso", ()=> {
  it("passes", () => {
    cy.visit("/cadastrar")
    cy.get('input[id="nome"]').type('Gabriel')
    cy.get('input[id="email"]').type('gabriel@byronsolutions.com')
    cy.get('input[id="senha"]').type('2030@Mudar')
    cy.get('input[id="confirmarSenha"]').type('2030@Mudar')
    cy.get('button[id="cadastrar"]').should('be.enabled').click()
  })
})

describe("Navegação para tela de Cadastro", ()=> {
  it("passes", () => {
    cy.visit("/cadastrar")
    cy.get('span[id="login"]').click()
    cy.url().should('not.include', '/cadastrar')
  })
})
