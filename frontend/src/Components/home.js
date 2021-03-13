import React from "react";
import Center from "./Center-reviews/Center";
import Logo from "./blame-game-logo.jpg";

function home() {
  return (
    <div>
      <img src={Logo} alt="logo"></img>
      <Center />
    </div>
  );
}

export default home;
