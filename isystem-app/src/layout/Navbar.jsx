import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./style/Navbar.module.scss";
import Container from "../UI/Container";
import Button from "../Button/Button";
import "../../styles/mask/maskIcon.scss";

const Navbar = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <nav
        className={`${classes.navbar} navbar navbar-expand-lg ${props.classNames}`}
      >
        <Container>
          <NavLink className={`${classes["navbar-brand"]} navbar-brand`} to="/">
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
            <ul
              className={`navbar-nav me-auto mb-2 mb-lg-0 ${props.className}`}
            >
              <li className="nav-item">
                <NavLink
                  className={`${classes.navLink} nav-link`}
                  aria-current="page"
                  to="/about-blog"
                >
                  Kurslar
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`${classes.navLink} nav-link`} to="/">
                  Biz haqimizda
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={`${classes.navLink} nav-link`}
                  to="/cantact-blog"
                >
                  Bog’lanish
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={`${classes.navLinkRight} ${props.className} nav-link`}
                  aria-current="page"
                  to="/about-blog"
                >
                  Kirish
                  <span className={`icon icon-rightPointer ${props.class} `} />
                </NavLink>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <Button
                    className={`btn-dropdown dropdown-toggle ${props.className}`}
                    type="button"
                    id="dropdownMenuButton1"
                    dataBsToggle="dropdown"
                    ariaExpanded="false"
                  >
                    Uz
                  </Button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
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
