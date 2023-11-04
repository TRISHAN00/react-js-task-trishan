import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Layout from "./components/Layout";
import SingleProduct from "./components/SingleProduct";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialProducts = [
  {
    id: 1,
    src: "/public/images/dynamic/image-1.webp",
  },
  {
    id: 2,
    src: "/public/images/dynamic/image-2.webp",
  },
  {
    id: 3,
    src: "/public/images/dynamic/image-3.webp",
  },
  {
    id: 4,
    src: "/public/images/dynamic/image-4.webp",
  },
  {
    id: 5,
    src: "/public/images/dynamic/image-5.webp",
  },
  {
    id: 6,
    src: "/public/images/dynamic/image-6.webp",
  },
  {
    id: 7,
    src: "/public/images/dynamic/image-7.webp",
  },
  {
    id: 8,
    src: "/public/images/dynamic/image-8.webp",
  },
  {
    id: 9,
    src: "/public/images/dynamic/image-9.webp",
  },
  {
    id: 10,
    src: "/public/images/dynamic/image-10.jpeg",
  },
  {
    id: 11,
    src: "/public/images/dynamic/image-11.jpeg",
  },
];

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productId) => {
    const selectedProduct = products.find(
      (product) => product.id === productId
    );

    if (selectedProduct && !cart.some((item) => item.id === productId)) {
      selectedProduct.inCart = true;
      setCart((prevCart) => [...prevCart, selectedProduct]);
    }
  };

  const handleRemoveFromCart = () => {
    const filteredArray = products.filter(
      (item1) => !cart.some((item2) => item2.id === item1.id)
    );
    setProducts(filteredArray);
    setCart([]);
  };

  const handleToggleCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(products);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const updatedProducts = items.map((item, index) => {
      return {
        ...item,
        id: index + 1,
      };
    });

    setProducts(updatedProducts);
  };

  return (
    <div>
      <Menu
        products={products}
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
      />

      <Layout>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="products">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="products"
              >
                {products.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="item"
                        style={{ ...provided.draggableProps.style }}
                      >
                        <SingleProduct
                          src={item.src}
                          onAddToCart={() => handleAddToCart(item.id)}
                          onRemoveFromCart={() => handleRemoveFromCart(item.id)}
                          inCart={cart.some(
                            (cartItem) => cartItem.id === item.id
                          )}
                          handleToggleCart={handleToggleCart}
                          id={item.id}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Layout>
    </div>
  );
}
export default App;
