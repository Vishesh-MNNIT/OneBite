import React from "react";
import "./LandingPage.css";
import img1 from "../../images/Cooking.gif";
import img2 from "../../images/Buyer.gif";
import logo from "../../images/logo-color.png"; // Import your logo image
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

export default function LandingPage() {
  return (
    <>
      {/* <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </header> */}
      <Logo />
      <div className="parent-container">
        <div className="d-flex parts">
          <div className="part1 d-flex justify-content-center align-item-center">
            <div>
              <img className="imageSet mt-5" src={img2} alt="" />
            </div>
            <h1 className="ownerLanding">
              <Link
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontFamily: "cursive",
                }}
                to="/buyerlogin"
              >
                CUSTOMER
              </Link>
            </h1>
          </div>

          <div className="part2 d-flex justify-content-center align-item-center">
            <div>
              <img className="imageSet" src={img1} alt="" />
            </div>
            <h1 className="ownerLanding">
              <Link
                style={{
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontFamily: "cursive",
                }}
                to="/ownerlogin"
              >
                SHOPKEEPER
              </Link>
            </h1>
            {/* <h4 style={{ marginTop: "80%", fontFamily: "cursive" }}>
              "Indulge in Flavorful Moments with One Bite"
            </h4> */}
          </div>
        </div>
        <div className="seperator-text">
          <span>!!! </span>
        </div>
      </div>
    </>
  );
}
