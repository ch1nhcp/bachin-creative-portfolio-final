import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import OurMission from "../components/OurMission";
import BrandList from "../components/BrandList";
import PortfolioSection from "../components/PortfolioSection";
import ImgGallery from "../components/ImgGallery";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div className="w-full">
      <Header />
      <Hero />
      <Services />
      <OurMission />
      <BrandList />
      <PortfolioSection />
      <ImgGallery />
      <Footer />
    </div>
  );
}

export default Homepage;
