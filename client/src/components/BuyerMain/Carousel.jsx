import React from "react";
import img1 from "../../images/BurgerC.jpg";
import img2 from "../../images/MomosC.jpg";
import img3 from "../../images/BreadC.jpg";

export default function Carousel() {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="Burger" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Momos" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Bread" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
