import React from "react";
import "./Card.css";

const Card = ({ imageSrc, title, price }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-price">${price}</p>
      </div>
    </div>
  );
};

export default Card;
