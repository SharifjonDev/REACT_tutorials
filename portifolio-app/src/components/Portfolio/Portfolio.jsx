import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Portfolio.css";

const portfolio = [
  {
    imgUrl: "https://svgshare.com/i/gWX.svg",
    title: "Only Html and Css",
    url: "https://yulchiboev.netlify.app/",
  },
  {
    imgUrl: "https://svgshare.com/i/gXu.svg",
    title: "A Game Created Using Javascript",
    url: "https://rickgame.netlify.app",
  },
  {
    imgUrl: "https://svgshare.com/i/gVy.svg",
    title: "A Site Created Using One-Page React Js",
    url: "https://webdeveloperwebsite.netlify.app",
  },
  {
    imgUrl: "https://svgshare.com/i/gWs.svg",
    title: "Guess My Number Game",
    url: "https://guessmynumberwebsite.netlify.app/",
  },
  {
    imgUrl: "https://svgshare.com/i/gXD.svg",
    title: "Ali Baraka website (only desktop)",
    url: "https://alibaraka.netlify.app/",
  },
  {
    imgUrl: "https://svgshare.com/i/gXk.svg",
    title: "Menejeer site",
    url: "https://menejeerwebsite.netlify.app/",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="portfolio__top">
            <h6>Explore my work and a give a feedback</h6>
            <h2>Portfolio</h2>
          </Col>

          {portfolio.map((item, index) => (
            <Col key={index} lg="4" md="6" sm="6">
              <div className="portfolio__card">
                <div className="portfolio__img">
                  <img src={item.imgUrl} alt="" className="w-100" />
                </div>
                <div className="portfolio__content">
                  <h5>{item.title}</h5>
                  <a href={item.url}>View live demo</a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
