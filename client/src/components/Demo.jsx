import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Demo.css";
import Navbar from "./Navbar";
import Carousel from "./BuyerMain/Carousel";

function Demo() {
  const [items, setItems] = useState({});
  const [cartItems, setCartItems] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/shopKeeper/displayData",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      // Group items by product name
      const groupedItems = groupItemsByProductName(data);
      setItems(groupedItems);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  // Function to group items by product name
  const groupItemsByProductName = (items) => {
    const groupedItems = {};
    items.forEach((item) => {
      const { productName } = item;
      if (!groupedItems[productName]) {
        groupedItems[productName] = [];
      }
      groupedItems[productName].push(item);
    });
    return groupedItems;
  };

  const addToCart = (itemId) => {
    // Concatenate all item arrays into a single array
    const allItems = Object.values(items).flat();
    // Find the item with the given ID
    const itemToAdd = allItems.find((item) => item._id === itemId);
    if (itemToAdd) {
      console.log(itemToAdd);
      setCartItems([...cartItems, itemToAdd]);
    }
  };

  return (
    <>
      <Navbar cartItemsCount={cartItems.length} />
      <Carousel />
      <div className="containerDemo">
        {Object.entries(items).map(([productName, productList]) => (
          <div key={productName} className="product-category">
            <h2>{productName}</h2>
            <div className="card-container">
              {productList.map((item) => (
                <Card
                  key={item._id}
                  itemId={item._id} // Pass the item ID to the Card component
                  imageSrc={item.productImage}
                  title={item.productName}
                  price={item.price}
                  shopName={item.shopName}
                  addToCart={() => addToCart(item._id)} // Pass the item ID to addToCart function
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Demo;