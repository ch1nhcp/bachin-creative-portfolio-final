import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const linkList = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <div className="px-20 py-10 flex items-center justify-between border-b border-black">
      <div className="w-60">
        <i className="text-2xl font-semibold font-sans-custom">
          Bachin Creative
        </i>
      </div>
      <div className="flex gap-8">
        {linkList.map((linkItem, index) => (
          <NavLink
            key={index}
            to={linkItem.link}
            className="hover:underline hover:scale-105 transition-transform duration-300"
          >
            {linkItem.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Header;
