/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Col from "../UI/Col";
import Container from "../UI/Container";
import Row from "../UI/Row";
import classes from "./style/HeaderBottom.module.scss";

const HeaderBottom = () => {
  return (
    <div className={classes.headerBottom}>
      <Container>
        <Row>
          <Col className={"col-xl-7"}>
            <h2>
              Yangi boshlovchilar va amaliyotchilar uchun taniqli IT bozordagi
              so'nggi bilimlarni biz bilan o’rganing.
            </h2>
            <div className="d-flex justify-content-between">
              <div className={classes.information}>
                <h1>15</h1>
                <p>Kurslar</p>
              </div>
              <div className={classes.information}>
                <h1>15</h1>
                <p>Mentorlar</p>
              </div>
              <div className={classes.information}>
                <h1>1500+</h1>
                <p>O’quvchilar</p>
              </div>
            </div>
          </Col>
          <Col className={"col-xl-5"}>
            <img
              className={classes.stamp}
              src="https://svgshare.com/i/gX0.svg"
              title="stampWhite"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBottom;
