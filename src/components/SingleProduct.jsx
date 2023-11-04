import React from "react";

function SingleProduct({ src, onAddToCart, inCart, id, handleToggleCart }) {
  const handleCheckboxChange = () => {
    if (inCart) {
      handleToggleCart(id);
    } else {
      onAddToCart();
    }
  };

  return (
    <div className="single-product">
      <img src={src} alt="" />
      <input
        type="checkbox"
        defaultChecked={inCart}
        onChange={handleCheckboxChange}
        style={{ opacity: inCart ? 1 : 0 }}
      />
    </div>
  );
}

export default SingleProduct;
