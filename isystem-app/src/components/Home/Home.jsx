import React from "react";
import Direction from "./Direction/Direction";
import Header from "./Header/Header";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import LookingDirection from "./LookingDirection/LookingDirection";
import MentorCarousel from "./MentorCarousel/MentorCarousel";
import Navbar from "./Navbar/Navbar";
import Sertificate from "./Sertificate/Sertificate";
import WeLearning from "./WeLearning/WeLearning";
import classes from "./style/Home.module.scss";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar
        className={classes.navLinkColor}
        class={classes.navLinkColorIcon}
        classNames={classes.navbar}
      />
      <Header />
      <HeaderBottom />
      <Direction />
      <LookingDirection />
      <Sertificate />
      <WeLearning />
      <MentorCarousel />
    </React.Fragment>
  );
};

export default Home;
