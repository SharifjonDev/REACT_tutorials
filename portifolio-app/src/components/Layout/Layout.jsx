import React from "react";
import About from "../About/About";
import Header from "../Header/Header";
import HeroSection from "../Hero-section/HeroSection";
import Service from "../Service/Service";
import Experience from "../Experience/Experience";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <About />
      <Service />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
