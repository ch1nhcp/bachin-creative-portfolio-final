import React, { useEffect, useState } from "react";

function PortfolioSection() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Dynamically import the images
    const importImages = async () => {
      const imageImports = await Promise.all([
        import("../assets/img/portfolioSection/portfolioSection-1.png"),
        import("../assets/img/portfolioSection/portfolioSection-2.png"),
        import("../assets/img/portfolioSection/portfolioSection-3.png"),
      ]);

      const imageUrls = imageImports.map((module) => module.default);
      setImages(imageUrls);
    };

    importImages();
  }, []);

  const imgPortfolio = [
    { title: "Kopee Coffee - Hanoi", url: images[0] },
    { title: "The Almin Hotel", url: images[1] },
    { title: "Yongkang Hotpot & Dimsum Taipei", url: images[2] },
  ];

  return (
    <div className="p-20 text-center border-b border-black">
      <div className="text-4xl font-sans-custom">
        View Our
        <i> Portfolio</i>
      </div>
      <div className="text-xl pb-8 font-medium">
        Check out our latest projects and results in our amazing client
        portfolio!
      </div>
      {/* img wrapper */}
      <div className="px-40 flex items-center justify-between gap-10">
        {imgPortfolio.map((prj, index) => (
          <div key={index}>
            <img src={prj.url} alt={prj.title} />
            <div className="py-4 flex items-end justify-center font-medium">
              {prj.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioSection;
