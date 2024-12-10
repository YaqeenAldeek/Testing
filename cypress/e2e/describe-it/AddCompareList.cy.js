/*describe("Add Product To Compare", ()=>{
    it("validate that the user can add the product to compare and record a video for this test case", () => {

        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get(".authorization-link").first().click()                               // click on sign in button 
        cy.get(".page-title > .base ").should("contain","Customer Login")    // assertion on log in page 
        cy.get("#email").type("yaqeen.deek.1999@gmail.com")                    // enter email to log in 
        cy.get("#pass").type("12345654321aA@@")                                 // enter password to log in 
        cy.get("#send2").click()                                                // click on log in button 
        cy.get(".product-item-info").eq(1).click()                           // to choose first item in product information list 
        cy.get(".action.primary.tocart").should("be.visible")                   // assertion in product information page 
        cy.get(".action.tocompare").should("be.visible")                       // assertion on add to add to compare button 
        cy.get('.product-addto-links > .tocompare > span').click()                                    // click on add to add to compare  button 
        cy.wait(8000)                                                                   // wait to load the success message 
        cy.get(".message-success").should( "have.attr" , "data-bind" , "attr: {\n            class: 'message-' + message.type + ' ' + message.type + ' message',\n            'data-ui-id': 'message-' + message.type\n        }")      // assertion that the massage 
       
    })


})*/

/// <reference types="cypress" />
describe('Add to compare functionality', () => {
    it('Add to compare', () => {
        cy.visit("/")
        cy.get("#search").type("shirt"+"{enter}");
        cy.contains("a","Circe Hooded Ice Fleece").click();
        cy.get(".product-addto-links").find("a").last().click()
        cy.wait(3000)
        cy.get("[role=alert]").should("be.visible").and("contain","You added product Circe Hooded Ice Fleece to the comparison list.")
        cy.log("Hello world")
        console("hellllllo")
    });
    
})