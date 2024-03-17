import React from "react";
import "./MostDivide.css";
//import img1 from "../../images/Banner/BuyerLogin.jpg";
//import img2 from "../../images/Banner/Desert.jpg";
import { Link } from "react-router-dom";

export default function MostDivide() {
  return (
    <>
      <div className="parentMostDivide">
        <div className="d-flex partsMostDivide">
          <div className="part1MostDivide d-flex justify-content-center align-item-center">
            <div className="bannerMostDivide">
              //<img className="imageSetMostDivide" alt="" />
              <button className="itemMostDivide">
                <Link
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                  to="/mostsold"
                >
                  MOST SOLD
                </Link>
              </button>
            </div>
          </div>

          <div className="part2MostDivide d-flex justify-content-center align-item-center">
            <div className="bannerMostDivide">
              //<img className="imageSetMostDivide"  alt="" />
              <button className="shopMostDivide">
                <Link
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                  to="/mostrated"
                >
                  MOST RATED
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}