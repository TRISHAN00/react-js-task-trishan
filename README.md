<h1>Components</h1>
Menu
Props:
products: Array of products
cart: Array of products in the cart
handleRemoveFromCart: Function to remove products from the cart
Layout
This component provides a basic layout for the application.
SingleProduct
Props:
src: Image source
onAddToCart: Function to add the product to the cart
onRemoveFromCart: Function to remove the product from the cart
inCart: Boolean indicating whether the product is in the cart
handleToggleCart: Function to toggle the cart
id: Product ID
Functionality
Adding to Cart
Users can add products to the cart by clicking the checkbox associated with each product. This action triggers the handleAddToCart function.

Removing from Cart
Users can remove products from the cart by clicking the "Delete File" button. This action triggers the handleRemoveFromCart function.

Reordering Products
Users can reorder products using the drag and drop functionality provided by the react-beautiful-dnd library. The handleDragEnd function is responsible for updating the order of the products.

Setup
To run the project, follow these steps:

Clone the project repository.
Navigate to the project directory.
Run npm install to install the dependencies.
Run npm start to start the development server.
Dependencies
React
react-beautiful-dnd
Author
[Your Name]

License
This project is licensed under the [License Name].

Conclusion
This documentation provides an overview of the project's structure, components, functionalities, setup instructions, and other essential details.
