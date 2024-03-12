import React from "react";
import "./OwnerSignup.css"; // Import the CSS file
import { useState } from "react";
const OwnerSignup = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("HI");
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/owners/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
            confirmPassword: credentials.confirmPassword,
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
    <div className="signup-container">
      <h2>Signup</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={credentials.email}
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

        <label htmlFor="confirmPassword">confirmPassword:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={credentials.confirmPassword}
          onChange={onChange}
        />

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default OwnerSignup;
