import React from "react";
import "./BuyerSignup.css"; // Import the CSS file
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const BuyerSignup = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    fullName: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("HI");
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: credentials.username,
            email: credentials.email,
            fullName: credentials.fullName,
            password: credentials.password,
          }),
        }
      );
      const json = await response.json();
      console.log(json);
      if (json.statusCode === 400) {
        alert("All Field are required");
      } else if (json.statusCode === 403) {
        alert("User already Exist");
      } else if (json.statusCode === 500) {
        alert("Something went wrong while registering the user");
      } else if (json.statusCode === 200) {
        alert("User registered successfully");
        //useNavigate(/login)
      }
    } catch (error) {
      alert("Invalid credentials");
    }
  };
  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <>
      <div className="signup-container">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={onChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
          />

          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={credentials.fullName}
            onChange={onChange}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
          />

          <button type="submit">Signup</button>
          <Link to="/buyerlogin" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
};

export default BuyerSignup;
