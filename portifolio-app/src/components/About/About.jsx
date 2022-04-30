/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "./About.css";
import Award from "./Award";
import Education from "./Education";
import Skills from "./Skills";

const About = () => {
  const [aboutFilter, setAboutilter] = useState("ABOUT");
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About Me</h2>
          </Col>
          <Col lg="4" md="4">
            <div className="about__btns d-flex flex-column align-items-center">
              <button
                className={`about__btn ${
                  aboutFilter === "ABOUT" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutilter("ABOUT")}
              >
                About me
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === "EDUCATION" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutilter("EDUCATION")}
              >
                Education
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === "SKILLS" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutilter("SKILLS")}
              >
                Skills
              </button>
              <button
                className={`about__btn ${
                  aboutFilter === "LANGUAGE" ? "about__btn-active" : ""
                }`}
                onClick={() => setAboutilter("LANGUAGE")}
              >
                LANGUAGE
              </button>
            </div>
          </Col>
          <Col lg="8" md="8">
            {aboutFilter === "ABOUT" && (
              <div className="about__content__wrapper d-flex gap-5">
                <div className="about__img w-25">
                  <img
                    className="w-100"
                    src="https://i.ibb.co/Gp82RNx/IMG-20210922-174653-345.jpg"
                    alt="200016200365-456985"
                    border="0"
                  />
                </div>
                <div className="about__content w-75">
                  <h2>My name's Sharifjon Yulchiboev</h2>
                  <p>
                    I'm 20 years old. I'm very interested in programming.I'm
                    currently training on React js. My dream is to grow as a
                    senior developer
                  </p>
                  <div className="social__links">
                    <h6 className="mb-3">Connect with me:</h6>
                    <span>
                      <a href="https://www.instagram.com/p/CciDZFgMUo2/">
                        <i className="ri-instagram-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://t.me/Redux_React">
                        <i className="ri-telegram-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://www.linkedin.com/feed/">
                        <i className="ri-linkedin-line"></i>
                      </a>
                    </span>
                    <span>
                      <a href="https://github.com/SharifjonDev">
                        <i className="ri-github-line"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {aboutFilter === "EDUCATION" && <Education />}
            {aboutFilter === "SKILLS" && <Skills />}
            {aboutFilter === "LANGUAGE" && <Award />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
