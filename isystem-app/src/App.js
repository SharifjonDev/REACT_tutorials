import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import About from "./components/About/About";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-blog" element={<About />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
