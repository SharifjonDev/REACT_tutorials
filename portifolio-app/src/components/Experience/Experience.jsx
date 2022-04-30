import React from "react";
import "./Experience.css";

import { Container, Row, Col } from "reactstrap";

const Experience = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Experince</h2>
          </Col>

          <Col lg="6" md="6">
            <div className="single__experience-container">
              <div className="single__experience">
                <span className="experience__icon">
                  <i className="ri-briefcase-line"></i>
                </span>
                <h6>2021 - 2022</h6>
                <p>Remote / Full Time</p>
                <h5>Sr. Frontend Developer</h5>
                <p>
                  I attended the new website of Isystem IT Academy. This site
                  was built with the help of React Js
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
