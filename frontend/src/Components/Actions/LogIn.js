import React, {useState} from "react";
import "./LogIn.css";
import axios from 'axios';

function logIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/users/login', {userName, password}).then((res) => {
      if (res.data.status === 'OK') {
        sessionStorage.setItem('loggedIn', true);
        sessionStorage.setItem('email', res.data.email);
        sessionStorage.setItem('userName', res.data.userName);        
      }
    })
  }
}
  return (

    <div className="logIn">
      <h1 className="logIn_header">Log In</h1>
        <form onSubmit={onSubmit} className="logInForm">
          
          <label htmlfor="email">Email Address:</label>
          <input onChange = {onChange} value = {email} type="email" id="email" placeholder="Email"></input>

          <label htmlfor="password">Password:</label>
          <input onChange={onChange} value={password} type="password" id="password" placeholder="Password"></input>
        
          <input id="submit_logIn" type="submit" value="Log In"></input>
        
          <a href="/signup" className="signup_link">Create Account</a>

        </form>
    </div>
  );
};
export default LogIn;
