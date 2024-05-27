describe("Formulario Login", ()=> {
  it("Login sem email da organização", () => {
    cy.visit("/login")
    cy.get('input[id="username"]').type('gabriel.henrique@gmail.com.br')
    cy.get('small[id="usernameinvalido"]').should('be.visible')
    cy.get('input[id="password"]').type('1234@Mudar')
    cy.get('button[id="login"]').should('be.disabled')
  })

  it("Login com campos Vazios", () => {
    cy.visit("/login")
    cy.get('input[id="username"]').should('have.value', '')
    cy.get('input[id="password"]').should('have.value', '')
    cy.get('button[id="login"]').should('be.disabled')
  })

  it("Login Sucesso", () => {
    cy.visit("/login")
    cy.get('input[id="username"]').type('gabriel.henrique@byronsolutions.com')
    cy.get('input[id="password"]').type('1234@Mudar')
    cy.get('button[id="login"]').should('be.enabled').click()
  })


})


describe("Navegação ", ()=> {
  it("Tela de Cadastro", () => {
    cy.visit("/login")
    cy.get('button[id="cadastrar"]').should('be.enabled').click()
    cy.url().should('include', '/cadastrar')
    cy.url().should('not.include', '/login')
  })

  it("Tela de Recuperar Senha", () => {
    cy.visit("/login")
    cy.get('span[id="recuperar-senha"]').click()
    cy.url().should('include', '/recuperar-senha')
    cy.url().should('not.include', '/login')
  })

})
