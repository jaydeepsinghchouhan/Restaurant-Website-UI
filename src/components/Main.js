import React from "react";
import Navbar from "./Navbar";
import BurgerBackgroundPNG from "../assets/images/burgerBackground.png";
import Banner from "./Banner";
import HotItems from "./HotItems";
import '../App.css'
import HotItemCard from "./HotItemCard";
import Offer from "./Offer";
import AboutUs from "./AboutUs";

function Main() {
  return (
    <>
      <div className='app' style={{ overflow: "hidden" }}>
        <img
          src={BurgerBackgroundPNG}
          alt=""
          style={{
            position: "absolute",
            top: -88,
            right: 0,
            width: "48%",
            textAlign: "right",
          }}
        />
      </div>
      <Navbar/>
      <Banner/>
      <HotItems/>
      <Offer/>
      <AboutUs/>
    </>
  );
}

export default Main;