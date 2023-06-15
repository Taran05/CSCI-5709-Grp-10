import "../register/register.css";
import React from "react";
import LoginForm from "../../Components/form/loginForm";
// import FormPropsTextFields from "../../Components/form/registerForm";

function Login() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-div">
          <div className="form">
            <h1 className="form-header">Sign In</h1>
            {/* <h2 className="form-header-sub"></h2> */}

            <LoginForm />
          </div>
        </div>
        <div className="right-div">
          <h1>Welcome to Learnly</h1>
        </div>
      </div>
    </div>
  );
}

export default Login;
