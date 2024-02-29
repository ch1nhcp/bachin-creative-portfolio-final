import React from "react";
import { Link } from "react-router-dom";

function Services() {
  const serviceLinks = [
    {
      title: "Services",
      link: "/services",
      // bgImgSrc: "https://i.imgur.com/rGaxuu7.jpeg",
      bgImgSrc: "https://i.imgur.com/SxMAbF1.jpeg",
    },
    {
      title: "Portfolio",
      link: "/portfolio",
      bgImgSrc: "https://i.imgur.com/YjO72ju.jpeg",
    },
    {
      title: "Contact",
      link: "/contact",
      bgImgSrc: "https://i.imgur.com/mzFGQ9t.jpeg",
    },
  ];

  return (
    <div className="px-20 py-16 flex justify-center items-center gap-20 border-b border-black">
      {serviceLinks.map((service, index) => (
        <Link key={index} to={service.link} className="relative">
          <img src={service.bgImgSrc} alt={service.title} />
          <div className="absolute inset-8 flex items-end justify-center text-white text-3xl font-sans-custom">
            {/* {service.title} */}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Services;
