import React from "react";
import Card from "../Card";

function Items() {
  return (
    <>
      <div className="card-container">
        <Card
          imageSrc="../src/images/BurgerDemo.jpg"
          title="Biryani"
          price="20.99"
          shopName="OjhaCanteen"
        />
        {/* <Card
          imageSrc="../src/images/Plate.avif"
          title="Biryani"
          price="20.99"
        />
        <Card
          imageSrc="../src/images/Plate.avif"
          title="Biryani"
          price="20.99"
        /> */}
      </div>
    </>
  );
}

export default Items;
