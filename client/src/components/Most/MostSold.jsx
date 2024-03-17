import React, { useState, useEffect } from "react";
import "./MostSold.css";
import Navbar from "../Navbar";
import Card from "../Card";
// import Footer from "../Footer";

function MostSold() {
  const [items, setItems] = useState([]);
  //const [cartItems, setCartItems] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/shop/mostSoldItems",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      // Group items by product name
      setItems(data.topItems);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Function to group items by product name


  return (
    <>
      <Navbar />
      <div className="containerDemo">
        <div className="card-container">
          {items.map((item) => (
            <Card
              key={item._id}
              itemId={item._id} // Pass the item ID to the Card component
              imageSrc={item.productImage}
              title={item.productName}
              price={item.price}
              shopName={item.shopName}
              rating={item.rating}
              count={item.count}
              // Pass the item ID to addToCart function
            />
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default MostSold;