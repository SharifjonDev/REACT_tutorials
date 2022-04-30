/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Container from "../UI/Container";
import Row from "../UI/Row";
import Col from "../UI/Col";
import Button from "../Button/Button";
import classes from "./style/Header.module.scss";

const Header = () => {
  return (
    <div className={classes.header}>
      <Container>
        <Row>
          <Col className={"col-xl-6"}>
            <h1>Ta'lim Bu To'g'ri, Ishonchli Sarmoya. </h1>
            <span
              className={`icon icon-restange ${classes.iconRestange}`}
            ></span>
            <img
              className={classes["brakets-position"]}
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
            <Button className={"btn-application"}>
              Ariza qoldirish
              <span className={`icon icon-Restange`}></span>
            </Button>
          </Col>
          <Col className={"col-xl-6"}>
            <img
              className={classes.homeBackground}
              src="https://svgshare.com/i/gYY.svg"
              title=""
            />
            <img
              className={classes.homeBackground2}
              src="https://svgshare.com/i/gYN.svg"
              title=""
            />
            <img
              className={classes.manPicture}
              src="https://svgshare.com/i/gXj.svg"
              title="wonderfulboy"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
