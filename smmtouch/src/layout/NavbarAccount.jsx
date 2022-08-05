import React, { useState } from "react";
import Logo1 from "../image/smmtouch_logo_blue.svg";
import i18next from "i18next";
import { NavLink } from "react-router-dom";
import "./NavbarAccount.css";

const language = [
  {
    lgl: "ru",
    title: "Русский",
  },
  {
    lgl: "gb",
    title: "English",
  },
  {
    lgl: "de",
    title: "Deutsch",
  },
  {
    lgl: "es",
    title: "Español",
  },
  {
    lgl: "pt",
    title: "Português",
  },
  {
    lgl: "it",
    title: "Italiano",
  },
  {
    lgl: "tr",
    title: "Türkçe",
  },
];

const NavbarAccount = (props) => {
  const [value, setValue] = useState();

  return (
    <nav className={props.className}>
      <div className="navbar">
        <div className="navbar-brand">
          <NavLink to="/">
            <img src={Logo1} alt="" />
          </NavLink>
        </div>
        <div className="drapdown_new">
          <div className="d-flex align-items-center">
            <h5>{value > "" ? value : "gb"}</h5>
            <span className="icon icon-arrow" />
          </div>
          <ul className="dropdown_menu">
            {language.map((item, index) => (
              <li className="dropdown_item" key={index}>
                <button
                  className="btn btn-dropdown"
                  onClick={(e) => {
                    i18next.changeLanguage(item.lgl);
                    setValue(item.lgl);
                  }}
                  value={item.lgl}
                  type="button"
                >
                  <span className="d-flex align-items-center">
                    <p>{item.title}</p>
                    <img src={`https://flagcdn.com/${item.lgl}.svg`} alt="" />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarAccount;
