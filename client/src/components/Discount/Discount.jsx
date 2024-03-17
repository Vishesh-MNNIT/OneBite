// DiscountPage.jsx

import React, { useEffect, useState } from "react";
import "./Discount.css";

const DiscountPage = () => {
  const [currentPoints, setCurrentPoints] = useState(0);
  const [pointsNeeded, setpointsNeeded] = useState(0);

  const userEmail = localStorage.getItem("userEmail");
  console.log(userEmail);
  const loadData = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/user/displayPoints",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
          }),
        }
      );
      const data = await response.json();
      // Group items by product name
      // console.log(data.user.points);
      setCurrentPoints(data.user.points);
      setpointsNeeded(50 - data.user.points);
      // console.log(items);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };
  useEffect(() => {
    loadData();
  });
  return (
    <div className="discount-container">
      <div className="points-info">
        <h2>Your Current Points: {currentPoints}</h2>
        <h2>Points Needed to Avail Discount: {pointsNeeded}</h2>
      </div>
      <div className="rules-box">
        <h2>Rules to Earn Points:</h2>
        <ul>
          <li>
            If You Order in Range of $500 to $1000: You will Gain 15 points
          </li>
          <li>If You Order above $1000 or more: You will Gain 25 points</li>
          <li>After You Have More than 50 Point: Your Discount Amount : $50</li>
        </ul>
      </div>
    </div>
  );
};

export default DiscountPage;
