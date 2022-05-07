import React from "react";
import Navbar from "../../layout/Navbar/Navbar";
import Header from "./Header";
import HeaderBottom from "./HeaderBottom";
import Direction from "./Direction";
import DirectionContent from "./DirectionContent";
import Sertificate from "./Sertificate";
import LearnContent from "./LearnContent";
import MentorCarousel from "./MentorCarousel";
import WeHelper from "./WeHelper";
import "../HomeStyle/_homepage.scss";
import Footer from "../../layout/Footer/Footer";

function Home() {
  return (
    <React.Fragment>
      <Navbar
        className="nav__link__color"
        classContainer="navbar__container__color"
      />
      <Header />
      <HeaderBottom />
      <Direction />
      <DirectionContent />
      <Sertificate />
      <LearnContent />
      <MentorCarousel />
      <WeHelper className="helper__padding" />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
