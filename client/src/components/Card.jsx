import React, { useState, useEffect, useReducer } from "react";
import "./Card.css";
import { useDispatchCart, useCart } from "./ContextReducer";

const Card = ({ itemId, imageSrc, title, price, shopName }) => {
  const [qty, setQty] = useState(1);
  let data = useCart();
  const dispatch = useDispatchCart();
  const handleQty = (e) => {
    setQty(e.target.value);
  };
  const handleAddToCart = async () => {
    await dispatch({
      type: "ADD",
      id: itemId,
      name: title,
      price: price,
      qty: qty,
      img: imageSrc,
    });
  };

  return (
    <div className="card">
      <div className="card-image-container">
        <img src={imageSrc} alt={title} className="card-image" />
        <div className="card-overlay">
          {/* <h2 className="card-title">Product: {title}</h2> */}
          <p className="card-price">Price: ${price}</p>
          <p className="shop-name">Shop Name: {shopName}</p>
          <div className="card-controls">
            <select className="quantity" onChange={handleQty}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
