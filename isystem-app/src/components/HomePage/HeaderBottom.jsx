import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../HomeStyle/_headerbottom.scss";

function HeaderBottom() {
  return (
    <div className="header__content">
      <Container>
        <Row>
          <Col xl="7">
            <h2>
              Yangi boshlovchilar va amaliyotchilar uchun taniqli IT bozordagi
              so'nggi bilimlarni biz bilan o’rganing.
            </h2>
            <div className="d-flex justify-content-between">
              <div className="header__information">
                <h1>15</h1>
                <p>Kurslar</p>
              </div>
              <div className="header__information">
                <h1>15</h1>
                <p>Mentorlar</p>
              </div>
              <div className="header__information">
                <h1>1500+</h1>
                <p>O’quvchilar</p>
              </div>
            </div>
          </Col>
          <Col xl="5">
            <img
              className="stamp__logo"
              src="https://i.ibb.co/bLNL7S3/Group-1281.png"
              alt="stampWhite"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderBottom;
