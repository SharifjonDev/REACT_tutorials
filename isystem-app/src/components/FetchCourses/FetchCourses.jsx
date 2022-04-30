import React from "react";
import classes from "./style/FetchCourses.module.scss";
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
const FetchCourses = () => {
  if (initialCourses.length > 0) {
    return initialCourses.map((item, index) => (
      <div className={classes.courseContainer} key={index}>
        <div className="d-flex justify-content-between">
          <div className={classes.courseTitle}>
            <h2>{item.courseName}</h2>
            <h3>{item.duration}</h3>
          </div>
          <img src={item.url} alt={item.title} />
        </div>
      </div>
    ));
  }
  return <div>Ma'lumotlar hozircha yo'q 📦</div>;
};

export default FetchCourses;
