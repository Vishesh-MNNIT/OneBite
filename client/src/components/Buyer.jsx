import React from "react";
import Navbar from "./Navbar";
import "./Buyer.css";
import Card from "./Card";

function Buyer() {
  return (
    <>
      <Navbar />
      <div className="card-container">
        <Card
          imageSrc="../src/images/Plate.avif"
          title="Biryani"
          price="20.99"
        />
        <Card
          imageSrc="../src/images/Plate.avif"
          title="Biryani"
          price="20.99"
        />
        <Card
          imageSrc="../src/images/Plate.avif"
          title="Biryani"
          price="20.99"
        />
      </div>

      <div className="card-container">
        <Card
          imageSrc="../src/images/Plate.avif"
          title="Biryani"
          price="20.99"
        />
        <Card
          imageSrc="../src/images/Plate.avif"
          title="Biryani"
          price="20.99"
        />
        <Card
          imageSrc="../src/images/Plate.avif"
          title="Biryani"
          price="20.99"
        />
      </div>

      <div className="card-container">
        <Card
          imageSrc="../src/images/Plate.avif"
          title="Biryani"
          price="20.99"
        />
        <Card
          imageSrc="../src/images/Plate.avif"
          title="Biryani"
          price="20.99"
        />
        <Card
          imageSrc="../src/images/Plate.avif"
          title="Biryani"
          price="20.99"
        />
      </div>
    </>
  );
}

export default Buyer;
