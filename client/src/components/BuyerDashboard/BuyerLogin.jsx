import React from "react";
import "./BuyerLogin.css";
import img2 from "../../images/Buyer.gif";
import { Link } from "react-router-dom";

function BuyerLogin() {
  return (
    <>
      <div className="parent-container">
        <div className="d-flex parts">
          <div className="part1 d-flex justify-content-center align-item-center">
            {/* <h1 className="buyer-text">BUYER</h1> */}
            <div>
              <img className="imageSet mt-5" src={img2} alt="" />
            </div>
          </div>

          <div className="part2 d-flex justify-content-center align-item-center">
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h2>Login</h2>
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" />

                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" />

                  <button type="submit">Login</button>
                </form>

                <p>
                  If you don't have an account, you can{" "}
                  <Link to="/buyersign">signup here</Link>
                </p>
              </div>
            </div>
            <h1 className="owner-text"></h1>
          </div>
        </div>
        <div className="seperator-text">
          <span>...</span>
        </div>
      </div>
    </>
  );
}

export default BuyerLogin;
