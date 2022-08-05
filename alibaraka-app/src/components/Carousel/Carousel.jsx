import React from "react";
import "./style/Carousel.scss";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide container-fluid"
      data-bs-ride="carousel"
    >
      <img
        className="carousel__img"
        src="https://i.ibb.co/NgqCPWV/bottomlogo.png"
        alt=""
      />

      <div className="container text-center  carousel-inner">
        <div className="carousel-item active">
          <img src="https://svgshare.com/i/gcP.svg" alt="microsoft" />
          <img src="https://svgshare.com/i/gc_.svg" alt="google" />
          <img src="https://svgshare.com/i/gbM.svg" alt="slack" />
          <img src="https://svgshare.com/i/gc6.svg" alt="wordPress" />
        </div>
        <div className="carousel-item">
          <img src="https://svgshare.com/i/gcP.svg" alt="microsoft" />
          <img src="https://svgshare.com/i/gc_.svg" alt="google" />
          <img src="https://svgshare.com/i/gbM.svg" alt="slack" />
          <img src="https://svgshare.com/i/gc6.svg" alt="wordPress" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="visually">
          Trusted <br />
          by
        </span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="visually">
          <img src="https://svgshare.com/i/gc7.svg" alt="arrowRight" />
        </span>
      </button>
    </div>
  );
};

export default Carousel;
