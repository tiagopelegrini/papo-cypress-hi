/// <reference types="Cypress" />

it('Criar ticket', () => {
    cy.login().visit('/agent/ticket/inbox');
    cy.wait(2500)
    cy.get('[data-id="btn_new_ticket_left"]').click();
    cy.get('[data-cy=Name]').type('Ticket Cypress')
    cy.get('[data-id=new_ticket_area]')
      .click()
      .type('Ticket criado com Cypress')
    cy.get('#ScopeId').click().type('{enter}').wait(1500)
    cy.get('#GroupId').click().type('{enter}').wait(1500)
    cy.get('#mui-component-select-StateId').type('{enter}').wait(1500)
    cy.get('#AssignedUserId').click().type('{enter}').wait(1500)
    cy.get('button[type="submit"]').click().wait(1500)

    cy.get('#assignedUser').should('have.value', 'Alan Souza')
    
});

