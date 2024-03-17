import React, { useState } from "react";
import { useDispatchCart } from "./ContextReducer";
import "./Card3.css";

const Card3 = ({ imageSrc, title, price, shopName }) => {
  const [rating, setRating] = useState(1);
  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="card3">
      <img src={imageSrc} alt={title} className="card3-image" />
      <div className="card3-content">
        <h2 className="card3-title">Product Name: {title}</h2>
        <p className="card3-price">Price: ${price}</p>
        <p className="shop-name">Shop Name: {shopName}</p>

        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              className={value <= rating ? "star-filled" : ""}
              onClick={() => handleRating(value)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card3;