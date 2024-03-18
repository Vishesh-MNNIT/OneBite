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

      <div className="mainShop-container">
        {/* <h2 style={{ marginTop: "80px" }}>Selected Item Details</h2> */}
        <h1 style={{ marginTop: "60px" }}>MENU</h1>
        <div className="card-container">
          {selectedItem.map((item) => (
            <Card
              key={item._id}
              itemId={item._id} // Pass the item ID to the Card component
              imageSrc={item.productImage}
              title={item.productName}
              price={item.price}
              shopName={item.shopName}
              rating={item.rating}
              count={item.count}
              addToCart={() => addToCart(item._id)} // Pass your addToCart function here
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainShop;
