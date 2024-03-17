import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import BuyerLogin from "./components/BuyerDashboard/BuyerLogin.jsx";
import OwnerLogin from "./components/OwnerDashboard/OwnerLogin.jsx";
import BuyerSignup from "./components/BuyerSignUp/BuyerSignup.jsx";
import OwnerSignup from "./components/OwnerSignup/OwnerSignup.jsx";
import OwnerForm from "./components/OwnerDashboard/OwnerForm.jsx";
import BuyerMain from "./components/BuyerMain/BuyerMain.jsx";
import Demo from "./components/Demo.jsx";
import ByShop from "./components/ByShop.jsx";
import MainShop from "./components/Shops/MainShop.jsx";
import OwnerAddItems from "./components/OwnerDashboard/OwnerAddItems.jsx";
import AboutUs from "./components/AboutUs.jsx";
import PaymentSuccess from "./components/PaymentStatus/PaymentSuccess.jsx";
import PaymentFailure from "./components/PaymentStatus/PaymentFailure.jsx";
import Cart from "./components/Cart.jsx";
import MyOrder from "./components/MyOrder.jsx";
import { CartProvider } from "./components/ContextReducer";
import Logo from "./components/Logo/Logo.jsx";
import MostDivide from "./components/Most/MostDivide.jsx";
import MostSold from "./components/Most/MostSold.jsx";
import MostRated from "./components/Most/MostRated.jsx";
import Contact from "./components/Contact.jsx";
import Discount from "./components/Discount/Discount.jsx";

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="buyerlogin" element={<BuyerLogin />} />
          <Route path="ownerlogin" element={<OwnerLogin />} />
          <Route path="ownersign" element={<OwnerSignup />} />
          <Route path="buyersign" element={<BuyerSignup />} />
          <Route path="ownerform" element={<OwnerForm />} />
          <Route path="buyermain" element={<BuyerMain />} />
          <Route path="demo" element={<Demo />} />
          <Route path="byshop" element={<ByShop />} />
          <Route path="mainshop" element={<MainShop />} />
          <Route path="owneradditems" element={<OwnerAddItems />} />
          <Route path="usercart" element={<Cart />} />
          <Route path="myorder" element={<MyOrder />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="paymentsuccess" element={<PaymentSuccess />} />
          <Route path="paymentfailure" element={<PaymentFailure />} />
          <Route path="logo" element={<Logo />} />
          <Route path="mostdivide" element={<MostDivide />} />
          <Route path="mostsold" element={<MostSold />} />
          <Route path="mostrated" element={<MostRated />} />
          <Route path="contact" element={<Contact />} />
          <Route path="discount" element={<Discount />} />
        </Routes>
      </Router>
      <ToastContainer />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
