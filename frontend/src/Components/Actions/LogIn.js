import React from "react";
import "./LogIn.css";

const LogIn = () => {
  return (
    <ul>
      <li>
        <button className="LOG">
          log In
          <input type="email"></input>
          <input type="password"></input>
        </button>
      </li>
      <li>
        <button className="SU">Sign Up</button>
      </li>
    </ul>
  );
};
export default LogIn;
