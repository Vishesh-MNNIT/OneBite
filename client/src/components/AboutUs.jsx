import React from "react";
import "./AboutUs.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import img1 from "../images/Banner/BowlC2.jpg";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="aboutUsContainer">
        <div className="aboutUsContent">
          <h2>About Us</h2>
          <p>
            ONE BITE is a leading food ordering and delivery platform, dedicated
            to providing a seamless and enjoyable dining experience for our
            customers. We offer a wide range of delicious cuisines from various
            restaurants and eateries, delivered straight to your doorstep.
          </p>
          <p>
            Our platform allows users to browse through a diverse selection of
            food items, organized both by category and by the restaurant. With
            our easy-to-use interface and convenient ordering process, getting
            your favorite meals has never been easier.
          </p>
          <p>
            Whether you're craving a hearty burger, a flavorful bowl of ramen,
            or a healthy salad, One Bite has you covered. Join us on our
            culinary journey and discover a world of delicious possibilities,
            one bite at a time.
          </p>
        </div>
        <div className="aboutUsImageContainer">
          <img src={img1} alt="About Us" className="aboutUsImage" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;