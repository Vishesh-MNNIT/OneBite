import React, { useState ,useEffect,useReducer} from "react";
import "./Card.css";
// import { useNavigate } from 'react-router-dom'
import { useDispatchCart,useCart} from './ContextReducer'

const Card = ({ itemId,imageSrc, title, price, shopName }) => {
  // const [quantity, setQuantity] = useState(1)
  const [qty, setQty] = useState(1)
  let data = useCart();
  //const priceRef = useRef();
  // const [btnEnable, setBtnEnable] = useState(false);
  // let totval = 0
  // let price = Object.values(options).map((value) => {
  //   return parseInt(value, 10);
  // });
  // let options = props.options;
  // let priceOptions = Object.keys(options);
  //let foodItem = props.item;
  const dispatch = useDispatchCart();
  // const handleIncrement = () => {
  //   setQuantity(quantity + 1);
  // };

  // const handleDecrement = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };
  const handleQty = (e) => {
    setQty(e.target.value);
  }
  const handleAddToCart = async () => {
    // let food = []
    // for (const item of data) {
    //   if (item.id === itemId) {
    //     food = item;

    //     break;
    //   }
    // }
    // console.log(food)
    await dispatch({ type: "ADD", id: itemId, name: title, price: price, qty: qty,img: imageSrc })
    // setBtnEnable(true)

  }

  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">Product Name: {title}</h2>
        <p className="card-price">Price: ${price}</p>
        <p className="shop-name">Shop Name: {shopName}</p>
        {/* <p className="shop-name">Image: {shopName}</p> */}
        {/* <div className="quantity-controls">
          <button onClick={handleDecrement}>-</button>
          <span className="quantity">{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div> */}
        <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }} onChange={handleQty}>
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>)
              })}
            </select>
        <button className={`btn btn-success justify-center ms-2 `} onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
