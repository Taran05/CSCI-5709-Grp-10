import React from "react";
import StartComp from "../../Components/landing/startComp/startComp";
import "./landingPage.css";
import ExperienceComp from "../../Components/landing/experienceComp/experienceComp";

function LandingPage() {
  return (
    <div className="landingPage">
      <StartComp />
      <ExperienceComp />
    </div>
  );
}

export default LandingPage;
