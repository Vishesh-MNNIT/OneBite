import React, { useState } from "react";
import "./Card.css";

const Card = ({ imageSrc, title, price, shopName, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart({ title, price, quantity });
  };

  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Product Name: {title}</h2>
        <p className="card-price">Price: ${price}</p>
        <p className="shop-name">Shop Name: {shopName}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement}>-</button>
          <span className="quantity">{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
