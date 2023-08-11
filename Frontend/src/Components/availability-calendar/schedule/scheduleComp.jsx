/**
 * This component handles the schedule selection and rendering of different schedule components.
 * Author: Taranjot Singh <tr548284@dal.ca/B00945917>
 */
import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { Button, Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
import DefaultScheduleComp from "./defaultschedule/defaultscheduleComp";
import BlockDatesComp from "./blockdates/blockdatesComp";
import AlternateScheduleComp from "./alternateschedule/alternatescheduleComp";

export default function Schedule() {
  // Create a theme for responsive design
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 330,
        sm: 380,
        md: 430,
        lg: 1100,
        xl: 1450,
      },
    },
  });

  // State variable to track the selected schedule type
  const [selectedSchedule, setSelectedSchedule] = useState("Default");

  // Styled component for the Default Schedule button
  const DefaultScheduleButton = styled(Button)(({ theme, isSelected }) => ({
    height: "100%",
    width: "100%",
    fontWeight: 600,
    pointerEvents: isSelected ? "none" : "auto",
    color: isSelected ? theme.palette.getContrastText(grey[900]) : theme.palette.getContrastText(grey[50]),
    backgroundColor: isSelected ? "#1D267D" : grey[50],
    "&:hover": {
      backgroundColor: isSelected ? "none" : "#D4ADFC",
    },
  }));

  // Styled component for the Alternate Schedule button
  const AlternateScheduleButton = styled(Button)(({ theme, isSelected }) => ({
    height: "100%",
    width: "100%",
    fontWeight: 600,
    pointerEvents: isSelected ? "none" : "auto",
    color: isSelected ? theme.palette.getContrastText(grey[900]) : theme.palette.getContrastText(grey[50]),
    backgroundColor: isSelected ? "#1D267D" : grey[50],
    "&:hover": {
      backgroundColor: isSelected ? "none" : "#D4ADFC",
    },
  }));

  // Component rendering
  return (
    <>
      {/* Schedule Selection Buttons */}
      <Grid item sm={12}>
        <Grid container spacing={2}>
          <Grid item sm={0}>
            <DefaultScheduleButton
              variant="contained"
              fullWidth
              onClick={() => setSelectedSchedule("Default")}
              isSelected={selectedSchedule === "Default"}
            >
              Default
            </DefaultScheduleButton>
          </Grid>
          <Grid item sm={0}>
            <AlternateScheduleButton
              variant="contained"
              fullWidth
              onClick={() => setSelectedSchedule("Alternate")}
              isSelected={selectedSchedule === "Alternate"}
            >
              Alternate
            </AlternateScheduleButton>
          </Grid>
        </Grid>
      </Grid>

      <br></br>
      <br></br>
      <br></br>

      {/* Rendering Schedule Components */}
      <Grid container spacing={2}>
        {selectedSchedule === "Default" ? (
          <Grid item sm={6}>
            <ThemeProvider theme={theme}><DefaultScheduleComp /></ThemeProvider>
          </Grid>
        ) : (
          <Grid item sm={6}>
            <ThemeProvider theme={theme}><AlternateScheduleComp /></ThemeProvider>
          </Grid>
        )}

        {/* Always render BlockDatesComp */}
        <Grid item sm={6}>
          <ThemeProvider theme={theme}><BlockDatesComp /></ThemeProvider>
        </Grid>
      </Grid>
    </>
  );
}
