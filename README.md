#Components

Components

1.  Menu
    Props:
    products: Array of products
    cart: Array of products in the cart
    handleRemoveFromCart: Function to remove products from the cart

2.  Layout

    This component provides a basic layout for the application.

3.  SingleProduct
    Props:
    src: Image source
    onAddToCart: Function to add the product to the cart
    onRemoveFromCart: Function to remove the product from the cart
    inCart: Boolean indicating whether the product is in the cart
    handleToggleCart: Function to toggle the cart
    id: Product ID

=========================
Functionality

1. Adding to Cart
   Users can add products to the cart by clicking the checkbox associated with each product. This action triggers the handleAddToCart function.

2. Removing from Cart
   Users can remove products from the cart by clicking the "Delete File" button. This action triggers the handleRemoveFromCart function.

3. Reordering Products
   Users can reorder products using the drag and drop functionality provided by the react-beautiful-dnd library. The handleDragEnd function is responsible for updating the order of the products.

# Setup

Setup
To run the project, follow these steps:

1. Clone the project repository.
2. Navigate to the project directory.
3. Run npm install to install the dependencies.
4. Run npm start to start the development server.

======================================

1. Dependencies
   React
   react-beautiful-dnd

======================
Author
Trishan Saha
