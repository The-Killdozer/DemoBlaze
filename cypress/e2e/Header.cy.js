import { Header } from '../pages/demoBlaze/header';

describe('Header Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Contact Link - Close Modal with Icon [Header]', () => {
    const headerInstance = new Header();
    headerInstance.modals.modalContact.header
      .headerTitle()
      .should('not.be.visible');
    headerInstance.navBar.linkContact().click();

    headerInstance.modals.modalContact.header
      .headerTitle()
      .should('be.visible');
    headerInstance.modals.modalContact.header
      .btnCloseIcon()
      .should('be.visible');
    headerInstance.modals.modalContact
      .container()
      .should('have.class', 'show')
      .and('have.css', 'display', 'block')
      .and('have.css', 'opacity', '1');
    headerInstance.modals.modalContact
      .container()
      .should('not.have.attr', 'aria-hidden', 'true');

    headerInstance.modals.modalContact.container().then(($modal) => {
      const modal = $modal[0];
      return new Cypress.Promise((resolve) => {
        modal.addEventListener('transitionend', resolve, { once: true });
        cy.log('Transition Ended');
      });
    });

    headerInstance.modals.modalContact.header.btnCloseIcon().click();
  });

  it('Contact Link - Close Modal with Button [Footer]', () => {
    const headerInstance = new Header();
    headerInstance.navBar.linkContact().click();

    headerInstance.modals.modalContact.header
      .headerTitle()
      .should('be.visible');
    headerInstance.modals.modalContact
      .container()
      .should('have.class', 'show')
      .and('have.css', 'display', 'block')
      .and('have.css', 'opacity', '1');

    headerInstance.modals.modalContact.container().then(($modal) => {
      const modal = $modal[0];
      return new Cypress.Promise((resolve) => {
        modal.addEventListener('transitionend', resolve, { once: true });
        cy.log('Transition Ended');
      });
    });

    headerInstance.modals.modalContact.footer.btnCloseFooter().click();
  });

  it('Contact Link - Send Message - Contact Modal', () => {
    const headerInstance = new Header();
    headerInstance.navBar.linkContact().click();

    headerInstance.modals.modalContact.header
      .headerTitle()
      .should('be.visible');
    headerInstance.modals.modalContact
      .container()
      .should('have.class', 'show')
      .and('have.css', 'display', 'block')
      .and('have.css', 'opacity', '1');

    headerInstance.modals.modalContact.container().then(($modal) => {
      const modal = $modal[0];
      return new Cypress.Promise((resolve) => {
        modal.addEventListener('transitionend', resolve, { once: true });
        cy.log('Transition Ended');
      });
    });

    headerInstance.modals.modalContact.body
      .inputEmail()
      .type('joedoe@example.com');
    headerInstance.modals.modalContact.body.inputName().type('Joe Doe');
    headerInstance.modals.modalContact.body
      .inputMessage()
      .type('This is a Great Website for Testing. Thanks!');
    headerInstance.modals.modalContact.footer.btnSendMessage().click();

    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Thanks for the message!!');
    });
  });

  it('About Us Link - Close Video Modal with Icon [Header]', () => {
    const headerInstance = new Header();
    headerInstance.navBar.linkAboutUs().click();
    headerInstance.modals.modalAboutUs.header
      .headerTitle()
      .should('be.visible')
      .and('contain.text', 'About us');
    //cy.wait(500);
    headerInstance.modals.modalAboutUs
      .container()
      .should('have.class', 'show')
      .and('have.css', 'display', 'block')
      .and('have.css', 'opacity', '1');
    headerInstance.modals.modalAboutUs.container().then(($modal) => {
      const modal = $modal[0];
      return new Cypress.Promise((resolve) => {
        modal.addEventListener('transitionend', resolve, { once: true });
        cy.log('Transition Ended');
      });
    });

    headerInstance.modals.modalAboutUs.footer.btnClose().click();
    headerInstance.modals.modalAboutUs.header
      .headerTitle()
      .should('not.be.visible');
  });
});
