import React, { useState, useEffect } from "react";
import "./MostSold.css";
import Navbar from "../Navbar";
import Card from "../Card";
// import Footer from "../Footer";

function MostRated() {
  const [items, setItems] = useState([]);
  //const [cartItems, setCartItems] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/shop/highestRatedItems",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data.topItems);
      // Group items by product name
    //   const groupedItems = groupItemsByProductName(data);
      setItems(data.topItems);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // // Function to group items by product name
  // const groupItemsByProductName = (items) => {
  //   const groupedItems = {};
  //   items.forEach((item) => {
  //     const { productName } = item;
  //     if (!groupedItems[productName]) {
  //       groupedItems[productName] = [];
  //     }
  //     groupedItems[productName].push(item);
  //   });
  //   return groupedItems;
  // };

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

export default MostRated;