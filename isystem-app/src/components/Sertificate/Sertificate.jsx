/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Container from "../UI/Container";
import Row from "../UI/Row";
import Col from "../UI/Col";
import classes from "./style/Sertificate.module.scss";

const Sertificate = () => {
  return (
    <React.Fragment>
      <Container>
        <div className={classes.sertificateContainer}>
          <Row>
            <Col className={"col-xl-6"}>
              <h1>SERTIFIKAT</h1>
              <h3>
                Kurslarimizni to’liq tamomlagan o’quvchilarmizga sertifikatlar
                topshiriladi.
              </h3>
              <img
                className={classes.stampSertificate}
                src="https://svgshare.com/i/gXv.svg"
                title="stamp"
              />
            </Col>
            <Col
              className={
                "col-xl-6 d-flex justify-content-end align-items-center"
              }
            >
              <img
                className={classes.sertificatePicture}
                src="https://i.ibb.co/YyScCsJ/Sertificate.png"
                alt="Sertificate"
                border="0"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Sertificate;
