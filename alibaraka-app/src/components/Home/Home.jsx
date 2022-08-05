import React from "react";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Headerbottom from "../HeaderBottom/HeaderBottom";
import Section from "../Section/Section";
import Successful from "../Successful/Successful";
import Trusted from "../Trusted/Trusted";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Headerbottom />
      <Section />
      <Trusted />
      <Successful />
      <Contact />
      <Footer />
      <Headerbottom />
    </React.Fragment>
  );
};

export default Home;
