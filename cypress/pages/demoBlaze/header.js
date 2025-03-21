export class Header {
  navBar = {
    linkBrand: () => cy.get('a.navbar-brand'),
    container: () => cy.get('div.navbar-collapse'),
    linkHome: () => cy.get('a').contains('Home'),
    linkContact: () => cy.get('a').contains('Contact'),
    linkAboutUs: () => cy.get('a').contains('About us'),
    linkCart: () => cy.get('#cartur'),
    linkLogin: () => cy.get('#login2'),
    linkSignUp: () => cy.get('#signin2'),
  };

  modals = {
    modalsBody: () => cy.get('body.modal-open'),

    modalContact: {
      container: () => cy.get('div#exampleModal'),

      header: {
        headerTitle: () => cy.get('#exampleModalLabel'),
        btnCloseIcon: () => cy.get('#exampleModal button.close'),
      },
      body: {
        inputEmail: () => cy.get('#recipient-email'),
        inputName: () => cy.get('#recipient-name'),
        inputMessage: () => cy.get('#message-text'),
      },
      footer: {
        btnCloseFooter: () => cy.get('#exampleModal button.btn.btn-secondary'),
        btnSendMessage: () => cy.get('#exampleModal button.btn.btn-primary'),
      },
    },

    modalAboutUs: {
      container: () => cy.get('#videoModal'),

      header: {
        headerTitle: () => cy.get('#videoModalLabel'),
        btnCloseIcon: () => cy.get('#videoModal button.close'),
      },
      body: {
        container: () => cy.get('#videoModal .modal-body'),
        videoPlayer: {
          container: () => cy.get('#example-video'),
          videoElement: () => cy.get('#example-video_html5_api'),
          videoPoster: () => cy.get('#example-video div.vjs-poster'),
        },
      },
      footer: {
        btnClose: () => cy.get('#videoModal button.btn.btn-secondary'),
      },
    },

    modalLogin: {
      container: () => cy.get('div#logInModal'),

      header: {
        headerTitle: () => cy.get('#logInModalLabel'),
        btnCloseIcon: () => cy.get('#logInModal button.close'),
      },
      body: {
        inputEmail: () => cy.get('#loginusername'),
        inputPassword: () => cy.get('loginpassword'),
      },
      footer: {
        btnClose: () => cy.get('#logInModal button.btn.btn-secondary'),
        btnLogin: () => cy.get('#logInModal button.btn.btn-primary'),
      },
    },

    modalSignUp: {
      container: () => cy.get('div#signInModal'),

      header: {
        headerTitle: () => cy.get('#signInModalLabel'),
        btnCloseIcon: () => cy.get('#signInModal button.close'),
      },
      body: {
        inputUsername: () => cy.get('#sign-username'),
        inputPassword: () => cy.get('#sign-password'),
      },
      footer: {
        btnClose: () => cy.get('#signInModal button.btn.btn-secondary'),
        btnSignup: () => cy.get('#signInModal button.btn.btn-primary'),
      },
    },
  };

  actions = {
    waitForModalTransition: (element) => {
      element.then(($modal) => {
        const modal = $modal[0];
        return new Cypress.Promise((resolve) => {
          const transitionEnded = () => {
            cy.log('Transition Ended');
            resolve();
          };
          modal.addEventListener('transitionend', transitionEnded, {
            once: true,
          });

          setTimeout(() => {
            cy.log('Fallback: Resolviendo por Timeout');
            resolve();
          }, 1000);
        });
      });
    },

    navBar: {
      clickLinkBrand: () => this.navBar.linkBrand().click(),
      clickLinkHome: () => this.navBar.linkHome().click(),
      clickLinkContact: () => this.navBar.linkContact().click(),
      clickLinkAboutUs: () => this.navBar.linkAboutUs().click(),
      clickLinkCart: () => this.navBar.linkCart().click(),
      clickLinkLogin: () => this.navBar.linkLogin().click(),
      clickLinkSignup: () => this.navBar.linkSignUp().click(),
    },

    modalContact: {
      closeModalFromHeader: () =>
        this.modals.modalContact.header.btnCloseIcon().click(),
      clickOnSendMessage: () =>
        this.modals.modalContact.footer.btnSendMessage().click(),

      fillContactInfo: (email, contactName, message) => {
        cy.wait(1000);
        this.modals.modalContact.body.inputEmail().type(email);
        this.modals.modalContact.body.inputName().type(contactName);
        this.modals.modalContact.body.inputMessage().type(message);
      },

      sendContactMessage: (email, contactName, message) => {
        this.actions.navBar.clickLinkContact();
        this.actions.modalContact.fillContactInfo(email, contactName, message);
        this.actions.modalContact.clickOnSendMessage();
      },
    },
  };
}
