import React from "react";
import "../App";



function Menu({ cart, handleRemoveFromCart, products }) {
  return (
    <div className="menu-area">
      <div className="container">
        <div className="menu-area-wrap">
          <div className="menu-area-wrap-left">
            {cart.length > 0 ? (
              <div className="menu-area-wrap-left-selected">
                <input type="checkbox" checked />
                <p>{cart.length} File Selected</p>
              </div>
            ) : (
              <h3>Gallery</h3>
            )}
          </div>
          {cart.length > 0 && (
            <div className="menu-area-wrap-right">
              <button onClick={() => handleRemoveFromCart(...cart)}>
                Delete File
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Menu;
