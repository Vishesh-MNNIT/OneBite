import React from "react";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "./ContextReducer";

const Navbar = () => {
  //const items = useCart();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            OneBite
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/buyermain">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/myorder">
                  My Order
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutus">
                  About Us!
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/discount">
                  Discount
                </Link>
              </li>
            </ul>
            <div className="btn bg-white text-success mx-2 ">
              <Badge color="secondary">
                <ShoppingCartIcon />
              </Badge>
              <>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/usercart"
                >
                  Cart
                </Link>
              </>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
