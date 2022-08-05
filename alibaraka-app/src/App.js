/* eslint-disable no-unused-vars */
import React from "react";
import FAQ from "./components/FAQ/FAQ";
import Home from "./components/Home/Home";
import Navbar from "./layout/Navbar/Navbar";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <FAQ />
    </React.Fragment>
  );
}

export default App;
