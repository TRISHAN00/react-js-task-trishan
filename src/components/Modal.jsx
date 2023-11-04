import React from "react";
import SingleProduct from "./SingleProduct";

function Modal({ cart, handleModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        {cart.map((item) => {
          <h2>{item.id}</h2>;
        })}
        <button onClick={handleModal}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
