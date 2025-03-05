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
        btnCloseIcon: () => cy.get('#exampleModal button.close').find('span'),
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
      fadeShow: () => cy.get('.modal.fade.show'),
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
    modalLogin: {},
    modalSignUp: {},
  };


}
