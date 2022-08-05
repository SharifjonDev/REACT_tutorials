import React, { useState } from "react";
import "./FAQ.css";
import axios from "axios";

const FAQ = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async (e) => {
    const res = await axios.get(
      "https://alibaraka.pythonanywhere.com/api/questions/"
    );
    setData(
      search.trim().length > 0
        ? res.data.filter((item) =>
            item.question.toLowerCase().includes(search.toLowerCase())
          )
        : []
    );
  };

  const handleClick = () => {
    document.querySelector(".question__box").style.opacity = 1;
  };
  const handleClose = () => {
    document.querySelector(".question__box").style.opacity = 0;
  };
  return (
    <React.Fragment>
      <div className="question__box">
        <span onClick={handleClose}>
          <i className="ri-close-circle-line"></i>
        </span>
        <input
          className="input-send"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn-send" onClick={getData}>
          <i className="ri-send-plane-line"></i>
        </button>

        {data.map((item) => (
          <div className="text" key={item.id}>
            {item.answer}
          </div>
        ))}
      </div>

      <button className="btn-position" onClick={handleClick}>
        <i className="ri-chat-smile-2-line"></i>
      </button>
    </React.Fragment>
  );
};

export default FAQ;
