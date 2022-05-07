import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../HomeStyle/_direction.scss";

const initialCourses = [
  {
    courseName: "Foundation",
    duration: "Davomiyligi 3 oy",
    url: "https://svgshare.com/i/gWr.svg",
    title: "Foundation",
  },
  {
    courseName: "Programming",
    duration: "Davomiyligi 4 oy",
    url: "https://svgshare.com/i/gWX.svg",
    title: "Programming",
  },
  {
    courseName: "Web Desigin (UI/UX)",
    duration: "Davomiyligi 3 oy",
    url: "https://svgshare.com/i/gXk.svg",
    title: "Web Desigin (UI/UX)",
  },
  {
    courseName: "Backend",
    duration: "Davomiyligi 4 oy",
    url: "https://svgshare.com/i/gY6.svg",
    title: "Backend",
  },
  {
    courseName: "Frontend",
    duration: "Davomiyligi 4 oy",
    url: "https://svgshare.com/i/gVy.svg",
    title: "Frontend",
  },

  {
    courseName: "Android Devolpment",
    duration: "Davomiyligi 6 oy",
    url: "https://svgshare.com/i/gWg.svg",
    title: "Android Devolpment",
  },
  {
    courseName: "Game Devolpment",
    duration: "Davomiyligi 7 oy",
    url: "https://svgshare.com/i/gXu.svg",
    title: "Game Devolpment",
  },
  {
    courseName: "SMM",
    duration: "Davomiyligi 7 oy",
    url: "https://svgshare.com/i/gXC.svg",
    title: "SMM",
  },
  {
    courseName: "Data Science (AI/ML)",
    duration: "Davomiyligi 7 oy",
    url: "https://svgshare.com/i/gWs.svg",
    title: "Data Science (AI/ML)",
  },
  {
    courseName: "Bootcamp (.NET)",
    duration: "",
    url: "https://svgshare.com/i/gXD.svg",
    title: "Bootcamp (.NET)",
  },
];

function Direction() {
  return (
    <section>
      <Container>
        <Row>
          <Col xl="12">
            <div className="direction__info__title">
              <h2>O’ZINGIZGA MOS YO’NALISHNI TANLANG</h2>
              <h3>
                Biz bilan siz tegishli mavzular bo'yicha bilim va talab
                qilinadigan ko'nikmalarga ega bo'lishingiz mumkin.{" "}
              </h3>
            </div>
            <div className="direction__grid__system">
              {initialCourses.map((item, index) => (
                <div className="direction__courses" key={index}>
                  <div className="d-flex justify-content-between">
                    <div className="direction__courses__title d-flex flex-column justify-content-between">
                      <h2>{item.courseName}</h2>
                      <h3>{item.duration}</h3>
                    </div>
                    <img src={item.url} alt={item.title} />
                  </div>
                </div>
              ))}
            </div>

            <p className="default__desc">
              To’liq to’lov summasini oldindan to’lov qilganlarga 10%
              chegirmalar mavjud
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Direction;
