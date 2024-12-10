Feature : Check add watches to cart functionality

Scenario: Validate that user can add watches which price > 50 to cart 
  
  Given  The user visit the magento website 
  When    The user click on Gear menu 
  When    The user click on watches option 
  When    The user click on list option 
  When    The user add all watches with price > 55  to cart
  Then    The watches which price > 55 will added successfuly to the cart 

