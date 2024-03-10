import React from "react";
import "./BuyerSignup.css"; // Import the CSS file

const BuyerSignup = () => {
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form className="signup-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="fullName">Full Name:</label>
        <input type="text" id="fullName" name="fullName" />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default BuyerSignup;
