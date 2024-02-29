import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PortfolioHero from "../components/PortfolioHero";
import PortfolioGallery from "../components/PortfolioGallery";
import BrandList from "../components/BrandList";

function Portfolio() {
  return (
    <>
      <Header />
      <PortfolioHero />
      <PortfolioGallery />
      <BrandList />
      <Footer />
    </>
  );
}

export default Portfolio;
