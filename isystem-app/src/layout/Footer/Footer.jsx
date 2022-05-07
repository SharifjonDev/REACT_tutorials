import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./style/footer.scss";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xl="8">
            <div className="d-flex justify-content-between">
              <div className="footer__box d-flex flex-column justify-content-between">
                <img src="https://i.ibb.co/Z8XkMrM/isystem.png" alt="isystem" />
                <a href="Tel:+998 99 882 60 60">+99899 882 60 60</a>
                <a href="Tel:+998 99 884 60 60">+99899 884 60 60</a>
              </div>
              <div className="footer__box d-flex flex-column justify-content-between">
                <Link to="/application">Ariza</Link>
                <Link to="/contact">Bog’lanish</Link>
                <Link to="/about">Biz haqimizda</Link>
              </div>
              <div className="footer__box d-flex flex-column justify-content-between">
                <Link to="/instagram">
                  <img
                    src="https://i.ibb.co/YkzsPcj/Subtract.png"
                    alt="Subtract"
                  />
                  isystem.uz
                </Link>
                <Link to="/facebook">
                  <img
                    src="https://i.ibb.co/QXDpsJp/Subtract1.png"
                    alt="Subtract1"
                  />
                  isystem.uz
                </Link>
                <Link to="/telegram">
                  <img
                    src="https://i.ibb.co/59PqDN1/Subtract2.png"
                    alt="Subtract2"
                  />
                  isystem.uz
                </Link>
              </div>
            </div>
          </Col>
          <Col xl="4">
            <div className="footer__location d-flex">
              <img
                src="https://i.ibb.co/Gn4k8dD/Group-1112.png"
                alt="Group-1112"
              />
              <a href="https://www.google.com/maps/place/iSystem+IT+academy/@41.3245741,69.3228385,17z/data=!4m12!1m6!3m5!1s0x38aef572e5842f55:0xa87fc261e04f75ea!2siSystem+IT+academy!8m2!3d41.3245741!4d69.3250272!3m4!1s0x38aef572e5842f55:0xa87fc261e04f75ea!8m2!3d41.3245741!4d69.3250272">
                Toshkent shahar Mirzo Ulugbek tumani Mustaqillik prospekti Mirzo
                Ulugbek ko’ch. 54A
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
