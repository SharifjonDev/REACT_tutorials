import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("submited");
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form__input">
        <input
          type="text"
          placeholder="Your Name"
          value={enteredName}
          onChange={(event) => setEnteredName(event.target.value)}
        />
      </div>
      <div className="form__input">
        <input
          type="email"
          placeholder="Your Email"
          value={enteredEmail}
          onChange={(event) => setEnteredEmail(event.target.value)}
        />
      </div>
      <div className="form__input">
        <textarea
          rows="2"
          placeholder="Write Message"
          value={enteredMessage}
          onChange={(event) => setEnteredMessage(event.target.value)}
        ></textarea>
      </div>
      <button className="submit__btn" type="sumbit">
        Submit
      </button>
    </form>
  );
};

export default Form;
