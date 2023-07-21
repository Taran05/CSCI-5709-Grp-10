import "./calendarPage.css";
import React, { useState } from "react";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import Schedule from "../../Components/calendar/schedule/schedule";
import Calendar from "../../Components/calendar/calendar/calendar";
import { Button, Grid, Typography } from "@mui/material";
import { purple, grey } from "@mui/material/colors";

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

const ScheduleButton = styled(Button)(({ theme }) => ({
  height: "100%",
  width: "100%",
  padding: "10px 30px",
  fontWeight: 600,
  borderRadius: "50px",
  color: theme.palette.getContrastText(grey[900]),
  backgroundColor: "#1D267D",
  "&:hover": {
    backgroundColor: "#0C134F",
  },
}));

const CalendarButton = styled(Button)(({ theme }) => ({
  height: "100%",
  width: "100%",
  padding: "10px 30px",
  fontWeight: 600,
  borderRadius: "50px",
  color: theme.palette.getContrastText(grey[900]),
  backgroundColor: "#1D267D",
  "&:hover": {
    backgroundColor: "#0C134F",
  },
}));

function CalendarPage() {
  // State variables to manage the selected component
  const [showSchedule, setShowSchedule] = useState(true);

  // Event handler for when the Schedule button is clicked
  const handleSchedule = () => {
    setShowSchedule(true);
  };

  // Event handler for when the Calendar button is clicked
  const handleCalendar = () => {
    setShowSchedule(false);
  };

  return (
    <div className="Calendar">
      <div className="calendar-container">
        <div className="left-form">
          <div className="contact-form">
            <h1 className="contact-form-header">AVAILABILITY</h1>
            <Grid item sm={12}>
              <Grid container spacing={2}>
                <Grid item sm={0}>
                  <ScheduleButton
                    variant="contained"
                    onClick={handleSchedule}
                    fullWidth
                    disabled={showSchedule}
                  >
                    Schedule
                  </ScheduleButton>
                </Grid>
                <Grid item sm={0}>
                  <CalendarButton
                    variant="contained"
                    onClick={handleCalendar}
                    fullWidth
                    disabled={!showSchedule}
                  >
                    Calendar
                  </CalendarButton>
                </Grid>
              </Grid>
            </Grid>
            <br></br>
            <hr />
            <br></br>
            <ThemeProvider theme={theme}>
              {showSchedule ? <Schedule /> : <Calendar />}
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
