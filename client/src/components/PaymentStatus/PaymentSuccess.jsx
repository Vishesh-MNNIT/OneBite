import React from "react";
import img from "../../images/Payment/SuccessP.gif";
import "./PaymentSuccess.css";

const PaymentSuccess = () => {
  return (
    <div className="payment-success-container">
      <img src={img} alt="Success" className="payment-success-image" />
      <h1 className="payment-success-title">Payment Successful</h1>
      <p className="payment-success-message">Thank you for your payment!</p>
      <button
        className="payment-success-button"
        onClick={() => (window.location.href = "/buyermain")}
      >
        Go to Main Page
      </button>
    </div>
  );
};

export default PaymentSuccess;
