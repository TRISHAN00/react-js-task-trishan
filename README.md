 <h1>Project Documentation</h1>

    <h2>Components</h2>

    <h3>Menu</h3>
    <h4>Props:</h4>
    <ul>
        <li>products: Array of products</li>
        <li>cart: Array of products in the cart</li>
        <li>handleRemoveFromCart: Function to remove products from the cart</li>
    </ul>

    <h3>Layout</h3>
    <p>This component provides a basic layout for the application.</p>

    <h3>SingleProduct</h3>
    <h4>Props:</h4>
    <ul>
        <li>src: Image source</li>
        <li>onAddToCart: Function to add the product to the cart</li>
        <li>onRemoveFromCart: Function to remove the product from the cart</li>
        <li>inCart: Boolean indicating whether the product is in the cart</li>
        <li>handleToggleCart: Function to toggle the cart</li>
        <li>id: Product ID</li>
    </ul>

    <h2>Functionality</h2>

    <h3>Adding to Cart</h3>
    <p>Users can add products to the cart by clicking the checkbox associated with each product. This action triggers the handleAddToCart function.</p>

    <h3>Removing from Cart</h3>
    <p>Users can remove products from the cart by clicking the "Delete File" button. This action triggers the handleRemoveFromCart function.</p>

    <h3>Reordering Products</h3>
    <p>Users can reorder products using the drag and drop functionality provided by the react-beautiful-dnd library. The handleDragEnd function is responsible for updating the order of the products.</p>

    <h2>Setup</h2>
    <p>To run the project, follow these steps:</p>
    <ol>
        <li>Clone the project repository.</li>
        <li>Navigate to the project directory.</li>
        <li>Run npm install to install the dependencies.</li>
        <li>Run npm start to start the development server.</li>
    </ol>

    <h2>Dependencies</h2>
    <ul>
        <li>React</li>
        <li>react-beautiful-dnd</li>
    </ul>

    <h2>Author</h2>
    <p>[Your Name]</p>

    <h2>License</h2>
    <p>This project is licensed under the [License Name].</p>

    <h2>Conclusion</h2>
    <p>This documentation provides an overview of the project's structure, components, functionalities, setup instructions, and other essential details.</p>
