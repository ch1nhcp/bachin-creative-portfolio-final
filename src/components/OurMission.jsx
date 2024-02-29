import React from "react";
import StyledBtn from "./StyledBtn";

function OurMission() {
  return (
    <div className="p-20 text-center border-b border-black">
      <p className="text-3xl font-sans-custom">
        Our
        <i> mission</i>
      </p>
      <p className="pb-6 font-medium mx-auto max-w-xl">
        "With our dedication to excellence and our drive for innovation, we aim
        to uplift brands and redefine the narrative landscape."
      </p>
      <div className="mx-auto max-w-xs">
        <StyledBtn>View more about us</StyledBtn>
      </div>
    </div>
  );
}

export default OurMission;
