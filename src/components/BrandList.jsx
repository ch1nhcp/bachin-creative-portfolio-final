import React, { useEffect, useState } from "react";

function BrandList() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Dynamically import the images
    const importImages = async () => {
      const imageImports = await Promise.all([
        import("../assets/img/brandlist/brandlist-1.png"),
        import("../assets/img/brandlist/brandlist-2.png"),
        import("../assets/img/brandlist/brandlist-3.png"),
        import("../assets/img/brandlist/brandlist-4.png"),
        import("../assets/img/brandlist/brandlist-5.png"),
      ]);

      const imageUrls = imageImports.map((module) => module.default);
      setImages(imageUrls);
    };

    importImages();
  }, []);

  const brandLogos = [
    { title: "Yongkang", src: images[0] },
    { title: "The Almin", src: images[1] },
    { title: "Hao Chi", src: images[2] },
    { title: "Vuvuzela", src: images[3] },
    { title: "Aman Cafe", src: images[4] },
  ];

  return (
    <div className="flex px-20 items-center justify-between gap-20 border-b border-black">
      {brandLogos.map((brand, index) => (
        <div key={index} className="w-1/5">
          <img src={brand.src} alt={brand.title} />
        </div>
      ))}
    </div>
  );
}

export default BrandList;
