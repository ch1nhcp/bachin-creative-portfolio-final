import React from "react";
import { useNavigate } from "react-router-dom";
import StyledBtn from "./StyledBtn";

function ComingSoon() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Coming Soon!</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Our website/feature is under construction.
            <br />
            We'll be launching soon. Stay tuned!
          </p>
          <StyledBtn onClick={handleBackToHome}>Go Back to Home</StyledBtn>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
