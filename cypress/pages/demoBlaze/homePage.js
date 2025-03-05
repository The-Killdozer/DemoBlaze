export class homePage {
    carousel = {
        container: () => cy.get('div#contcar'),
        carouselElement: () => cy.get('.carousel.slide'),
        indicators: {
            list: () => cy.get('.carousel-indicators'),
            firstIndicator: () => cy.get('li[data-slide-to="0"]'),
            secondIndicator: () => cy.get('li[data-slide-to="1"]'),
            thirdIndicator: () => cy.get('li[data-slide-to="2"]'),
        },
        slides: {
            list: () => cy.get('.carousel-inner'),
            fistSlide: () => cy.get('.carousel-item:nth-child(1)'),
            secondSlide: () => cy.get('.carousel-item:nth-child(2)'),
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
            btnNext: () => cy.get('.carousel-control-next'),
        },
    };
}
