import React from "react";
import { Col, Row } from "reactstrap";
import "./style/FooterMenu.scss";

const FooterMenu = () => {
  return (
    <div className="footer__menu">
      <Row>
        <Col xl="6">
          <h5 className="footerMenu__title">Все права защищены.</h5>
        </Col>
        <Col xl="6 d-flex justify-content-end">
          <div className="footer__logo d-flex">
            <h5 className="footerMenu__title">Разработано в</h5>
            <img src="https://svgshare.com/i/gbz.svg" alt="logo" />
            <img src="https://svgshare.com/i/gbz.svg" alt="logo" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default FooterMenu;
