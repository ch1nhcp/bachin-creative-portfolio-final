import React from "react";
import StyledBtn from "../components/StyledBtn";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();

  const handleClickBack = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          Oops! Page Not Found
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          The page you are looking for might have been removed or doesn't exist.
        </p>
        <StyledBtn onClick={handleClickBack}>Go Back to Home</StyledBtn>
      </div>
    </div>
  );
}

export default PageNotFound;
