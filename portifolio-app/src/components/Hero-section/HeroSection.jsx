/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./HeroSection.css";
import { Container, Row, Col } from "reactstrap";

const HeroSection = () => {
  return (
    <section className="hero__section" id="home">
      <Container>
        <Row>
          <Col lg="6" sm="6">
            <div className="hero__content">
              <p className="mb-3">Welcome to my world!</p>
              <div className="d-flex">
                <h2 className="hero__title">
                  I'm
                  <span> a Frontend Developer</span>
                </h2>
              </div>
              <p className="hero__desc">
                i am a web programmer. I have been studying this field for 8
                months. I don't have any experience yet. My goal is to gain
                experience working on real projects and become a great
                programmer.
              </p>
              <div className="hero__btns d-flex align-items-center gap-4">
                <button className="btn hire__btn">
                  <a
                    download={
                      "file:///C:/Users/Sharifjon/OneDrive/Desktop/Sharifjon's%20Resume.pdf"
                    }
                    href="#"
                  >
                    Hiro Me
                  </a>
                </button>
                <button className="btn">Contact</button>
              </div>
            </div>
          </Col>
          <Col lg="6" sm="6">
            <div className="hero__img d-flex justify-content-end">
              <img
                src="https://i.ibb.co/zhjmKxC/IMG20210918180725.jpg"
                alt="IMG-20210922-174653-345"
                border="0"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
