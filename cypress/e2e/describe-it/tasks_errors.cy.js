describe('Cart Functionalities', () => {
   // it('Validate that the user can update products from the shopping cart', () => {
      //1/5
      //no need for only because there is one testcase
    //  cy.visit('https://magento.softwaretestingboard.com/');
    //  cy.get('#search').type('shirt{enter}');
 
//cy.get('.minicart-wrapper').click();
  
    //  cy.get('.showcart > .counter').contains('2').should('be.visible');
    //  cy.get('#top-cart-btn-checkout').should('be.visible');
     /// cy.get('.action.viewcart').should(
//'have.attr',
      //  'data-bind',
      //  'attr: {href: shoppingCartUrl}'
     // );
 
   
   //   cy.get('.cart-price > .price').last().should('contain', '272.00');
    //  cy.get('.totals > .amount > .price').should('contain', '272');
   // 
//});
  
    //// the solution should be as the following as your code
    // + update the product size and color
    // + make assertion that the update done successfully
  
       before(() => {
     cy.visit('https://magento.softwaretestingboard.com/'); // visit the website
        cy.get('#search').type('shirt{enter}');
        cy.get('.product-item-info').eq(1).click();
        cy.get('.swatch-option').eq(1).click(); //  choose the size of the shirt
        cy.get('.swatch-option').eq(5).click(); // choose the color of the shirt
        cy.get('#qty').clear().type('2'); // clear the quantity field value and put the value equal 2
        cy.get('#product-addtocart-button').click(); // click on Add to cart button
      });
      it.only('Validate that the user can update products from the shopping cart', () => {
       cy.wait(3000);
        cy.get('.minicart-wrapper').click(); // click on the showcart
        cy.wait(3000);
        cy.get('.action.viewcart').click();
        cy.get('.input-text.qty').clear().type('4'); //   clear the qty text field and enter the value 4
        cy.get('.action.update').click();
  
       });
  });
 
  