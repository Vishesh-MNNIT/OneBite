import React, { useState } from "react";
import { useDispatchCart } from "./ContextReducer";
import { FaStar } from "react-icons/fa";
import "./Card3.css";

const Card3 = ({ itemId, imageSrc, title, price, shopName }) => {
  const [rating, setRating] = useState(0);
  const userEmail = localStorage.getItem("userEmail");
  //console.log(userEmail);
  console.log(itemId);
  const clickHandler = async () => {
    try {
      console.log(rating);
      const response = await fetch(
        "http://localhost:3000/api/v1/user/ratings",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: itemId,
            rating: rating,
            email: userEmail,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      //   setItems(data.orderData.order_data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };
  const handleQty = (e) => {
    setRating(e.target.value);
  };

  return (
    <div className="card3">
      <img src={imageSrc} alt={title} className="card3-image" />
      <div className="card3-content">
        <h2 className="card3-title">Product Name: {title}</h2>
        <p className="card3-price">Price: ${price}</p>
        <p className="shop-name">Shop Name: {shopName}</p>

        <div className="star-rating">
          {/* {[...Array(5)].map((star,index)=>{
            const currentRate=index+1;
            return(
               <>
                <label>
                     <input 
                type="radio" name="rate" value={currentRate}
                onClick={()=>setRating(currentRate)}
                 style={{ display: 'none' }}
                />
                <FaStar size={30}
                color={currentRate<=(color || rating)?"yellow":"grey"}
                />
                </label>
                </>
            )
          })} */}
          <select
            className="m-2 h-100 w-20 bg-success text-black rounded"
            style={{ select: "#FF0000" }}
            onChange={handleQty}
          >
            {Array.from(Array(5), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <button
            className={`btn btn-success justify-center ms-2 `}
            onClick={clickHandler}
          >
            Submit Rating
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card3;
