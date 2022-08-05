/* eslint-disable array-callback-return */
import React, { useState } from "react";
import NavbarAccount from "../layout/NavbarAccount";
import "../styles/Account.css";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getData } from "../api/api";

const Account = () => {
  const { t } = useTranslation();
  const [login, setLogin] = useState("");
  const [password, setPasword] = useState("");
  const navigate = useNavigate();

  const { data } = useQuery("register", getData);

  const handleClick = () => {
    return data?.map((item) => {
      if (
        (item.login !== login || item.email !== login) &&
        item.password !== password
      ) {
        navigate("/account/register");
      } else {
        navigate("/sign-in");
      }
    });
  };

  return (
    <React.Fragment>
      <NavbarAccount />
      <section id="account">
        <div className="row">
          <div className="col-xl-8 col-sm-12">
            <div className="account_title">
              <h2>{t("account_title")}</h2>
              <div className="vk-border">
                <span className="icon icon-vk" />
              </div>
              <p>{t("account_useEmail")}</p>
              <form className="form-area">
                <label htmlFor="loginOrEmail" />
                <input
                  type="text"
                  placeholder={t("loginInput")}
                  id="loginOrEmail"
                  required
                  onChange={(e) => setLogin(e.target.value)}
                />
                <label htmlFor="password" />
                <input
                  maxLength={8}
                  type="password"
                  placeholder={t("passwordInput")}
                  id="password"
                  required
                  onChange={(e) => setPasword(e.target.value)}
                />
                <div className="d-flex">
                  <label htmlFor="checkbox" className="checkbox">
                    <input type="checkbox" id="checkbox" />
                    {t("account_remember")}
                  </label>
                  <NavLink to="/forgerPassword">
                    {t("account_forgetpassword")}
                  </NavLink>
                </div>
                <button className="btn btn-sign" onClick={handleClick}>
                  {t("account_sign")}
                </button>
              </form>
              <div className="account-footer d-flex align-items-center">
                <p>{t("account_member")}</p>
                <NavLink to="/account/register">
                  {t("account_register")}
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-12">
            <div className="account_title_right">
              <h5>{t("account_first_register")}</h5>
              <p>{t("account_first_prag")}</p>

              <NavLink to="/account/register">
                <button className="btn btn-register">
                  {t("account_register")}
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Account;
