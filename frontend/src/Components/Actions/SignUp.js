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
        <label htmlFor="Username" className="btnlabel" id="username">
          Username :
        </label>
        <input
          id="iusername"
          type="text"
          name="userName"
          placeholder="Username"
          value={userName}
          onChange={onChangeHandler}
        ></input>

        <label htmlFor="email" className="btnlabel" id="emailsignup">
          Email Address :
        </label>
        <input
          id="iemailsignup"
          type="email"
          name="email"
          placeholder="email"
          onChange={onChangeHandler}
          value={email}
        ></input>
        
        <label htmlFor="password" className="btnlabel" id="passwordsignup">
          Create Password :
        </label>
        <input
          id="ipasswordsignup"
          type="password"
          name="password"
          placeholder="password"
          onChange={onChangeHandler}
          value={password}
        ></input>

        <label htmlFor="verifyPassword" className="btnlabel" id="verifypassword">
          Verify Password :
        </label>
        <input
          id="iverifypassword"
          type="password"
          name="verifyPassword"
          placeholder="verifyPassword"
          onChange={onChangeHandler}
          value={verifyPassword}
        ></input>

        <input type="submit" value="Submit" className="btnlabel" id="submitbutton"></input>

        <a href="/" id="Login-page" className="btnlabel">
          Already have an account?
        </a>
      </form>
    </div>
  );
}

export default SignUp;
