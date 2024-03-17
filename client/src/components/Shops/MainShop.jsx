import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../Card";
import Navbar from "../Navbar";
const MainShop = () => {
  const location = useLocation();
  const { selectedItem } = location.state;

  console.log(selectedItem);

  return (
    <div>
      <Navbar />
      <h2>Selected Item Details</h2>
      <div className="mainShop-container">
        <h1 style={{ marginTop: "20px" }}>ITEMS</h1>
        <div className="card-container">
          {selectedItem.map((item) => (
            <Card
              key={item._id} // Make sure to provide a unique key
              imageSrc={item.productImage}
              title={item.productName}
              price={item.price}
              shopName="Ojha"
              addToCart={() => addToCart(item._id)} // Pass your addToCart function here
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainShop;
