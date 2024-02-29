import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const handleClickLogo = (event) => {
    event.preventDefault();
    navigate("/");
  };
  return (
    <>
      <div className="px-20 py-10 text-center mx-auto border-b border-black">
        <div className="flex items-center justify-between">
          <div className="w-60 cursor-pointer" onClick={handleClickLogo}>
            <img
              className="cursor-pointer"
              src="https://lh3.google.com/u/0/d/1yecYnbygSK0KXLO714n2MGama5ecHQMH=w3024-h1646-iv1"
              alt="logo-img"
            />
          </div>
          <div className="flex flex-col text-center font-sans-custom">
            <div className="text-2xl">Tel: 0949-626-193</div>
            <div className="text-2xl">Email: bachin.creative@gmail.com</div>
            <div className="text-2xl">
              Address: 215 Nguyen Gia Tri street - 25 ward - Binh Thanh district
              - HCM city
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 text-center mx-auto border-b border-black"></div>
      <div className="p-6"></div>
    </>
  );
}

export default Footer;
