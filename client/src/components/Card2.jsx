import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Card2.css";

const Card2 = ({ index, imageSrc, shopName }) => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const loadData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/shopKeeperItems"
      );
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  const clickHandler = () => {
    const selectedItem = items[index];
    navigate("/mainshop", { state: { selectedItem } });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="card2-container">
      <img src={imageSrc} className="card2-image" alt="Shop" />
      <div className="card2-content">
        <p style={{ color: "white" }} className="shop-name">
          {shopName}
        </p>
      </div>
      <button onClick={clickHandler} className="enter-button">
        MENU
      </button>
    </div>
  );
};

export default Card2;
