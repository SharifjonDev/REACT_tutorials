import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./style/Trusted.scss";

const trustedCollapse = [
  {
    title: "Do you provide customer support?",
    desc: " Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.",
    target: "collapseExample",
    class: "",
  },
  {
    title: "How much traffic can the hosting handle?",
    desc: " Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.",
    target: "collapseExample1",
    class: "colorYellow",
  },
  {
    title: "Do you have any questions for us?",
    desc: " Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.",
    target: "collapseExample2",
    class: "",
  },
  {
    title: "What is your return policy?",
    desc: " Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.",
    target: "collapseExample3",
    class: "colorYellow",
  },
];

const Trusted = () => {
  const fetchTrusted = () => {
    return trustedCollapse.map((item, index) => (
      <div key={index}>
        <button
          className="btn btn-collepse w-100"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${item.target}`}
          aria-expanded="false"
          aria-controls={item.target}
        >
          <div className="d-flex justify-content-between">
            <h3 className={item.class}>{item.title}</h3>
            <span>
              <i className="ri-add-line"></i>
            </span>
          </div>
        </button>
        <div className="collapse" id={item.target}>
          <div className="card card-body">{item.desc}</div>
        </div>
      </div>
    ));
  };
  return (
    <div className="trusted position-relative" id="blog">
      <img
        className="trusted__flag"
        src="https://i.ibb.co/gvd2JdF/flags-white-1.png"
        alt=""
      />
      <Container>
        <Row>
          <Col xl="7 offset-5">
            <div className="trusted__title">
              <h1>See why we are trusted the world over</h1>
              <p>
                The first rule of any technology used in a business is that
                automation applied to an efficient operation will magnify the
                efficiency.
              </p>
              <div className="collapse__box d-flex flex-column">
                {fetchTrusted()}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trusted;
