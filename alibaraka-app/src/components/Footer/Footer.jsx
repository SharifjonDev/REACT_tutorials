import React from "react";
import { Container, Row, Col } from "reactstrap";
import FooterMenu from "../FooterMenu/FooterMenu";
import "./style/Footer.scss";

const footerDate = [
  {
    title: "About us",
    desc1: "About us",
    desc2: "Our team",
    desc3: "Frequent Questions",
    desc4: "Contact us",
  },
  {
    title: "Products",
    desc1: "Plyonka",
    desc2: "Zajim",
    desc3: "Isitish x Sovutish",
    desc4: "Suv taqsimoti",
  },
  {
    title: "Blog",
    desc1: "10X",
    desc2: "Gardening",
    desc3: "Melon",
    desc4: "Water dist",
  },
];

const Footer = () => {
  const fetchFooterTitle = () => {
    return footerDate.map((item, index) => (
      <div className="footer__box" key={index}>
        <h5>{item.title}</h5>
        <p>{item.desc1}</p>
        <p>{item.desc2}</p>
        <p>{item.desc3}</p>
        <p>{item.desc4}</p>
      </div>
    ));
  };
  return (
    <footer>
      <Container>
        <Row>
          <Col xl="6">
            <div className="footer__location d-flex flex-column">
              <img src="https://svgshare.com/i/gcU.svg" alt="allbaraka" />
              <a href="https://www.google.com/maps/place/Mustaqillik+Maydoni,+Tashkent,+Uzbekistan/@41.3152564,69.2644382,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8b3d21e647ed:0x341f32e430bec39a!8m2!3d41.3152564!4d69.2666269">
                Tashkent, Mustakillik St, <br /> 15 Tel: +998 99 000 00 00
                <br /> E-mail: hello@alibaraka.com
              </a>
            </div>
          </Col>
          <Col xl="6">
            <div className="d-flex justify-content-between">
              {fetchFooterTitle()}
            </div>
          </Col>
          <FooterMenu />
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
