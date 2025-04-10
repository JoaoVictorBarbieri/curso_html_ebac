describe('Testes da Agenda de Contatos', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
  });

  it('Deve adicionar um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type('PEDRINHO');
    cy.get('input[placeholder="E-mail"]').type('pedrinho@email.com');
    cy.get('input[placeholder="Telefone"]').type('123456789');
    cy.get('button').contains('Adicionar').click();

    cy.contains('PEDRINHO').should('exist');
    cy.contains('pedrinho@email.com').should('exist');
    cy.contains('123456789').should('exist');
  });

  it('Deve editar um contato', () => {
    // Aguardar o contato "PEDRINHO" ser adicionado antes de editar
    cy.contains('PEDRINHO').parents('.contato').within(() => {
      cy.get('.edit').click(); // Clica no botão de editar
    });

    // Editando as informações do contato
    cy.get('input[placeholder="Nome"]').clear().type('USUARIO EDITADO');
    cy.get('input[placeholder="E-mail"]').clear().type('editado@email.com');
    cy.get('input[placeholder="Telefone"]').clear().type('123456789');
    cy.get('button').contains('Salvar').click();

    // Verificando se o contato foi editado com sucesso
    cy.contains('USUARIO EDITADO').should('exist');
    cy.contains('editado@email.com').should('exist');
    cy.contains('123456789').should('exist');
  });

  it('Deve remover um contato', () => {
    // Aguardar o contato "USUARIO EDITADO" ser adicionado antes de excluir
    cy.contains('USUARIO EDITADO').parents('.contato').within(() => {
      cy.get('.delete').click(); // Clica no botão de deletar
    });

    // Verificando se o contato foi removido com sucesso
    cy.contains('USUARIO EDITADO').should('not.exist');
  });
});
