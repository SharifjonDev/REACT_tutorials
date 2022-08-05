import React, { useRef, useEffect } from "react";

import "./style/Navbar.scss";

const navLinks = [
  { display: "Products", url: "#products" },
  { display: "About us", url: "#aboutUs" },
  { display: "Blog", url: "#blog" },
  { display: "Contact", url: "#contact" },
];

const Navbar = () => {
  const NavbarRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        NavbarRef.current.classList.add("navbar__shrink");
      } else {
        NavbarRef.current.classList.remove("navbar__shrink");
      }
    });
  }, []);

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light" ref={NavbarRef}>
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src="https://svgshare.com/i/g_o.svg" alt="allbaraka" />
          </a>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              {navLinks.map((item, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link" aria-current="page" href={item.url}>
                    {item.display}
                  </a>
                </li>
              ))}

              <li className="nav-item d-flex align-items-center">
                <span>
                  <img src="https://svgshare.com/i/ga9.svg" alt="phone" />
                </span>
                <div className="d-flex flex-column phoneNumber">
                  <a href="tel:+998950048090">95-004-80-90 </a>
                  <a href="tel:+998946414000">94-641-40-00</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
