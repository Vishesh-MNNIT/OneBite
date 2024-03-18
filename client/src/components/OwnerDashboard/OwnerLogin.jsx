import React from "react";
import "./OwnerLogin.css";
import img2 from "../../images/YellowC.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../Logo/Logo";
function OwnerLogin() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("HI");
    try {
      const response = await fetch(
        "http://localhost:3000/api/v1/owners/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        }
      );
      const json = await response.json();
      console.log(json.data.isSubmitted);
      if (json.statusCode === 400) {
        alert("Enter Valid Credentials");
      } else if (json.statusCode === 401) {
        alert("Invalid user Credentials");
      } else if (json.statusCode === 404) {
        alert("First Create Account");
      } else if (json.statusCode === 200) {
        localStorage.setItem("ownerEmail",credentials.email);
        if(json.data.isSubmitted===false){
          navigate("/ownerform");
        }else{
          localStorage.setItem("ownerId",json.data.id);
          navigate("/ownerdashboard");
        }
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
              style={{
                color: "black",
                fontFamily: "cursive",
                marginLeft: "10px",
              }}
            >
              <h4 style={{ marginLeft: "30px", marginTop: "50px" }}>
                Welcome, esteemed shopkeeper, to your culinary kingdom! As you
                log in to your account, envision the bustling energy of your
                kitchen.
              </h4>
            </div>
            <div>
              <img className="ownerImageSet" src={img2} alt="" />
            </div>
          </div>

          <div className="part2 d-flex justify-content-center align-item-center">
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
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to="/ownerform"
                  >
                    Login
                  </Link>
                </button>
              </form>

              <p>
                Create a New Account
                <button>
                  {" "}
                  <Link
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                    to="/ownersign"
                  >
                    SIGN UP
                  </Link>
                </button>
              </p>
            </div>
            <h1 className="owner-text"></h1>
          </div>
        </div>
        {/* <div className="seperator-text">
          <span>...</span>
        </div> */}
      </div>
    </>
  );
}

export default OwnerLogin;
