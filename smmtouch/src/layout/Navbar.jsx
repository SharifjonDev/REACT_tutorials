import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Logo from "../image/smmtouch_logo.svg";
import Logo1 from "../image/smmtouch_logo_blue.svg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

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

const Navbar = (props) => {
  const [extend, setExtend] = useState(false);
  const [value, setValue] = useState();
  const headerRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });
  }, []);

  return (
    <React.Fragment>
      <nav ref={headerRef}>
        <div className="container">
          <div className="navbar">
            <button
              className="btn nav__toggler ri-menu-line"
              onClick={() => setExtend(true)}
            ></button>
            <div className="navbar-brand">
              <NavLink to="/" className="navbar-logo">
                <img src={Logo} alt="light" className="header_nav_img" />
                <img src={Logo1} alt="dark" className="header__shrink_img" />
              </NavLink>
              <ul className="nav__menu">
                <li className="nav_item">{t("ins")}</li>
                <li className="nav_item">{t("vk")}</li>
                <li className="nav_item">{t("tt")}</li>
                <li className="nav_item">{t("yt")}</li>
              </ul>
            </div>
            <div className="d-flex align-items-center">
              <div className="drapdown">
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
                          <img
                            src={`https://flagcdn.com/${item.lgl}.svg`}
                            alt=""
                          />
                          {item.title}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <NavLink to="/account" className="account_link">
                {t("account")}
              </NavLink>
            </div>
          </div>
        </div>
        {extend && (
          <div className="mobile_container" onClick={() => setExtend(false)}>
            <div className="container">
              <ul className="nav__menu">
                <li className="nav_item">
                  <button
                    className="btn btn-arrow"
                    onClick={() => setExtend(false)}
                  >
                    <i className="ri-arrow-left-line" />
                    Menu
                  </button>
                </li>
                <li className="nav_item">
                  <i className="ri-instagram-line"></i>
                  {t("ins")}
                </li>
                <li className="nav_item">{t("vk")}</li>
                <li className="nav_item">{t("tt")}</li>
                <li className="nav_item">
                  <i className="ri-youtube-fill"></i>
                  {t("yt")}
                </li>
                <NavLink to="/account" className="account_link">
                  <i className="ri-account-circle-line"></i>
                  {t("account")}
                </NavLink>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
