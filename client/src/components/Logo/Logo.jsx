import React from "react";
import "./Logo.css";
import logo from "../../images/logo-color.png";

export default function Logo() {
  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
      </header>
    </>
  );
}
