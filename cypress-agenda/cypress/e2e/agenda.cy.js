describe('Agenda de Contatos', () => {
  const url = 'https://agenda-contatos-react.vercel.app/';

  beforeEach(() => {
    cy.visit(url);
  });

  it('deve incluir um novo contato', () => {
    cy.get('input[placeholder="Digite o nome"]').type('João Victor');
    cy.get('input[placeholder="Digite o email"]').type('joao@email.com');
    cy.get('input[placeholder="Digite o telefone"]').type('11999999999');
    cy.contains(/salvar/i).click();
    cy.contains('João Victor').should('exist');
  });

  it('deve alterar um contato existente', () => {
    cy.contains('João Victor').closest('tr').within(() => {
      cy.contains('Editar').click();
    });

    cy.get('input[placeholder="Digite o nome"]').clear().type('João Atualizado');
    cy.contains(/salvar/i).click();
    cy.contains('João Atualizado').should('exist');
  });

  it('deve remover um contato', () => {
    cy.contains('João Atualizado').closest('tr').within(() => {
      cy.contains('Remover').click();
    });

    cy.contains('João Atualizado').should('not.exist');
  });
});
