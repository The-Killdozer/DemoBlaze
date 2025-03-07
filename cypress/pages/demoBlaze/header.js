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
        btnCloseFooter: () =>
          cy
            .get('div#exampleModal')
            .find('div.modal-footer')
            .contains('button', 'Close'),
        btnSendMessage: () =>
          cy
            .get('div#exampleModal')
            .find('div.modal-footer')
            .contains('button', 'Send message'),
      },
    },

    modalAboutUs: {
      container: () => cy.get('#videoModal'),

      header: {
        headerTitle: () => cy.get('#videoModalLabel'),
        btnCloseIcon: () => cy.get('#videoModal button.close').find('span'),
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
}
