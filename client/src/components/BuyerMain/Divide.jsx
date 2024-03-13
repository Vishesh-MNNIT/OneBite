import React from "react";
import "./Divide.css";
import img1 from "../../images/Cooking.gif";
import img2 from "../../images/Buyer.gif";
import { Link } from "react-router-dom";

export default function Divide() {
  return (
    <>
      <div className="parent-container">
        <div className="d-flex parts">
          <div className="part1 d-flex justify-content-center align-item-center">
            {/* <div>
              <img className="imageSet mt-5" src={img2} alt="" />
            </div> */}
            <h1 className="item-text">
              <Link
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                to="/demo"
              >
                BY ITEM
              </Link>
            </h1>
          </div>

          <div className="part2 d-flex justify-content-center align-item-center">
            {/* <div>
              <img className="imageSet mt-5" src={img2} alt="" />
            </div> */}
            <h1 className="shop-text">
              <Link
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                to="/byshop"
              >
                BY SHOP
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}