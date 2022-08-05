import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Music from "../audio/music.mp3";
import { Howl, Howler } from "howler";
import FetchColor from "../components/FetchColor";

const audio = [
  {
    sound: Music,
    label: "Home",
    link: "/",
  },
  {
    sound: Music,
    label: "About",
    link: "/about",
  },
  {
    sound: Music,
    label: "Service",
    link: "/service",
  },
  {
    sound: Music,
    label: "Contect",
    link: "/contect",
  },
];

const Navbar = () => {
  const sound = new Howl({
    src: [Music],
  });
  sound.play();
  Howler.volume(0.1);

  const renderButtonSound = () => {
    return audio.map((item, index) => (
      <li className="nav-item" key={index}>
        <NavLink className="nav-link" to={item.link} onClick={item.sound}>
          {item.label}
        </NavLink>
      </li>
    ));
  };

  return (
    <nav className="navbar">
      <div className="container">
        <FetchColor />
        <ul className="navbar-nav">{renderButtonSound()}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
