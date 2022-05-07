import React from "react";
import Navbar from "../../layout/Navbar/Navbar";
import "../CourseStyle/_courses.scss";
import CourseTab from "./CourseTab";

function Courses() {
  return (
    <React.Fragment>
      <Navbar display="displayNone" classContainer="navbar__container" />
      <CourseTab />
    </React.Fragment>
  );
}

export default Courses;
