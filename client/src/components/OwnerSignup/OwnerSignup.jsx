import React from "react";
import "./OwnerSignup.css"; // Import the CSS file
import img2 from "../../images/Animation/signUp.gif";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const OwnerSignup = () => {
  const navigate = useNavigate();
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
        // alert("User registered successfully");
        navigate("/ownerlogin");
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
      <div className="parent-container">
        <div className="d-flex parts">
          <div className="part1 d-flex justify-content-center align-item-center">
            <div
              className="owner-text"
              style={{
                color: "black",
                fontFamily: "cursive",
                marginLeft: "10px",
              }}
            >
              <h1>Create Your Account</h1>
            </div>
            <div>
              <img className="ownerImageSet" src={img2} alt="" />
            </div>
          </div>

          <div className="part2 d-flex justify-content-center align-item-center">
            <div className="login-container">
              <h2>Sign Up</h2>
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

                <button type="submit">Sign Up</button>
              </form>
            </div>
            <h1 className="owner-text"></h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OwnerSignup;
