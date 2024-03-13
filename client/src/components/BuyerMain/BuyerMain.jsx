import React from "react";
import Navbar from "../Navbar.jsx";
import "./BuyerMain.css";
import { Link } from "react-router-dom";
import Divide from "./Divide.jsx";

function BuyerMain() {
  return (
    <>
      <div className="mainDiv">
        <Navbar />
        {/* <button type="submit">
          <Link to="/demo">By Item</Link>
        </button>
        <button type="submit">
          <Link to="/byShop">By shop</Link>
        </button> */}
        <Divide />
      </div>
    </>
  );
}

export default BuyerMain;
