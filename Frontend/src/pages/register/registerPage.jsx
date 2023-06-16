import "./registerPage.css";
import React from "react";
import FormComp from "../../Components/register/form/formComp";
import myteam from "../../assets/images/landing1.png";
function RegisterPage() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-div">
          <div className="form">
            <h1 className="form-header">
              CREATE YOUR
              <span style={{ marginLeft: "6px", color: "#5C469C" }}>
                ACCOUNT
              </span>{" "}
            </h1>

            <h2 className="form-header-sub">
              Getting started with Learnly is simple,quick and easy
            </h2>

            <FormComp />
          </div>
        </div>
        <div className="right-div">
          <img src={myteam} alt="My Team" width="75%" />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
