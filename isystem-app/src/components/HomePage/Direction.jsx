import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../HomeStyle/_direction.scss";

const initialCourses = [
  {
    courseName: "Foundation",
    duration: "Davomiyligi 3 oy",
    url: "https://i.ibb.co/5RdLccv/logo1.png",
    title: "Foundation",
  },
  {
    courseName: "Programming",
    duration: "Davomiyligi 4 oy",
    url: "https://i.ibb.co/ZLMMpDG/logo2.png",
    title: "Programming",
  },
  {
    courseName: "Web Desigin (UI/UX)",
    duration: "Davomiyligi 3 oy",
    url: "https://i.ibb.co/QkCxbTQ/logo3.png",
    title: "Web Desigin (UI/UX)",
  },
  {
    courseName: "Backend",
    duration: "Davomiyligi 4 oy",
    url: "https://i.ibb.co/HF8gWPp/Group-1330.png",
    title: "Backend",
  },
  {
    courseName: "Frontend",
    duration: "Davomiyligi 4 oy",
    url: "https://i.ibb.co/ZdKQhwN/Group-1304.png",
    title: "Frontend",
  },

  {
    courseName: "Android Devolpment",
    duration: "Davomiyligi 6 oy",
    url: "https://i.ibb.co/d0BhVs8/Group-1320.png",
    title: "Android Devolpment",
  },
  {
    courseName: "Game Devolpment",
    duration: "Davomiyligi 7 oy",
    url: "https://i.ibb.co/dW3xTKN/Frame-39.png",
    title: "Game Devolpment",
  },
  {
    courseName: "SMM",
    duration: "Davomiyligi 7 oy",
    url: "https://i.ibb.co/wC2HgsV/Frame-37.png",
    title: "SMM",
  },
  {
    courseName: "Data Science (AI/ML)",
    duration: "Davomiyligi 7 oy",
    url: "https://i.ibb.co/5B3Ls66/Data-Sciense.png",
    title: "Data Science (AI/ML)",
  },
  {
    courseName: "Bootcamp (.NET)",
    duration: "",
    url: "https://i.ibb.co/1K1HX7J/Frame-41.png",
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
