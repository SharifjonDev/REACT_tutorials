import React, { Fragment } from "react";
import "./MentorCarousel.scss";
import PersonLogo from "./img/person-1.svg";
import Container from "../UI/Container";
import Row from "../UI/Row";

const mentorData = [
  {
    imgUrl: PersonLogo,
    title: "Azamjon Nemadaliyev",
    job: "PhD Software Engineering",
  },
  {
    imgUrl: PersonLogo,
    title: "Ozodbek  Oripjonov",
    job: "Midle  Frontend",
  },
  {
    imgUrl: PersonLogo,
    title: "Jasurbek Abdulxasanov",
    job: "Web Desigener UI/UX",
  },
  {
    imgUrl: PersonLogo,
    title: "Fozilbek Imomov",
    job: "Android Devolper",
  },
];

function MentorCarousel() {
  return (
    <Fragment>
      <Container>
        <Row>
          <div className="mentor__tile">Mentorlar</div>
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
                  {mentorData.map((item, index) => (
                    <div className="carousel-div" key={index}>
                      <img src={item.imgUrl} alt={item.title} />
                      <h1>{item.title}</h1>
                      <h2>{item.job}</h2>
                    </div>
                  ))}
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-between">
                  {mentorData.map((item, index) => (
                    <div className="carousel-div" key={index}>
                      <img src={item.imgUrl} alt={item.title} />
                      <h1>{item.title}</h1>
                      <h2>{item.job}</h2>
                    </div>
                  ))}
                </div>
              </div>
              <div className="carousel-item">
                <div className="d-flex justify-content-between">
                  {mentorData.map((item, index) => (
                    <div className="carousel-div" key={index}>
                      <img src={item.imgUrl} alt={item.title} />
                      <h1>{item.title}</h1>
                      <h2>{item.job}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
}

export default MentorCarousel;
