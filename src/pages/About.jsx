import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImgGallery from "../components/ImgGallery";
import Collab from "../components/Collab";
import AboutMe from "../components/AboutMe";
import AboutLearnMore from "../components/AboutLearnMore";

function About() {
  return (
    <>
      <Header />
      <Collab />
      <AboutMe />
      <AboutLearnMore />
      <ImgGallery />
      <Footer />
    </>
  );
}

export default About;
