import React, { useState, useEffect } from "react";

function ImgGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Dynamically import the images
    const importImages = async () => {
      const imageImports = await Promise.all([
        import("../assets/img/gallery/gallery-1.png"),
        import("../assets/img/gallery/gallery-2.png"),
        import("../assets/img/gallery/gallery-3.png"),
        import("../assets/img/gallery/gallery-4.png"),
      ]);

      const imageUrls = imageImports.map((module) => module.default);
      setImages(imageUrls);
    };

    importImages();
  }, []);

  return (
    <div className="p-20 text-center mx-auto border-b border-black">
      <div className="text-4xl font-sans-custom">
        <span>The </span>
        <i>Gallery </i>
        <span className="text-2xl">@bachin-creative</span>
      </div>
      {/* Image wrapper */}
      <div className="pt-10 flex gap-1">
        {images.map((imageUrl, index) => (
          <div className="w-1/4" key={index}>
            <img src={imageUrl} alt={`${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImgGallery;
