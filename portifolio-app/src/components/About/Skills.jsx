import React from "react";
import "./Skills.css";
const Skills = () => {
  const frontendSkills = [
    {
      title: "JavaScript",
      width: "85%",
      percentage: "85%",
    },
    {
      title: "React.js",
      width: "85%",
      percentage: "85%",
    },
    {
      title: "Redux",
      width: "85%",
      percentage: "85%",
    },
  ];

  const frontendVerstka = [
    {
      title: "HTML",
      width: "100%",
      percentage: "100%",
    },
    {
      title: "CSS",
      width: "100%",
      percentage: "100%",
    },
    {
      title: "SASS",
      width: "100%",
      percentage: "100%",
    },
  ];

  return (
    <div className="skills__wrapper d-flex gap-5">
      <div className="frontend__skills w-50">
        {frontendVerstka.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
      <div className="frontend__skills w-50">
        {frontendSkills.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            percentage={item.percentage}
          />
        ))}
      </div>
    </div>
  );
};

const SkillItem = ({ title, percentage }) => {
  return (
    <div className="skill__data mb-3">
      <div className="skill__title d-flex align-items-center justify-content-between">
        <h6>{title}</h6>
        <span>{percentage}</span>
      </div>
      <div className="skill__bar">
        <span
          className="skill__bar-percentage"
          style={{ width: `${percentage}` }}
        ></span>
      </div>
    </div>
  );
};
export default Skills;
