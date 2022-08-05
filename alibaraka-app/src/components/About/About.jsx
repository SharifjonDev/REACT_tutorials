import React from "react";
import { Container, Row, Col } from "reactstrap";
import Button from "../Button/Button";
import "./style/About.scss";

const About = () => {
  return (
    <div className="about__container" id="aboutUs">
      <div className="container-fluid">
        <img
          className="about__cloudy"
          src="https://svgshare.com/i/gc5.svg"
          alt=""
        />
      </div>
      <Container>
        <Row>
          <Col xl="6">
            <div className="about__title">
              <h2>little ABout our company </h2>
              <p>
                "Your work is going to fill a large part of your life, and the
                only way to be truly satisfied is to do what you believe is
                great work. And the only way to do great work is to love what
                you do."
              </p>
              <div className="d-flex">
                <Button className="btn-about">MORE ABOUT</Button>
                <Button className="btn-about">OUR YOUTUBE</Button>
              </div>
            </div>
          </Col>
          <Col xl="6 position-relative">
            <div className="vektor1 text-end">
              <img src="https://svgshare.com/i/gad.svg" alt="Title" />
            </div>
            <div className="vektor2">
              <img src="https://svgshare.com/i/gcD.svg" alt="title" />
            </div>
            <div className="vektor3">
              <img src="https://svgshare.com/i/gbb.svg" alt="title" />
              <div className="line__vektor3"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
