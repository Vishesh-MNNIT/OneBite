import React from "react";
import "./App.css";
import LandingPage from "./components/aLandingPage/LandingPage";
import { CartProvider } from "./components/ContextReducer";
function App() {
  return (
    <>
     <CartProvider>
      <LandingPage />
      </CartProvider>
    </>
  );
}

export default App;
