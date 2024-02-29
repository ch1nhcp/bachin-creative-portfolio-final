import React from "react";

function ImgGallery() {
  const imgLinks = [
    { title: "", url: "https://i.imgur.com/9OQBLNA.png" },
    { title: "", url: "https://i.imgur.com/9OQBLNA.png" },
    { title: "", url: "https://i.imgur.com/9OQBLNA.png" },
    { title: "", url: "https://i.imgur.com/9OQBLNA.png" },
  ];
  return (
    <div className="px-20 py-10 text-center mx-auto border-b border-black">
      <div className="text-4xl font-sans-custom">
        <span>The </span>
        <i>Gallery </i>
        <span className="text-2xl">@bachin-creative</span>
      </div>
      {/* Image wrapper */}
      <div className="pt-10 flex gap-1">
        {imgLinks.map((img, index) => (
          <div className="w-1/4" key={index}>
            <img src={img.url} alt={img.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImgGallery;
