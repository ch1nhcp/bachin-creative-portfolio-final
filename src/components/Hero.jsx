import React from "react";
import StyledBtn from "./StyledBtn";

function Hero() {
  return (
    <div className="border-b border-black">
      <div className="flex items-center">
        <div className="w-1/2">
          <img
            // src="https://images.unsplash.com/photo-1709038459415-8379ce8ae789?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // src="../assets/img/bachin-creative-hero.jpg"
            src="https://i.imgur.com/rGaxuu7.jpeg"
            alt="hero-img"
          />
        </div>
        <div className="w-1/2 p-10">
          <div className="text-white text-3xl font-sans-custom">
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
          <StyledBtn>View more</StyledBtn>
        </div>
      </div>
      <div className="py-10 text-center text-white text-3xl font-sans-custom">
        <i>Innovative </i>
        Marketing,
        <i> Kind </i>
        Solutions."
      </div>
    </div>
  );
}

export default Hero;
