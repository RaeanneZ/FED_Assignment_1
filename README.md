# FED_Assignment_1

## Redesign MelissaCoppel
As a beginner to Frontend programming, I chose MelissaCoppel.com as a case study of an e-commerce website. Adopting Design thinking process, I redesigned the website and built a high-fidelity wireframe to illustrate my idea. Revamped website aims to increase branding recognition, brand reliability and user intuitiveness with simplified processes. 

This is an iterative web development project to revamp MelissaCoppel.com. This phase will primarily focus on product browsing and checkout process. It is built using HTML, CSS and Vanilla Javascript (JS), featuring testimonial carousel, dynamically populating product listing using JS card and storing of cart items in JS local storage.

## Design Process
After the review of MelissaCoppel.com product browsing and checkout process, my proposed design aims to address and improve the following :
1. Brand reliability : Display testimonial carousel to increase users’ confidence in the products and services offered by MelissaCoppel.
2. Visual hierarchy : Using whitespace, font (size and color) and different layout to present content to users in clear and concise manner.
3. Call-to-Action : Using crimson red to highlight all buttons in the website, to catch users’ attention as well as guiding them through the shopping process.

### User Stories:
* As a first-time visitor to MelissaCoppel.com, shopping for gift, I want to browse through their product listing as well as be able to look at the product details :
  1. Click on BonBons via navigation bar -> BonBons product listing page
  2. BonBons product listing page -> Click on any product image -> Selected Product detail page
 
* As a shopper who is interested in purchasing BonBons from MelissaCoppel.com for the first time, I wonder how their product quality is and what their terms and conditions are.
  1. Scroll down landing page -> Read testimonials on carousel
  2. Footer -> click on Terms and conditions
 
* I was surfing for chocolate when google suggested MelissaCoppel.com and I’m curious to find out if this is a new brand of chocolate in town.
  1. Scroll down landing page -> Read about Melissa Coppel
  2. Click on About Me via navigation bar -> Read more about Melissa Coppel
  3. Footer -> Click on social media links for browsing

### Wireframes 
https://www.figma.com/file/aV300TYyuLNLc9TjxMzVjK/Front-End-Dev-Assignment-1?type=design&node-id=0%3A1&mode=design&t=2dogzspz7TUZjiAa-1

## Features

### Existing features:
The layout of this project is simple and clear, consistent and accessible through all modern browsers on both desktop and mobile devices. Website consist of the following pages:


* Landing Page:
  The homepage includes a navigation bar consisting of links to all pages and a clickable logo that defaults to the Landing page. Users can click on the cart icon to preview items added via sliding top-down     cart. Bottom of the landing page features a testimonial carousel and footer.
  
* About Page:
  About page is additional information displayed using an overlapped layout.
  
* Product Listing Page:
  Products are dynamically populated using JS card design, each include product image, price and clickable icon to add product to cart. Clicking on each card brings the user to the product detail page.
  
* Product Detail Page:
  Selected product detail page is dynamically created using JS, other than displaying more information, users can add or remove items from the cart as well. 

* Cart Page:
  Clicking on the cart icon via the navigation bar will display the cart page, sliding in from top. Product in cart is saved in Local Storage (js) to ensure data consistency.

* Checkout Page: 
 All products added to cart would be displayed, with total cost computed. Users can still manipulate product quantity before committing. Simple checkout forms to collect user information but payment transaction process is excluded in this project.

### Features Left to Implement
Product search and filter function : 
When there are more categories of product or services implemented, search and filter functions are essential to allow users to find what they want and need.

## Manual Testing
1. Product Listing Page 
Story : While browsing the products, customers will be interested to look at product details.
Test  :
* Add item to cart via product card
  * Click on product card ‘+’ icon
  * Click on navigation bar cart icon to check that item has been added to cart
* Click on product card to view product detail page

2.  Product Detail Page
    Story : If a customer is interested in a product, he/she will add it to cart. 
    Test  :
    * Correct display of selected product details including quantity added to cart (if applicable)
    * Ability to add or modify quantity control in form and update cart
      * Click on ‘+’ or ‘-‘ to change order quantity
      * Commit order quantity by clicking on “Add to Cart” button
      * Click on the navigation bar cart icon to check that item has been added or updated with the correct quantity.


3.  Cart Page
    Story : Customers will want to review items added to cart and make changes if needed.
    Test  :
    * Slide top down when clicked on cart icon (navigation bar)
    * Correctly display product and quantity added from Product Listing page and Product Detail page
      * Allow user to add/remove product in cart page 
      * In cart page, click ‘+’ or ‘-‘ to change the quantity.
      * Remove product from cart if product quantity = 0


4.  Checkout Page
    Story :  Customer on checkout will want to do final check on items selected and make 
             changes if necessary, that includes leaving the checkout page to continue shopping 
             hence it is important that the cart page is updated with changes made in checkout 
             page.
    Test  :
    * Correct display product and quantity added to cart
    * Manipulation of product quantity on checkout page is updated to cart page
      * In checkout page, click ‘+’ or ‘-‘ to change quantity
      * Remove product from cart if product quantity = 0
      * Click on navigation bar cart icon to review that cart page reflect the same changes
    * Correctly compute product unit price and total order costing
      * Any change in product quantity will update the unit price and subtotal of the order


5.  Checkout Form
   * Validate user input in checkout forms
      * All fields must be filled in, otherwise input controls would be highlighted in red when Pay Now button is clicked (error prompt)
      * Invalid credit card number (e.g less than 16 digits) would prompt error
      * Invalid credit card expiry date (e.g a date before tomorrow) would prompt error
      * Postal code number (e.g less than 5 digits) would prompt error 

6.  Responsive Display
    Story : Users can use devices of different form factor to place order
    * Resizing of every page to ensure forms layout fit desktop and mobile devices browsers.

7.  Site Navigation
    * Clicked and ensure every link in following is not broken:
      * Navigation bar
      * Footer
      * Shortcuts or buttons Call-To-Action 

## Credits

### Contents and Media
Website design was inspired by multiple sources through internet research while all images and example text were taken from [MelissaCoppel.com](https://melissacoppel.com/) and [MrBucket.com.sg](https://mrbucket.com.sg/).

### Code
Functional code is written by myself following the NP-Frontend course material and exploring various web pages such as : W3Schools, Youtube. Custom CSS is written and adjusted accordingly to project layout requirements.
