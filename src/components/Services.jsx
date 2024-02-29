import React from "react";
import { Link } from "react-router-dom";

function Services() {
  const serviceLinks = [
    {
      title: "Services",
      link: "/services",
      bgImgSrc: "https://i.imgur.com/Ir0grvZ.jpeg",
    },
    {
      title: "Portfolio",
      link: "/portfolio",
      bgImgSrc: "https://i.imgur.com/GcXkv0s.jpeg",
    },
    {
      title: "Contact",
      link: "/contact",
      bgImgSrc: "https://i.imgur.com/5qvP6EX.jpeg",
    },
  ];

  return (
    <div className="px-20 py-16 flex justify-center items-center gap-20 border-b border-black">
      {serviceLinks.map((service, index) => (
        <Link
          key={index}
          to={service.link}
          className="relative hover:scale-105 transition-transform duration-300"
        >
          <img src={service.bgImgSrc} alt={service.title} />
          <div className="absolute inset-12 flex items-end justify-center text-white text-4xl font-sans-custom">
            <i>{service.title}</i>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Services;
