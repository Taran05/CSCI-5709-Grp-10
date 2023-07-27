/**
 * @author Shubham Chauhan <sh572302@dal.ca/B00945891>
 */

import React from "react";
import StartComp from "../../Components/landing/startComp/startComp";
import EarnMoreComp from "../../Components/landing/earnMore/earnMoreComp";
import ExperienceComp from "../../Components/landing/experienceComp/experienceComp";
import FaqComp from "../../Components/faq/faqComp";
import { Element } from "react-scroll";
import "./landingPage.css";
function LandingPage() {
  return (
    <div className="landingPage">
      <StartComp />
      <ExperienceComp />
      <EarnMoreComp />
      <FaqComp />
    </div>
  );
}

export default LandingPage;
