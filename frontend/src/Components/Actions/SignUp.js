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
    // const tmpdata = {
    //     userName: userName,
    //     email: email,
    //     password: password,
    //     verifyPassword: verifyPassword,
    // }
    // console.log(tmpdata)
    // const response = await fetch ('http://localhost:5000/users/signup', {method: "POST", mode: "cors", body:tmpdata})
    // const data = await response.json()
    // console.log(data)
    axios
      .post("http://localhost:5000/users/signup", {
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
      });
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
        <label htmlFor="Username">Username:</label>
        <input
          id="userName"
          type="text"
          name="userName"
          placeholder="Username"
          value={userName}
          onChange={onChangeHandler}
        ></input>

        <label htmlFor="email">Email Address:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email"
          onChange={onChangeHandler}
          value={email}
        ></input>

        <label htmlFor="password">Create Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          onChange={onChangeHandler}
          value={password}
        ></input>

        <label htmlFor="verifyPassword">Verify Password</label>
        <input
          id="verifyPassword"
          type="password"
          name="verifyPassword"
          placeholder="verifyPassword"
          onChange={onChangeHandler}
          value={verifyPassword}
        ></input>

        <input type="submit" value="Submit"></input>

        <a href="/" className="login-page">
          Already have an account?
        </a>
      </form>
    </div>
  );
}

export default SignUp;
