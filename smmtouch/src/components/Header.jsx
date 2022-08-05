import React from "react";
import "../styles/Header.css";
import Promo from "../image/promo.svg";
import { useTranslation } from "react-i18next";
import Navbar from "../layout/Navbar";

const Header = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Navbar />
      <header>
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-sm-12">
              <div className="header__title">
                <h1>{t("header_title")}</h1>
                <p>{t("header_prag")}</p>
                <button className="btn btn_ins d-flex align-items-center">
                  <i className="ri-instagram-line" /> {t("header_btn")}
                </button>
              </div>
            </div>
            <div className="col-xl-5 col-sm-12">
              <img className="header_img" src={Promo} alt="logo" />
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
