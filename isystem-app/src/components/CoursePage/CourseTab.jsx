import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

function CourseTab() {
  return (
    <header>
      <Container>
        <Row>
          <Col xl="3">
            <NavLink to="offline">Offline kurslar</NavLink>
            <NavLink to="online">Online kurslar</NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default CourseTab;
