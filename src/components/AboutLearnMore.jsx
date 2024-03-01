import React from "react";
import StyledBtn from "./StyledBtn";

function AboutLearnMore() {
  return (
    <div className="flex flex-col sm:flex-row border-b border-black">
      <div className="p-6 sm:w-3/5 md:p-20 flex flex-col justify-center">
        <div className="text-4xl font-sans-custom">
          Learn More About
          <br />
          <i>Our Experience</i>
        </div>
        <div className="px-8 py-10">
          <StyledBtn className="w-20">
            <a
              href="https://drive.google.com/file/d/1rY9lf8oJorTDd0-5Zbl6aMgGxxnQFBnp/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </a>
          </StyledBtn>
        </div>
      </div>
      <img
        className="w-full sm:w-2/5"
        src="https://i.imgur.com/scCrHw3.jpg"
        alt=""
      />
    </div>
  );
}

export default AboutLearnMore;
