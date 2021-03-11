import React from "react";
import "./LogIn.css";

const LogIn = () => {
  return (
    <div className="box">
      <ul>
        <li>
          <button className="LOG">log In</button>
        </li>
        <input type="email" placeholder="Username" className="input"></input>
        <input type="password" placeholder="password" className="input"></input>
      </ul>
    </div>
  );
};
export default LogIn;
