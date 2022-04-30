import React from "react";
import "./Contact.css";
import { Container, Row, Col } from "reactstrap";
import Form from "../Form/Form";
const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Get In Touch</h2>
          </Col>
          <Col lg="6" md="6">
            <div className="contact__info-container d-flex align-itens-center gap-5">
              <div className="single__info-box w-50">
                <h6>Address</h6>
                <p>Namangan, Uzbekistan Country</p>
              </div>
              <div className="single__info-box w-50">
                <h6>Phone</h6>
                <p>
                  <a href="tel:+99871985454">+99897 198 54 54</a>
                </p>
              </div>
            </div>
            <div className="contact__info-container d-flex align-itens-center gap-5">
              <div className="single__info-box w-50">
                <h6>Email</h6>
                <p>sharifjonyulchiboevdev@gmail.com</p>
              </div>
              <div className="single__info-box w-50">
                <h6>Location</h6>
                <p>
                  <a href="https://www.google.com/maps/place/Chartak,+Uzbekistan/@41.0712646,71.789431,13z/data=!3m1!4b1!4m5!3m4!1s0x38bb53171d45fdc1:0x42561f3e8ba4c90e!8m2!3d41.0641324!4d71.8215545">
                    Chartak district
                  </a>
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
