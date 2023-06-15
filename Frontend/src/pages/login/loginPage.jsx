import "./loginPage.css";
import React from "react";
import FormComp from "../../Components/login/form/formComp";
// import FormPropsTextFields from "../../Components/form/registerForm";

function LoginPage() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-div">
          <div className="form">
            <h1 className="form-header">Sign In</h1>
            {/* <h2 className="form-header-sub"></h2> */}

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

export default LoginPage;
