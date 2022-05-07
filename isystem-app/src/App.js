import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/Home";
import CoursePage from "./components/CoursePage/Courses";
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/course-blog" element={<CoursePage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
