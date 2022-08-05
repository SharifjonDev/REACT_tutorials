/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./style/Header.scss";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header id="home">
      <Container>
        <Row>
          <Col xl="6" style={{ zIndex: 1 }}>
            <h1>ВСЕ ДЛЯ ТЕПЛИЦ</h1>
            <p>
              Here will be brief information about our company and some of
              advantages of our offers. Here will be brief information about our
              company.
            </p>
            <Button className="btn-explore">
              EXPLORE
              <span>
                <i className="ri-arrow-right-line"></i>
              </span>
            </Button>
          </Col>
          <Col xl="6" style={{ zIndex: 0 }}>
            <div className="position-absolute d-flex justify-content-center align-items-center">
              <div className="rectangle__line d-flex justify-content-center align-items-center">
                <div className="circle_line">
                  <img src="https://svgshare.com/i/gbm.svg" title="vector" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
