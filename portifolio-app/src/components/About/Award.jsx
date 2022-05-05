import React from "react";
import "./Award.css";

const language = [
  { title: "Uzbek", desc: "Pure Uzbek Language" },
  { title: "English", desc: "At the Beginner level" },
];

const Award = () => {
  return (
    <div className="award__container">
      <div className="award__item d-flex justify-content-between">
        {language.map((item, index) => (
          <AwardItem key={index} title={item.title} text={item.desc} />
        ))}
      </div>
    </div>
  );
};

const AwardItem = ({ year, title, text }) => {
  return (
    <div className="single__award pb-5">
      <h6 className="award__title">
        {title} - <span>{text}</span>
      </h6>
    </div>
  );
};

export default Award;
