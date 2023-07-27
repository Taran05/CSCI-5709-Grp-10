/**
 * @author Shubham Chauhan <sh572302@dal.ca/B00945891>
 */
import React from "react";
import { Grid } from "@mui/material";

import "./startComp.css";

import StartMessageComp from "./startMessage/startMessageComp";
import StartPicsComp from "./startPics/startPicsComp";

function StartComp() {
  return (
    <div className="startComp">
      <Grid container spacing={2} className="grid">
        <Grid item xs={12} sm={6}>
          <StartMessageComp />
        </Grid>
        <Grid item xs={12} sm={6}>
          <StartPicsComp />
        </Grid>
      </Grid>
    </div>
  );
}

export default StartComp;
