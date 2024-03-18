import React from "react";
import "./Contact.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-us-container">
        <h1>Contact Us</h1>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Contact Number: +91 9058996787</p>
          <p>Email: info@onebite.com</p>
          <p>
            Social Media:
            <a
              href="https://www.instagram.com/onebite"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              Instagram
            </a>
            ,{" "}
            <a
              href="https://www.facebook.com/onebite"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              Facebook
            </a>
            ,{" "}
            <a
              href="https://twitter.com/onebite"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "black" }}
            >
              Twitter
            </a>
          </p>
        </div>

        <div className="faq">
          <h2>FAQs</h2>
          <div className="faq-question">
            <h3>How can I place an order?</h3>
            <p>
              To place an order, please visit our website and select your
              desired items from the menu.
            </p>
          </div>
          <div className="faq-question">
            <h3>Do you offer delivery?</h3>
            <p>
              Yes, we offer delivery within our delivery radius. You can check
              if your location is covered during checkout.
            </p>
          </div>
          {/* Add more FAQ questions as needed */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;