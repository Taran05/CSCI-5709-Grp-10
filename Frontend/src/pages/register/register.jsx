import "./register.css";
import React from "react";
import RegisterForm from "../../Components/form/registerForm";

function Register() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-div">
          <div className="form">
            <h1 className="form-header">Create Your Account</h1>
            <h2 className="form-header-sub">
              Getting started with Learnly is simple,quick and easy
            </h2>

            <RegisterForm />
          </div>
        </div>
        <div className="right-div">
          <h1>Welcome to Learnly</h1>
        </div>
      </div>
    </div>
  );
}

export default Register;
