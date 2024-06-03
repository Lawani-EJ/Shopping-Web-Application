# E-Shop Application README
## Introduction
The E-Shop application is a simple web-based shopping cart system that allows users to browse products, add them to a cart, and manage the items within the cart. This application fetches product data from an external API and displays it dynamically on the web page. Users can add items to their cart, adjust quantities, and view the total cost of their selected items.

### Contents
- Introduction
- Features
- Technologies Used
- Installation
- Usage
- Code Explanation
- Future Enhancements

## Features
1. Product Listing: Fetch and display a list of products from an external API.
2. Add to Cart: Users can add products to their cart.
3. Cart Management: Users can increase, decrease, or remove items from the cart.
4. Cart Summary: Displays the total number of items and the total price.
5. Responsive Design: The layout adjusts for different screen sizes.

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Fetch API

## Installation
- Please Feel Free to Clone the Repo 👇🏿

`https://github.com/Lawani-EJ/Shopping-Web-Application`

- Next navigate to the project directory

`cd - Shopping-Web-Application`

- Lastly open the `index.html` File.

## Usage
1. Open the webpage
2. Browse through the list of products
3. Click "Add To Cart" to add a product to your shopping cart.
4. Click the cart button to view your cart.
5. Use the + and - buttons to adjust the quantity of each item.
6. Click the "Remove" to remove an item from the cart.
7. View the total items and total price at the bottom of the cart drawer.

## Code Explanation 
### HTML (`index.html`)
- Header: The header contains the site title and a button to open the cart.
- Main-Section: Displays the list of products.
- Cart-Drawer: A hidden drawer that shows the cart contents when the cart button is clicked.
- Overlay: A semi-transparent overlay that appears when the cart drawer is open.

### CSS (`style.css`)
- Styling: Basic styling for the layout, including the header, buttons, product-list and cart-drawer.
- Responsive Design: FlexBox is used to ensure the layout is responsive.

### JavaScript (`script.js`)
- DOMContentLoaded Event: Ensures the script runs after the DOM is fully loaded.
- Fetching Products:  