import React, { useEffect } from "react";
import Navbar from "../Navbar.jsx";
import "./BuyerMain.css";
import { Link } from "react-router-dom";
import Divide from "./Divide.jsx";
import img1 from "../../images/Banner/BowlC.jpg";
import img2 from "../../images/Banner/BowlC2.jpg";
import Footer from "../Footer.jsx";
import MostDivide from "../Most/MostDivide.jsx";
import { useNavigate } from "react-router-dom";

function BuyerMain() {
  const navigate = useNavigate();
  

  
  const checktoken =()=>{
    const accessToken = localStorage.getItem("accessToken")
    if(!accessToken){
      
      navigate("/buyerlogin")
      // alert("Please login first")
    }
  }

  useEffect(()=>{
    checktoken();
  },[])


  return (
    <>
      <div className="mainDiv">
        <Navbar />
        <Divide />
        <MostDivide />
        <div className="bannerContainer1">
          <img className="bannerImg" src={img2} alt="Banner" />
          <div className="bannerText">
            <h2>Welcome to OneBite!</h2>
            <p>Explore our delicious menu and start ordering now.</p>
            <Link to="/aboutus" className="btn btn-primary">
              About Us!
            </Link>
          </div>
        </div>

        <div className="bannerContainer2">
          <div className="bannerText">
            {/* <h2>Welcome to OneBite!</h2> */}
            <h2>ONE BITE :Known for Quality</h2>
            <p>
              We are committed to ensuring the highest standards of quality and
              customer satisfaction. Our team works tirelessly to partner with
              the best restaurants and vendors, ensuring that every meal you
              order meets our stringent standards of taste, freshness, and
              hygiene.
            </p>
            {/* <Link to="/aboutus" className="btn btn-primary">
              About Us!
            </Link> */}
          </div>
          <img className="bannerImg" src={img1} alt="Banner" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BuyerMain;
