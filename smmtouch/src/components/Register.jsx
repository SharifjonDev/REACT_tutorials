/* eslint-disable array-callback-return */
import React, { useState } from "react";
import NavbarAccount from "../layout/NavbarAccount";
import "../styles/Register.css";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { addData } from "../api/api";
import { toast } from "react-toastify";

const Register = () => {
  const { t } = useTranslation();
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const addTodoMutation = useMutation(addData, {
    onSuccess: () => {
      queryClient.invalidateQueries("register");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      login &&
      email &&
      password &&
      repeatPassword > "" &&
      repeatPassword === password
    ) {
      addTodoMutation.mutate({ login, email, password, repeatPassword });
      toast.success("Muvaffaqiyatli");
      navigate("/sign-in");
      document.querySelector(".btn-register").classList.add("disabled");
      setLogin("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
    }
    document.querySelector(".btn-register").classList.remove("disabled");
    toast.error("PassWord or Login error");
  };

  return (
    <React.Fragment>
      <NavbarAccount />
      <section id="register">
        <div className="row">
          <div className="col-xl-8">
            <div className="account_title">
              <h2>{t("account_register_btn")} 🚀</h2>
              <div className="vk-border">
                <span className="icon icon-vk" />
              </div>
              <p>{t("account_useEmail")}</p>
              <form className="form-area" onSubmit={handleSubmit}>
                <label htmlFor="login" />
                <input
                  type="text"
                  placeholder={t("registerloginInput")}
                  id="login"
                  required
                  onChange={(e) => {
                    if (e.target.value > "") {
                      setLogin(e.target.value);
                      setDisabled(false);
                      document
                        .querySelector(".btn-register")
                        .classList.remove("disabled");
                    } else {
                      document
                        .querySelector(".btn-register")
                        .classList.add("disabled");
                      setDisabled(true);
                    }
                  }}
                />
                <label htmlFor="email" />
                <input
                  type="email"
                  placeholder={t("registeremailInput")}
                  id="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password" />
                <input
                  type="password"
                  placeholder={t("passwordInput")}
                  id="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="passwordRepeat" />
                <input
                  type="password"
                  placeholder={t("registerpasswordInputrepeat")}
                  id="passwordRepeat"
                  required
                  onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <label htmlFor="checkbox" className="checkbox">
                  <input type="checkbox" id="checkbox" />
                  {t("register_remember")}
                </label>
                <button
                  className="btn btn-register disabled"
                  onClick={handleSubmit}
                  disabled={disabled}
                >
                  {t("register")}
                </button>
              </form>
              <div className="account-footer d-flex align-items-center">
                <p>{t("register_member")}</p>
                <NavLink to="/account">{t("account_sign")}</NavLink>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="account_title_right">
              <h5>{t("register_first_register")}</h5>
              <p>{t("register_first_prag")}</p>

              <NavLink to="/account">
                <button className="btn btn-signIn">{t("account_sign")}</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Register;
