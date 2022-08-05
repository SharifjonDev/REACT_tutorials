import React from "react";
import NavbarAccount from "../layout/NavbarAccount";
import "../styles/Signin.css";

const SignIn = () => {
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <NavbarAccount />
        </div>
      </section>
    </React.Fragment>
  );
};

export default SignIn;
