import React from "react";
import Navbar from "../Navbar.jsx";
import Carousel from "./Carousel.jsx";
import Items from "./Items.jsx";
import "./BuyerMain.css";
import { Link } from "react-router-dom";

function BuyerMain() {
  return (
    <>
      <div className="mainDiv">
        <Navbar />
        {/* <Carousel /> */}
        <Items />
        <button type="submit">
          <Link to="/demo">By Item</Link>
        </button>
      </div>
    </>
  );
}

export default BuyerMain;
