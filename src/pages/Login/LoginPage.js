import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import { BsFillPersonFill, BsFillLockFill } from "react-icons/bs";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  //Production code will not use localStorage for login, signup process, only used for the 
  // assignment
  const userName = localStorage.getItem("email") ? localStorage.getItem("email") : 'admin@picnic';
  const userPwd = localStorage.getItem("password") ? localStorage.getItem("password") : 'admin';

  const handleSubmit = (e) => {
      e.preventDefault();
      if(email === userName && password === userPwd){
          alert("Login Successful " + userName + "!")
          navigate('/home')
      }
      else {
          alert("Invalid Email or Password")
      }
  }

  const handleSignUp = (e) =>{
    e.preventDefault();
    if(userName.length > 0 && password.length > 0){
        localStorage.setItem("email" , email)
        localStorage.setItem("password" , password)
        alert("User created successfully. Please login!")
    }
    else{
        alert("Missing Username or Password")
    }
    
  }

 


  return (
    <div className="login-form">
      <form>
        <h1>Picnic Login</h1>
        <hr />

        <div className="login-field">
        <BsFillPersonFill className="img"/>
          <input
            type="email"
            className="form__input"
            value={email}
            onChange={ e => setEmail(e.target.value)}
            placeholder="username"
            required
          />
        </div>
        <div className="login-field">
            <BsFillLockFill className="img"/>
          <input
            type="password"
            className="form__input"
            value={password}
            onChange={ e => setPassword(e.target.value)}
            placeholder="password"
            required
          />
        </div>
       
        <div className="btn-grp">
        <div className="btn btn__primary" onClick={e => handleSubmit(e)}>
          Login
        </div>
        <div className="btn btn__secondary" onClick={e => handleSignUp(e)}>
          SignUp
        </div>
        </div>
      </form>
    </div>
  );

  
};




export default LoginPage;
