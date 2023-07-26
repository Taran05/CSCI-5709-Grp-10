import "./registerAboutYouPage.css";
import React from "react";
import RegisterAboutYouComp from "../../../Components/register/registerAboutYou/registerAboutYouComp";
import aboutYou from "../../../assets/images/about-you.svg";
function RegisterAboutYouPage() {
  return (
    <div className="register">
      <div className="register-container">
        <div className="register-left-div">
          <div className="register-form">
            {/* <h1 className="register-form-header">
              CREATE YOUR
              <span style={{ marginLeft: "6px", color: "#5C469C" }}>
                ACCOUNT
              </span>{" "}
            </h1> */}

            <RegisterAboutYouComp />
          </div>
        </div>
        <div className="register-right-div">
          <img src={aboutYou} alt="My Team" width="60%" />
        </div>
      </div>
    </div>
  );
}

export default RegisterAboutYouPage;
