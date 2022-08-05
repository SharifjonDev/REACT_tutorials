import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import About from "../About/About";
import Carousel from "../Carousel/Carousel";
import "./style/Section.scss";

const Section = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const response = await axios.get(
      "https://alibaraka.pythonanywhere.com/api/products/",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    setProducts(response.data);
  }
  const fetchProducts = () => {
    return products.map((item, index) => (
      <Col key={index} xl="6">
        <div className="products__box d-flex align-items-center">
          <img
            src={
              item.image ||
              "https://i.ibb.co/pvwH6zr/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg"
            }
            alt={item.title}
          />
          <div className="products__title">
            <h2>{item.name || "No data"}</h2>
            <p>{item.text}</p>
          </div>
        </div>
      </Col>
    ));
  };

  return (
    <section className="production" id="products">
      <Container>
        <Row>
          <Col xl="12">
            <div className="production__title">
              <h1>our production</h1>
              <p>
                "Your work is going to fill a large part of your life, and the
                only way to be truly satisfied is to do what you believe is
                great work
              </p>
            </div>
          </Col>
          {fetchProducts()}
        </Row>
      </Container>
      <About />
      <Carousel />
    </section>
  );
};

export default Section;
