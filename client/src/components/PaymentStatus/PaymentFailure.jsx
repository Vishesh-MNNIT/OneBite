import React from "react";
import img from "../../images/Payment/FailureP.gif";
import "./PaymentFailure.css";

const PaymentFailure = () => {
  return (
    <div className="payment-failure-container">
      <img src={img} alt="Success" className="payment-failure-image" />
      <h1 className="payment-failure-title">Payment Failed</h1>
      <p className="payment-failure-message">Try Again!</p>
      <button
        className="payment-failure-button"
        onClick={() => (window.location.href = "/buyermain")}
      >
        Go to Checkout
      </button>
    </div>
  );
};

export default PaymentFailure;
