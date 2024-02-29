import React from "react";
import StyledBtn from "./StyledBtn";
import { useNavigate } from "react-router-dom";

function OurMission() {
  const navigate = useNavigate();

  const handleClickAbout = (event) => {
    event.preventDefault();
    navigate("/about");
  };

  return (
    <div className="p-20 text-center border-b border-black">
      <p className="text-3xl font-sans-custom">
        Our
        <i> Mission</i>
      </p>
      <p className="pb-6 font-medium mx-auto max-w-xl">
        "With our dedication to excellence and our drive for innovation, we aim
        to uplift brands and redefine the narrative landscape."
      </p>
      <div className="mx-auto max-w-xs">
        <StyledBtn onClick={handleClickAbout}>View more about us</StyledBtn>
      </div>
    </div>
  );
}

export default OurMission;
