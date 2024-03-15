import React from "react";
import "./Divide.css";
import img1 from "../../images/BurgerC.jpg";
import img2 from "../../images/ShopD.jpg";
import { Link } from "react-router-dom";

export default function Divide() {
  return (
    <>
      <div className="parentDivide">
        <div className="d-flex partsDivide">
          <div className="part1Divide d-flex justify-content-center align-item-center">
            <div className="bannerDivide">
              <img className="imageSetDivide" src={img1} alt="" />
              <button className="itemDivide">
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
              </button>
            </div>
          </div>

          <div className="part2Divide d-flex justify-content-center align-item-center">
            <div className="bannerDivide">
              <img className="imageSetDivide" src={img2} alt="" />
              <button className="shopDivide">
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
