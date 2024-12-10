/// <reference types ="cypress" />

describe('Add watches', () => {

    it('Validate that the user can add watches > 50 to cart.', () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get('.nav-4 > .level-top')
        cy.contains('span','Watches').click({force: true})


        cy.get("#mode-list").last().click()
        cy.get(".price-wrapper span").then((watches)=>{
            for(let i=0 ; i < watches.length ; i++ ){
               cy.wrap(watches[i]).invoke('text').then((watchesPrice)=>{
            if( watchesPrice > 50){
               cy.get(".actions-primary").contains('Add to Cart').click()                  
                }
            })
            }
            })
  
    }) 
})