import React from "react";
import { Link, NavLink } from "react-router-dom";
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
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${props.display}`}>
              <li className="nav-item">
                <NavLink
                  className=" nav-link nav__link"
                  aria-current="page"
                  to="/course-blog"
                >
                  Kurslar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className=" nav-link nav__link" to="/">
                  Biz haqimizda
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className=" nav-link nav__link" to="/cantact-blog">
                  Bog’lanish
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={`nav-link nav__link__right d-flex ${props.className}`}
                  aria-current="page"
                  to="/about-blog"
                >
                  Kirish
                  <i className="ri-arrow-right-line"></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className={`btn dropdown-toggle btn__dropdown ${props.className}`}
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
                      <Link className="dropdown-item" to="/eng">
                        ENG
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/rus">
                        RUS
                      </Link>
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
