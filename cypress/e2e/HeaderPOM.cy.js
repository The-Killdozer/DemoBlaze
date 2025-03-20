import { Header } from '../pages/demoBlaze/header';

describe('Header Test [POM] - Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Contact Link - Close Modal with Icon [Header] - POM Actions', () => {
    const headerInstance = new Header();
    headerInstance.navBar.linkContact().should('be.visible');
    headerInstance.modals.modalContact.header
      .headerTitle()
      .should('not.be.visible');
    headerInstance.actions.navBar.clickLinkContact();
    headerInstance.modals.modalContact.header
      .headerTitle()
      .should('be.visible');

    headerInstance.modals.modalContact
      .container()
      .should('have.class', 'show')
      .and('have.css', 'display', 'block')
      .and('have.css', 'opacity', '1');
    headerInstance.modals.modalContact
      .container()
      .should('not.have.attr', 'aria-hidden', 'true');

    const modalContactLocator = headerInstance.modals.modalContact.container();

    headerInstance.actions.waitForModalTransition(modalContactLocator);

    headerInstance.actions.modalContact.closeModalFromHeader();

    headerInstance.modals.modalContact.header
      .headerTitle()
      .should('not.be.visible');
  }),
    it.only('E2E Send Contact Message - [POM Actions]', () => {
      const headerInstanse = new Header();
      headerInstanse.actions.modalContact.sendContactMessage(
        'hello@gmail.com',
        'Biggus Dickus',
        'This Website is AWESOME!!'
      );
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.eql('Thanks for the message!!');
      });
    });
});
