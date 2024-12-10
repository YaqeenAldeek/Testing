/*describe("Add Product To Wishlist", ()=>{
    it("validate that the user can add the product to the wishlist and take a screenshot for the full page after adding the product to wishlist", () => {
        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get(".authorization-link").first().click()                               // click on sign in button 
        cy.get(".page-title > .base ").should("contain","Customer Login")    // assertion on log in page 
        cy.get("#email").type("yaqeen.deek.1999@gmail.com")                    // enter email to log in 
        cy.get("#pass").type("12345654321aA@@")                                 // enter password to log in 
        cy.get("#send2").click()                                                // click on log in button 
        cy.get(".product-item-info").eq(1).click()                           // to choose first item in product information list 
        cy.get(".action.primary.tocart").should("be.visible")                   // assertion in product information page 
        cy.get(".action.towishlist").should("be.visible")                       // assertion on add to wishlist button 
        cy.get(".action.towishlist").first().click()                                    // click on add to wish list button 
        cy.wait(8000)                                                                   // wait to load the success message 
        cy.get('.message-success').should("have.attr" , "data-bind" , "attr: {\n            class: 'message-' + message.type + ' ' + message.type + ' message',\n            'data-ui-id': 'message-' + message.type\n        }")      // assertion that the massage 
        cy.screenshot({capture : "fullPage"})       
    })


})*/
/// <reference types="cypress" />
describe('Add to wishlist functionality', () => {
    before(()=>{
        cy.visit("/customer/account/login/");
        cy.get("#email").type("CypressUser@gmail.com")
        cy.get("#pass").type("test@123")
        cy.get("#send2").click();
    })

    it('Add to wishlist', () => {
        cy.get("#search").type("shirt"+"{enter}");
        cy.contains("a","Circe Hooded Ice Fleece").click();
        cy.get(".product-addto-links").find("a").first().click()
        cy.screenshot({capture:"fullPage"})
        cy.get("[role=alert]").should("be.visible").and("contain","Circe Hooded Ice Fleece has been added to your Wish List. Click here to continue shopping")
    });
    
})