import React from "react";

function PortfolioSection() {
  const imgPortfolio = [
    {
      title: "Kopee Coffee - Hanoi",
      url: "https://i.imgur.com/pdVABnj.png",
    },
    {
      title: "The Almin Hotel",
      url: "https://i.imgur.com/tqIpIU4.png",
    },
    {
      title: "Yongkang Hotpot & Dimsum Taipei ",
      url: "https://i.imgur.com/4nuQnUU.png",
    },
  ];
  return (
    <div className="p-20 text-center border-b border-black">
      <div className="text-3xl font-sans-custom">
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
          <div className="" index={index}>
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
