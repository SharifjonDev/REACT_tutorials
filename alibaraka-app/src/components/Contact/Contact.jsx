import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./style/Contact.scss";
import Button from "../Button/Button";

const Contact = () => {
  return (
    <div className="contact__container" id="contact">
      <Container>
        <Row>
          <Col xl="6 offset-3">
            <div className="contact__box">
              <div className="restange__green"></div>
              <div className="circle__orenge"></div>
              <img src="https://i.ibb.co/02Y0z5c/IMAGE.png" alt="IMAGEPhoto" />
              <div className="contact__title text-center d-flex flex-column align-items-center">
                <h2>Still are you hesitating?</h2>
                <p>
                  Your work is going to fill a large part of your life, and the
                  only way to be truly satisfied.
                </p>
              </div>
              <div className="contact__form">
                <form>
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    placeholder="Enter your name"
                    id="email"
                  />
                  <label htmlFor="number"></label>
                  <input
                    type="number"
                    placeholder="Enter phone tel"
                    id="number"
                  />
                  <textarea
                    className="w-100"
                    placeholder="Enter your subject"
                  ></textarea>
                  <Button className="btn-message w-100">SEND MESSAGE</Button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
