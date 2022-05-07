import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../HomeStyle/_directioncontent.scss";
function DirectionContent() {
  return (
    <section>
      <Container>
        <Row>
          <Col xl="12">
            <div className="direction__content__container bg-black">
              <h1>O’zingizga mos yo’nalishni topdingizmi ?</h1>

              <Button className="btn__helper d-flex">
                Biz ko’maklashamiz
                <i className="ri-arrow-right-line"></i>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DirectionContent;
