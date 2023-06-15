import "./registerPage.css";
import React from "react";
import FormComp from "../../Components/register/form/formComp";

function RegisterPage() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-div">
          <div className="form">
            <h1 className="form-header">Create Your Account</h1>
            <h2 className="form-header-sub">
              Getting started with Learnly is simple,quick and easy
            </h2>

            <FormComp />
          </div>
        </div>
        <div className="right-div">
          <h1>Welcome to Learnly</h1>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
