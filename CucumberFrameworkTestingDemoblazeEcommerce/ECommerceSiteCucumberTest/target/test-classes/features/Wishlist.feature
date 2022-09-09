@WishlistAfterLogin 
Feature: Wishlist Only Works After Login Functionality 

Background: 
	Given the user is on the website page 
	
Scenario: 
	Then User clicks Create an Account button
	Then enter username and pasword and click Register
	Then User clicks Log in button
	Then User enters username and password and click login
	Then Click on sub menu Laptops 
	Then Mouse Click on the first product displayed
	Then User clicks on Add to Cart
	Then User Clicks on Cart
	Then User Clicks on Place Order
	Then Complete the buy order process till payment
	Then Make sure that Product is ordered