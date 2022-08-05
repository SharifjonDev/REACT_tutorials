import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import "./style/Navbar.scss";

const Navbar = (props) => {
  return (
    <React.Fragment>
      <nav
        className={`navbar navbar-expand-lg navbar__container ${props.classContainer}`}
      >
        <Container>
          <NavLink className="navbar-brand navbar__logo" to="/">
            <img
              src="https://i.ibb.co/JtM3TZX/Group-43.png"
              alt="Group-43"
              border="0"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
              <li className="nav-item">
                <a
                  className=" nav-link nav__link"
                  aria-current="page"
                  href="#course"
                >
                  Kurslar
                </a>
              </li>
              <li className="nav-item">
                <a className=" nav-link nav__link" href="#about">
                  Biz haqimizda
                </a>
              </li>
              <li className="nav-item">
                <a className=" nav-link nav__link" href="#contact">
                  Bog’lanish
                </a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link nav__link__right d-flex text-white`}
                  aria-current="page"
                  href="#accept"
                >
                  Kirish
                  <i className="ri-arrow-right-line"></i>
                </a>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className={`btn dropdown-toggle btn__dropdown text-white  `}
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Uz
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#eng">
                        ENG
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#rus">
                        RUS
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
