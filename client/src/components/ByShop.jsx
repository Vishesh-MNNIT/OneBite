import React, { useState, useEffect } from "react";
import Card2 from "./Card2";
import "./ByShop.css";

function ByShop() {
  const [items, setItems] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/shop/displayData",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="shop-container ">
      <div className="card-container">
        {items.map((item, index) => (
          <Card2
            index={index}
            key={item._id}
            imageSrc={item.image}
            shopName={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default ByShop;
