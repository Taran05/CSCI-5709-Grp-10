/**
 * @author Shubham Chauhan <sh572302@dal.ca/B00945891>
 */
import React from "react";
import { Grid } from "@mui/material";

import "./experienceComp.css";

import TopMessageComp from "./topMessage/topMessageComp";

function ExperienceComp() {
  return (
    <div className="experienceComp">
      <Grid container spacing={2} className="grid">
        <Grid item xs={12} sm={12}>
          <TopMessageComp />
        </Grid>
      </Grid>
    </div>
  );
}

export default ExperienceComp;
