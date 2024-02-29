import React from "react";
import StyledBtn from "./StyledBtn";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleClickBack = (event) => {
    event.preventDefault();
    navigate("/portfolio");
  };
  return (
    <div className="border-b border-black">
      <div className="flex items-center">
        <div className="w-1/2">
          <img src="https://i.imgur.com/rGaxuu7.jpeg" alt="hero-img" />
        </div>
        <div className="w-1/2 p-10">
          <div className="text-cafe text-3xl font-sans-custom">
            We <i>Craft</i> Your Social Media Presence
            <br />
            Into <i>Captivating </i>
            Narratives,
            <br />
            <i>Empowering </i>
            Your Brand.
          </div>
          <div className="font-medium py-3">
            Join us where strategy intersects with creativity, creating
            unforgettable brand experiences.
          </div>
          <StyledBtn onClick={handleClickBack}>View more</StyledBtn>
        </div>
      </div>
      <div className="py-20 text-center text-cafe text-3xl font-sans-custom">
        <i>Innovative </i>
        Marketing,
        <i> Kind </i>
        Solutions."
      </div>
    </div>
  );
}

export default Hero;
