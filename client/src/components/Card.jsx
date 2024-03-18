import React, { useState } from "react";
import { useDispatchCart } from "./ContextReducer";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "./Card.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ itemId, imageSrc, title, price, shopName, rating, count }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatchCart();

  const handleQty = (e) => {
    setQty(e.target.value);
  };

  const showSuccessToast = () => {
    toast.success("🛒Added to Cart"); // Toast message for successful login
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
    showSuccessToast();
  };

  const renderStarRating = () => {
    return Array.from({ length: 5 }, (elem, index) => {
      let number = index + 0.5;
      return (
        <span key={index}>
          {rating >= index + 1 ? (
            <FaStar />
          ) : rating >= number ? (
            <FaStarHalfAlt />
          ) : (
            <AiOutlineStar />
          )}
        </span>
      );
    });
  };

  return (
    <>
      <div className="card">
        <img src={imageSrc} alt={title} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">Product: {title}</h2>
          <p className="card-price">Price: ${price}</p>
          <p className="shop-name">Shop Name: {shopName}</p>
          <div className="star-rating">
            {renderStarRating()}
            <span>({rating})</span>
          </div>
          <p>No. Of Reviews: {count}</p>
          <select className="quantity-select" onChange={handleQty} value={qty}>
            {Array.from(Array(6), (e, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={150}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </>
  );
};

export default Card;
