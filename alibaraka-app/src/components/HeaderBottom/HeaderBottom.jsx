import React from "react";
import { Col } from "reactstrap";
import "./HeaderBottom.css";

const Headerbottom = () => {
  return (
    <React.Fragment>
      <div className=" background__panding ">
        <Col xl="12 d-flex">
          <div className="background__img__top">
            <img src="https://i.ibb.co/NgqCPWV/bottomlogo.png" alt="logo" />
          </div>
          <div className="background__img__top">
            <img src="https://i.ibb.co/NgqCPWV/bottomlogo.png" alt="logo" />
          </div>
        </Col>
      </div>
    </React.Fragment>
  );
};

export default Headerbottom;
