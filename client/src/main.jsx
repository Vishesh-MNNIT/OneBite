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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
