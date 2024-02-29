import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const linkList = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Contact", link: "/contact" },
  ];

  const navigate = useNavigate();

  const handleClickLogo = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div className="px-20 py-10 flex items-center justify-between border-b border-black transition-all duration-500 transform">
      <div className="w-60 cursor-pointer" onClick={handleClickLogo}>
        <i className="text-2xl cursor-pointer font-semibold font-sans-custom">
          Bachin Creative
        </i>
      </div>
      <div className="flex gap-8">
        {linkList.map((linkItem, index) => (
          <NavLink key={index} to={linkItem.link} className="hover:underline">
            {linkItem.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Header;
