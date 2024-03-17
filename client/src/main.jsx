import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import { CartProvider } from "./components/ContextReducer";
import MyOrder from "./components/MyOrder.jsx";
import MostSold from "./components/Most/MostSold.jsx";
import MostRated from "./components/Most/MostRated.jsx";
import MostDivide from "./components/Most/MostDivide";
import Discount from "./components/Discount/Discount.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "buyerlogin",
    element: <BuyerLogin />,
  },
  {
    path: "ownerlogin",
    element: <OwnerLogin />,
  },
  {
    path: "ownersign",
    element: <OwnerSignup />,
  },
  {
    path: "buyersign",
    element: <BuyerSignup />,
  },
  {
    path: "ownerform",
    element: <OwnerForm />,
  },
  {
    path: "buyermain",
    element: <BuyerMain />,
  },
  {
    path: "demo",
    element: <Demo />,
  },
  {
    path: "byshop",
    element: <ByShop />,
  },

  {
    path: "mainshop",
    element: <MainShop />,
  },
  {
    path: "owneradditems",
    element: <OwnerAddItems />,
  },
  {
    path: "usercart",
    element: <Cart />,
  },
  {
    path: "myorder",
    element: <MyOrder />,
  },
  {

    path: "mostdivide",
    element: <MostDivide />,
  },
  {
    path: "mostrated",
    element: <MostRated />,
  },
  {
    path: "mostsold",
    element: <MostSold />,
  },
  {
    path: "discount",
    element: <Discount />,

    path: "aboutus",
    element: <AboutUs />,
  },
  {
    path: "paymentsuccess",
    element: <PaymentSuccess />,
  },
  {
    path: "paymentfailure",
    element: <PaymentFailure />,

  },
]);
const AppWithProvider = () => (
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppWithProvider />
);
