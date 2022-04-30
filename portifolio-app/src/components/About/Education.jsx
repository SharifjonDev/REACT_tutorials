import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Certificate</th>
          <th>Department</th>
          <th>School</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>UM</td>
          <td>General Secondary Education </td>
          <td>School №21</td>
          <td>2010 - 2020</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Education;
