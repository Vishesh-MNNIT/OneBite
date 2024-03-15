import React, { useState, useEffect } from "react";
import img1 from "../../images/Banner/BurgerC.jpg";
import img2 from "../../images/Banner/MomosC.jpg";
import img3 from "../../images/Banner/BreadC.jpg";

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`Slide ${index}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
          onClick={() =>
            setActiveIndex(
              (prevIndex) => (prevIndex - 1 + images.length) % images.length
            )
          }
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
          onClick={() =>
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
