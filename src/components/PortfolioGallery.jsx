import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PortfolioGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Dynamically import the images
    const importImages = async () => {
      const imageImports = await Promise.all([
        import("../assets/img/portfolioGallery/portfolio-20.png"),
        import("../assets/img/portfolioGallery/portfolio-21.png"),
        import("../assets/img/portfolioGallery/portfolio-22.png"),
        import("../assets/img/portfolioGallery/portfolio-23.png"),
        import("../assets/img/portfolioGallery/portfolio-24.png"),
        import("../assets/img/portfolioGallery/portfolio-25.png"),
        import("../assets/img/portfolioGallery/portfolio-26.png"),
        import("../assets/img/portfolioGallery/portfolio-27.png"),
        import("../assets/img/portfolioGallery/portfolio-28.png"),
      ]);

      const imageUrls = imageImports.map((module) => module.default);
      setImages(imageUrls);
    };

    importImages();
  }, []);

  const imagesWithDescriptions = [
    {
      src: images[0],
      description: "HaoChi Dimsum Taipei - Hanoi",
      url: "/haochi",
    },
    {
      src: images[1],
      description: "Aman Cafe - Halong, Quangninh",
      url: "/aman",
    },
    {
      src: images[2],
      description: "Yongkang Hotpot & Dimsum Taipei - Hanoi",
      url: "/yongkang",
    },
    {
      src: images[3],
      description: "The Almin Hotel - Halong, Quangninh",
      url: "/the-almin-hotel",
    },
    {
      src: images[4],
      description: "Gu coffee - Halong, Quangninh",
      url: "/gu-coffee",
    },
    {
      src: images[5],
      description: "Mellenim coffee - Hanoi",
      url: "/mellenim-coffee",
    },
    {
      src: images[6],
      description: "1988 Coffee & bar - Halong, Quangninh",
      url: "/1998-coffee-and-bar",
    },
    {
      src: images[7],
      description: "Kopee Coffee - Hanoi",
      url: "/kopee-coffee",
    },
    {
      src: images[8],
      description: "Vuvuzela - Golden Gate, Hanoi",
      url: "/vuvuzela",
    },
  ];

  return (
    <div className="px-40 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 border-b border-black">
      {imagesWithDescriptions.map((image, index) => (
        <Link
          to={`/portfolio${image.url}`}
          key={index}
          className="relative py-10 transition-transform duration-300 hover:scale-105"
        >
          <img
            className="object-cover w-full h-full"
            src={image.src}
            alt={image.description}
          />
          <div className="text-center p-2">
            <p className="text-sm md:text-base font-semibold">
              {image.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PortfolioGallery;
