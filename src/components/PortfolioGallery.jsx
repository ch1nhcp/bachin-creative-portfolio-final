import React from "react";
import { Link } from "react-router-dom";

function PortfolioGallery() {
  const imagesWithDescriptions = [
    {
      src: "https://i.imgur.com/PYVhStp.png",
      description: "HaoChi Dimsum Taipei - Hanoi",
      url: "/haochi",
    },
    {
      src: "https://i.imgur.com/hnkkLDw.png",
      description: "Aman Cafe - Halong, Quangninh",
      url: "/aman",
    },
    {
      src: "https://i.imgur.com/Pw5HCu6.png",
      description: "Yongkang Hotpot & Dimsum Taipei - Hanoi",
      url: "/yongkang",
    },
    {
      src: "https://i.imgur.com/tSMzklP.png",
      description: "The Almin Hotel - Halong, Quangninh",
      url: "/the-almin-hotel",
    },
    {
      src: "https://i.imgur.com/771VziN.png",
      description: "Gu coffee - Halong, Quangninh",
      url: "/gu-coffee",
    },
    {
      src: "https://i.imgur.com/yupu9Rn.png",
      description: "Mellenim coffee - Hanoi",
      url: "/mellenim-coffee",
    },
    {
      src: "https://i.imgur.com/KMTvI6H.png",
      description: "1988 Coffee & bar - Halong, Quangninh",
      url: "/1998-coffee-and-bar",
    },
    {
      src: "https://i.imgur.com/D3ttHJi.png",
      description: "Kopee Coffee - Hanoi",
      url: "/kopee-coffee",
    },
    {
      src: "https://i.imgur.com/mQTJncT.png",
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
            alt={{ index }}
          />
          <div className=" text-center p-2">
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
