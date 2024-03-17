import React, { useState, useEffect } from "react";
import Card3 from "./Card3";
import Navbar from "./Navbar";
import { v4 as uuidv4 } from "uuid"; // Import uuid
import "./MyOrder.css";

function MyOrder() {
  const [items, setItems] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/user/allOrders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: localStorage.getItem("userEmail"),
          }),
        }
      );
      const data = await response.json();
      setItems(data.orderData.order_data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="my-container">
        {items.map((orderItems) => (
          <div key={uuidv4()} className="my-container">
            {orderItems
              .slice(0)
              .reverse()
              .map((item, index) => (
                <div key={item.id} className="my-order-item">
                  {index === orderItems.length - 1 && item.Order_date && (
                    <div className="my-order-date">
                      <h2>{item.Order_date}</h2>
                      <hr />
                    </div>
                  )}
                  {index !== orderItems.length - 1 && (
                    <div className="my-card-container">
                      <Card3
                        key={item.id}
                        itemId={item.id}
                        imageSrc={item.img}
                        title={item.name}
                        price={item.price}
                        shopName={item.shopName} // Add this line
                      />
                    </div>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default MyOrder;
