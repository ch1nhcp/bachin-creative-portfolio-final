import React from "react";

function BrandList() {
  const brandLogos = [
    { title: "Yongkang", src: "https://i.imgur.com/G9rrV9P.png" },
    { title: "The Almin", src: "https://i.imgur.com/6PTGvX2.png" },
    { title: "Hao Chi", src: "https://i.imgur.com/VNzoRMu.png" },
    { title: "Vuvuzela", src: "https://i.imgur.com/hGrccxF.png" },
    { title: "Aman Cafe", src: "https://i.imgur.com/ft64oGC.png" },
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
