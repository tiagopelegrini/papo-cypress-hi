// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {
    cy.request({
      method: 'POST',
      url: 'https://app.hiplatform.com/agent/ticket/1.0/Login',
      headers: {
        Authorization: `Basic ${window.btoa('mdtalan:abc001')}`,
      },
    }).then((res) => {
      Cypress.env('token', res.body.Token)
      if (res.status === 200) {
        window.localStorage.setItem('hi', JSON.stringify({ currentUser: res.body }))
      }
    })
  })