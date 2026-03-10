// import { useState } from "react";
import Banner from "./COMPONENT/Banner";
import "./App.css";
import Navbar from "./COMPONENT/Navbar";
import Tophero from "../src/COMPONENT/Tophero";
import React from "react";
import MiddleHero from "./COMPONENT/MiddleHero";

const App = () => {
  const buttonText = {
    NavText: "Create free account",
  };

  return (
    <div className="body">
      <Banner />

      <section className="bodywraper">
        <Navbar Buttontext={buttonText} />
        <Tophero Buttontext={buttonText} />
        <MiddleHero />
      </section>
    </div>
  );
};

export default App;
