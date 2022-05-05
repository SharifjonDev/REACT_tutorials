import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../HomeStyle/HomeStyle.scss";

function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <Col xl="6">
            <h1>Ta'lim Bu To'g'ri, Ishonchli Sarmoya. </h1>
            <img
              className="restange-icon"
              src="https://i.ibb.co/ZRsFRxt/Group-1178.png"
              alt="Group-1178"
              border="0"
            />
            <img
              className="brakets-icon"
              src="https://i.ibb.co/LP4qNkM/Frame-8.png"
              alt="Frame-8"
              border="0"
            />
            <img
              src="https://i.ibb.co/pZs1BsH/Group-1177.png"
              alt="Group-1177"
              border="0"
            />
            <br />
            <Button className="btn-application d-flex align-items-center">
              Ariza qoldirish
              <i className="ri-arrow-right-up-line"></i>
            </Button>
          </Col>
          <Col xl="6">
            <img
              className="alphabet1"
              src="https://svgshare.com/i/gYY.svg"
              alt=""
            />
            <img
              className="alphabet2"
              src="https://svgshare.com/i/gYN.svg"
              alt=""
            />
            <img
              className="manPicture"
              src="https://svgshare.com/i/gXj.svg"
              alt="wonderfulboy"
            />
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
