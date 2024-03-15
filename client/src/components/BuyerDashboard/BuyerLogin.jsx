import React from "react";
import "./BuyerLogin.css";
import img2 from "../../images/Buyer.gif";
// import img2 from "../../images/Banner/BuyerLogin.jpg"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function BuyerLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("HI");
    try {
      const response = await fetch("http://localhost:3000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log(json.data.email);
      localStorage.setItem('userEmail',json.data.email);

      if (json.statusCode === 400) {
        alert("Enter Valid Credentials");
      } else if (json.statusCode === 401) {
        alert("Invalid user Credentials");
      } else if (json.statusCode === 404) {
        alert("First Create Account");
      } else if (json.statusCode === 200) {
        console.log("neelu");
        navigate("/buyermain");
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
          {/* <div className="part1 d-flex justify-content-center align-item-center ">
            <div>
              <img className="imageSet mt-5" src={img2} alt="" />
            </div>
            <div
              className="buyer-text"
              style={{ color: "black", fontFamily: "cursive" }}
            >
              <h4>
                Visualize the aroma of freshly baked pizza, with a crispy crust
                & bubbling cheese.
              </h4>
            </div>
          </div> */}
          <div className="part1 d-flex justify-content-center align-item-center">
            <div
              className="owner-text"
              style={{ color: "black", fontFamily: "cursive" }}
            >
              <h4>
                Visualize the aroma of freshly baked pizza, with a crispy crust
                & bubbling cheese.
              </h4>
            </div>
            <div>
              <img className="buyerImageSet" src={img2} alt="" />
            </div>
          </div>

          <div className="part2 d-flex justify-content-center align-item-center ">
            <div className="login-container">
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
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

                <button type="submit">
                  {" "}
                  <b>LOG IN</b>
                </button>
              </form>

              <p>
                Create New Account
                <button>
                  <Link
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                    to="/buyersign"
                  >
                    SIGN UP
                  </Link>
                </button>
              </p>
            </div>
            <h1 className="owner-text"></h1>
          </div>
        </div>
        <div className="seperator-text">
          <span>...</span>
        </div>
      </div>
    </>
  );
}

export default BuyerLogin;
