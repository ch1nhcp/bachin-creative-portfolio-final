import React from "react";
import StyledBtn from "./StyledBtn";

function ContactHero() {
  const handleClickContact = () => {
    window.location.href = "mailto:bachin.creative@gmail.com";
  };
  return (
    <div className="p-40 text-center border-b border-black">
      <p className="text-4xl font-sans-custom">
        Ready To
        <i> elevate</i>
        <br />
        your brand's presence?
      </p>
      <p className="pt-6 font-medium mx-auto max-w-xl text-xl pb-8">
        Transform your brand's future with our expert marketing services.
        <br />
        Let's collaborate to create a strategy that propels your success.
        <br />
        Reach out now and unleash your brand's potential!
      </p>
      <StyledBtn onClick={handleClickContact}>
        bachin.creative@gmail.com
      </StyledBtn>
    </div>
  );
}

export default ContactHero;
