import React from "react";
import "./LandingPage.css";
import img1 from "../../images/Cooking.gif";
import img2 from "../../images/Buyer.gif";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="parent-container">
        <div className="d-flex parts">
          <div className="part1 d-flex justify-content-center align-item-center">
            <h1 className="buyerLanding">
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
            <div>
              <img className="imageSet mt-5" src={img2} alt="" />
            </div>
          </div>

          <div className="part2 d-flex justify-content-center align-item-center">
            <div>
              <img className="imageSet mt-4" src={img1} alt="" />
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
          </div>
        </div>
        <div className="seperator-text">
          <span>ONE.BITE</span>
        </div>
      </div>
    </>
  );
}
