import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Services() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const imageImports = await Promise.all([
        import("../assets/img/services/services-01.png"),
        import("../assets/img/services/services-02.png"),
        import("../assets/img/services/services-03.png"),
      ]);

      const imageUrls = imageImports.map((module) => module.default);
      setImages(imageUrls);
    };

    importImages();
  }, []);

  const serviceLinks = [
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Portfolio",
      link: "/portfolio",
    },
    {
      title: "Contact",
      link: "/contact",
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
          <img src={images[index]} alt={service.title} />
          <div className="absolute inset-12 flex items-end justify-center text-white text-4xl font-sans-custom">
            <i>{service.title}</i>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Services;
