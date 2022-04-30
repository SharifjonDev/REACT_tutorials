import React from "react";
import FetchCourses from "../FetchCourses/FetchCourses";
import Col from "../UI/Col";
import Container from "../UI/Container";
import Row from "../UI/Row";
import classes from "./style/Direction.module.scss";

const Direction = () => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col className={"col-xl-12"}>
            <div className={classes.directionInfo}>
              <h2>O’ZINGIZGA MOS YO’NALISHNI TANLANG</h2>
              <h3>
                Biz bilan siz tegishli mavzular bo'yicha bilim va talab
                qilinadigan ko'nikmalarga ega bo'lishingiz mumkin.{" "}
              </h3>
            </div>
            <div className={classes.courseGrid}>
              <FetchCourses />
            </div>
            <div className={classes.billCourseSum}>
              <p>
                To’liq to’lov summasini oldindan to’lov qilganlarga 10%
                chegirmalar mavjud
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Direction;
