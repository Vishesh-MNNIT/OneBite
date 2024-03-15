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

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
