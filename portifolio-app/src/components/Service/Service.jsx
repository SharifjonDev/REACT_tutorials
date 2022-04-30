import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Service.css";

const Service = () => {
  return (
    <section id="service" className="service__top">
      <Container>
        <Row>
          <Col lg="12">
            <h6>Features</h6>
            <h2>What service I provide</h2>
          </Col>
          <Col lg="4" md="6" sm="6" className="mb-4">
            <div className="single__service">
              <span className="service__icon">
                <i className="ri-code-line"></i>
              </span>
              <h2>Frontend</h2>
              <p>I will write clean and quality code</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
