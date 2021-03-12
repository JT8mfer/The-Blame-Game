import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";

function SignUp() {
  const [userName, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const getResponse = async (e) => {
    e.preventDefault();
  
    axios.post("http://localhost:5000/users/signup", {
        userName: userName,
        email: email,
        password: password,
        verifyPassword: verifyPassword,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("Account Created Succesfully");
          setUser("");
          setEmail("");
          setPassword("");
          setVerifyPassword("");
          sessionStorage.setItem("loggedIn", true);
          sessionStorage.setItem("email", res.data.email);
        } 
      }).catch((res) => {
        alert("Passwords dont match")
        setPassword("");
        setVerifyPassword("");
      })
  };

  const onChangeHandler = (e) => {
    if (e.target.id === "userName") {
      setUser(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "verifyPassword") {
      setVerifyPassword(e.target.value);
    }
  };

  return (
    <div className="createUser">
      <h1 className="createHeader">Create Account</h1>
      <form onSubmit={getResponse} className="createUserForm">
        <label htmlFor="Username" className="btnlabel">
          Username:
        </label>
        <input
          id="userName"
          type="text"
          name="userName"
          placeholder="Username"
          value={userName}
          onChange={onChangeHandler}
        ></input>

        <label htmlFor="email" className="btnlabel">
          Email Address:
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email"
          onChange={onChangeHandler}
          value={email}
        ></input>

        <label htmlFor="password" className="btnlabel">
          Create Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          onChange={onChangeHandler}
          value={password}
        ></input>

        <label htmlFor="verifyPassword" className="btnlabel">
          Verify Password
        </label>
        <input
          id="verifyPassword"
          type="password"
          name="verifyPassword"
          placeholder="verifyPassword"
          onChange={onChangeHandler}
          value={verifyPassword}
        ></input>

        <input type="submit" value="Submit" className="btnlabel"></input>

        <a href="/" className="Login-page">
          Already have an account?
        </a>
      </form>
    </div>
  );
}

export default SignUp;
