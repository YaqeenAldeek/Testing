import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";

Given("The user visit the magento website",()=>{
    cy.visit("https://magento.softwaretestingboard.com/")
})

When("The user click on Gear menu",()=>{
    cy.get(".level0 .nav-4").click()
})

When("The user click on watches option",()=>{
    cy.get("#ui-id-27").last().click()
})

When("The user click on list option",()=>{
    cy.get("#mode-list").last().click()
})

When("The user add all watches with price > 55  to cart",()=>{
    
cy.get(".price-wrapper span").then((watches)=>{
    for(let i=0 ; i < watches.length ; i++ ){
       cy.wrap(watches[i]).invoke('text').then((watchesPrice)=>{
    
         cy.log(watchesPrice)
    })
    }
    })
    })
Then("The watches which price > 55 will added successfuly to the cart",()=>{
   
})