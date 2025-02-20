export class Header {

navBar = {
linkBrand: () => cy.get('a.navbar-brand'),
container: () => cy.get('div.navbar-collapse'),
linkHome: () => cy.get('a').contains('Home'),
linkContact: () => cy.get('a').contains('Contact'),
linkAboutUs: () => cy.get('a').contains('About us'),
linkCart: () => cy.get('#cartur'),
linkLogin: () => cy.get('#login2'),
linkSignUp: () => cy.get('#signin2')
}

modals = { 
    modalsBody: () => cy.get('body.modal-open'),
    modalContact: {
        container: () => cy.get('div#exampleModal'),
        header: {
            headerTitle: () => cy.get('#exampleModalLabel'),
            btnCloseIcon: () => cy.get('#exampleModal button.close').find('span')
        },
        body: {
            inputEmail: () => cy.get('#recipient-email'),
            inputName: () => cy.get('#recipient-name'),
            inputMessage: () => cy.get('#message-text')
        },
        footer: {
            btnCloseFooter: () => cy.get('div#exampleModal').find('div.modal-footer').contains('button', 'Close'),
            btnSendMessage: () => cy.get('div#exampleModal').find('div.modal-footer').contains('button', 'Send message')
        }
    },
    modalAboutUs: {
        container: () => cy.get('#videoModal'),
        header: {
            headerTitle: () => cy.get('#videoModalLabel'),
            btnCloseIcon: () => cy.get('#videoModal button.close').find('span')
        },
        body: {
            container: () => cy.get('#videoModal .modal-body'),
            videoPlayer: {
                container: () => cy.get('#example-video'),
                videoElement: () => cy.get('#example-video_html5_api'),
                videoPoster: () => cy.get('#example-video div.vjs-poster')

            }

        },
        footer: {

        }

    }

}




carousel = {
    container: () => cy.get('div#contcar'),
    carouselElement: () => cy.get('.carousel.slide'),

    indicators: {
    list: () => cy.get('carousel-indicators'),
    firstIndicator: () => cy.get('li[data-slide-to="0"]'),
    secondIndicator: () => cy.get('li[data-slide-to="1"]'),
    thirdIndicator: () => cy.get('li[data-slide-to="2"]'),
    },
    slides: {
    list: () => cy.get('.carousel-inner'),
    fistSlide: () => cy.get('.carousel-item:nth-child(1)'),
    secondSlide: () => cy.get('carousel-item:nth-child(2)'),
    thirdSlide: () => cy.get('.carousel-item:nth-child(3)'),
    },
    images: {
    list: () => cy.get('.carousel-item img'),
    firstImage: () => cy.get('.carousel-item:nth-child(1) img'),
    secondImage: () => cy.get('.carousel-item:nth-child(2) img'),
    thirdImage: () => cy.get('.carousel-item:nth-child(3) img'),
    },
    buttons: {
    btnPrev: () => cy.get('.carousel-control-prev'),
    btnNext: () => cy.get('carousel-control-next')
    }
}


}