import { App } from '../../src/App';

describe('App.cy.tsx', () => {
  it('should render and increment the count', () => {
    cy.mount(<App />);
    cy.get('h1').should('contain.text', 'Hello Rspack + React');
    cy.get('button').should('contain.text', 'Count is: 0');
    cy.get('button').click();
    cy.get('button').should('contain.text', 'Count is: 1');
  });
});
