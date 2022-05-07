import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../HomeStyle/_sertificate.scss";

function Sertificate() {
  return (
    <section>
      <Container>
        <Row>
          <Col xl="12">
            <div className="sertificate__container d-flex">
              <div className="sertificate__title">
                <h1>SERTIFIKAT</h1>
                <h3>
                  Kurslarimizni to’liq tamomlagan o’quvchilarmizga sertifikatlar
                  topshiriladi.
                </h3>
                <img src="https://svgshare.com/i/gXv.svg" alt="stamp" />
              </div>
              <img
                className="setificate__img"
                src="https://i.ibb.co/YyScCsJ/Sertificate.png"
                alt="Sertificate"
                border="0"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Sertificate;
