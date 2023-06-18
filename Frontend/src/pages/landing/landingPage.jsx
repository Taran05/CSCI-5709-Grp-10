import React from "react";
import StartComp from "../../Components/landing/startComp/startComp";
import EarnMoreComp from "../../Components/landing/earnMore/earnMoreComp";
import "./landingPage.css";
import ExperienceComp from "../../Components/landing/experienceComp/experienceComp";

function LandingPage() {
  return (
    <div className="landingPage">
      <StartComp />
      <ExperienceComp />
      <EarnMoreComp />
    </div>
  );
}

export default LandingPage;
