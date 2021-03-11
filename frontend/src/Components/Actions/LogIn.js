import React from "react";
import "./LogIn.css";

const LogIn = () => {
  return (
    <ul className="box">
      <li>
        <button className="LOG">Log In</button>
      </li>
      <input type="password" placeholder="Password" className="input"></input>
      <input type="email" placeholder="Username" className="input"></input>
    </ul>
  );
};
export default LogIn;
