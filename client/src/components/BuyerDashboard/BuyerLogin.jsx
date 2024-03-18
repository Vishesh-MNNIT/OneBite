import React, { useState } from "react";
import "./BuyerLogin.css";
import img2 from "../../images/BlueC.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../Logo/Logo";

function BuyerLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  // Define the toast function
  const showSuccessToast = () => {
    toast.success("Login successful!"); // Toast message for successful login
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      localStorage.setItem("userEmail", json.data.email);

      if (json.statusCode === 400) {
        alert("Enter Valid Credentials");
      } else if (json.statusCode === 401) {
        alert("Invalid user Credentials");
      } else if (json.statusCode === 404) {
        alert("First Create Account");
      } else if (json.statusCode === 200) {
        console.log("Hello");
        showSuccessToast(); // Show toast message on successful login
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
      <Logo />
      <div className="parent-container">
        <div className="d-flex parts">
          <div className="part1 d-flex justify-content-center align-item-center">
            <div
              className="owner-text"
              style={{ color: "black", fontFamily: "cursive" }}
            >
              <h4 style={{ marginLeft: "30px", marginTop: "50px" }}>
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
      </div>
      //Toasting Feature
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />
    </>
  );
}

export default BuyerLogin;
