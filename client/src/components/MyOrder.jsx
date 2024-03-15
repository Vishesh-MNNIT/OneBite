import React, { useState, useEffect } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Carousel from "./BuyerMain/Carousel";

function MyOrder() {
  const [items, setItems] = useState([]); // Initialize items as an empty array

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
            email: localStorage.getItem('userEmail')
          })
        }
      );
      const data = await response.json();
      console.log(data.orderData.order_data[0]);
      setItems(data.orderData.order_data[0]);
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
      {/* <Carousel /> */}
      <div className="containerDemo">
        {items.slice(0).reverse().map((item, index) => (
          <div key={item._id}>
            {index === items.length - 1 && item.Order_date && (
              <div className='m-auto mt-5'>
                <h2>{item.Order_date}</h2>
                <hr />
              </div>
            )}
            {index!=items.length - 1  && (
                <div className="card-container">
              <Card
                key={item._id}
                imageSrc={item.img}
                title={item.name}
                price={item.price}
              />
            </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default MyOrder;