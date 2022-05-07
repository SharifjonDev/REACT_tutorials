import React from "react";
import { Container, Row, Col, Label, Input, Button } from "reactstrap";
import "../HomeStyle/_wehelper.scss";

function WeHelper(props) {
  return (
    <div className={`bg-black ${props.className}`}>
      <Container>
        <Row>
          <Col xl="12">
            <div className="helper__box d-flex">
              <div className="helper__title">
                <h3>Biz sizga tanlashda yordam beramiz!</h3>
                <p>
                  Savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz,
                  raqamingizni qoldiring: biz barcha savollaringizga javob
                  berish uchun qo'ng'iroq qilamiz.
                </p>
              </div>
              <form className="helper__form ">
                <Input
                  className="w-100"
                  type="text"
                  placeholder="Ismingiz"
                  id="name"
                  required
                />
                <Label htmlFor="name" />
                <div className="d-flex justify-content-between">
                  <Input
                    type="number"
                    placeholder="Telefon raqaminigiz"
                    id="number"
                    required
                  />
                  <Label htmlFor="number" />

                  <Input
                    type="email"
                    placeholder="E-mail"
                    id="email"
                    required
                  />
                  <Label htmlFor="email" />
                </div>
                <div className="w-100 d-flex justify-content-end">
                  <Button className="btn__send d-flex bg-black">
                    Jo’natish
                    <i className="ri-arrow-right-line"></i>
                  </Button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WeHelper;
