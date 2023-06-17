import React from "react";
import StartComp from "../../Components/landing/startComp/startComp";
import EarnMoreComp from "../../Components/landing/earnMore/earnMoreComp";
import "./landingPage.css";

function LandingPage() {
  return (
    <div className="landingPage">
      <StartComp />
      <EarnMoreComp />
    </div>
  );
}

export default LandingPage;
