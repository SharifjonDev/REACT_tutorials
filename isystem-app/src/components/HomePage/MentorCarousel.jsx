import React from "react";
import { Container, Row } from "reactstrap";

import "../HomeStyle/_mentorcarousel.scss";

const mentorData = [
  {
    imgUrl: "https://i.ibb.co/xFmBt7g/unsplash-a3-Rha-DG-p-NM.png",
    title: "Azamjon Nemadaliyev",
    job: "PhD Software Engineering",
  },
  {
    imgUrl: "https://i.ibb.co/XtPHkL7/unsplash-EZ4-TYg-XPNWk.png",
    title: "Ozodbek  Oripjonov",
    job: "Midle  Frontend",
  },
  {
    imgUrl: "https://i.ibb.co/ys40BcB/unsplash-WNo-Ln-Jo7t-S8.png",
    title: "Jasurbek Abdulxasanov",
    job: "Web Desigener UI/UX",
  },
  {
    imgUrl: "https://i.ibb.co/FxksMwz/unsplash-d1-UPki-Fd04-A.png",
    title: "Fozilbek Imomov",
    job: "Android Devolper",
  },
];

function MentorCarousel() {
  const fetchMentor = () => {
    return mentorData.map((item, index) => (
      <div className="carousel-div" key={index}>
        <img src={item.imgUrl} alt={item.title} />
        <h1>{item.title}</h1>
        <h2>{item.job}</h2>
      </div>
    ));
  };
  return (
    <section>
      <Container>
        <Row>
          <h2 className="mentor__title">Mentorlar</h2>

          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex justify-content-between">
                  {fetchMentor()}
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-between">
                  {fetchMentor()}
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-between">
                  {fetchMentor()}
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default MentorCarousel;
