import React, { useState, useEffect } from "react";

function AboutMe() {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    // Dynamically import the image
    const importImage = async () => {
      try {
        const module = await import("../assets/img/aboutMe/aboutme-1.png");
        setImageUrl(module.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    importImage();
  }, []);

  return (
    <div className="flex flex-col md:flex-row border-b border-white">
      {imageUrl && (
        <img className="w-full md:w-2/5" src={imageUrl} alt="About Me" />
      )}
      <div className="p-20 flex flex-col justify-center">
        <div className="text-4xl font-sans-custom">
          Hi, i'm <i>Thanh Thuy</i>
        </div>
        <div className="text-xl pb-4 font-medium">
          Marketing manager / Founder Bachin creative
        </div>
        <div className="text-xl md:pr-24 flex flex-col gap-5">
          <div>
            With over 1 year of experience in social media marketing for the
            women's fashion and children's fashion markets, and 3 years of
            experience as a marketing manager in the Food and beverage industry.
          </div>
          <div>
            I understand what is necessary and important for the success of
            social media accounts. Knowing the algorithms of each social media
            platform and the purposes of each platform is something I deeply
            understand through numerous experiments and results.
          </div>
          <div>
            Additionally, images and services that provide a high level of
            customer experience are what keep customers engaged with the brand.
          </div>
          <div>
            I hope to contribute even more to the development of your brand.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
