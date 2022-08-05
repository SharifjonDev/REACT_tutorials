import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./components/Account";
import Header from "./components/Header";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
