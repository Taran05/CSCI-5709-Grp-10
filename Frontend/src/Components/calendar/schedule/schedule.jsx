import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./schedule.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { Button, Grid, Typography } from "@mui/material";
import { purple, grey } from "@mui/material/colors";
import AddIcon from '@mui/icons-material/Add';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox, FormControl, MenuItem, Select } from '@mui/material';

export default function Schedule() {

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

  const [checkboxStates, setCheckboxStates] = useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false
  });

  const startTimeOptions = [
    '12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM',
    '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM',
    '09:00 PM', '10:00 PM', '11:00 PM'
  ];
  
  const endTimeOptions = [
    '12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM',
    '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM',
    '09:00 PM', '10:00 PM', '11:00 PM'
  ];

  const DefaultScheduleButton = styled(Button)(({ theme }) => ({
    height: "100%",
    width: "100%",
    fontWeight: 600,
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: "#1D267D",
    "&:hover": {
      backgroundColor: "#0C134F",
    },
  }));
  
  const NewScheduleButton = styled(Button)(({ theme }) => ({
    height: "100%",
    width: "100%",
    fontWeight: 600,
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
    "&:hover": {
      backgroundColor: "#D4ADFC",
    },
  }));

  const SaveButton = styled(Button)(({ theme }) => ({
    height: "100%",
    width: "7%",
    fontWeight: 600,
    marginLeft: "70%",
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: "#1D267D",
    "&:hover": {
      backgroundColor: "#0C134F",
    },
  }));

  const BlockDatesButton = styled(Button)(({ theme }) => ({
    height: "28%",
    width: "100%",
    fontWeight: 600,
    marginTop: "10px",
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: "#1D267D",
    "&:hover": {
      backgroundColor: "#0C134F",
    },
  }));

  const handleSaveChanges = () => {
    const selectedDays = Object.entries(checkboxStates).filter(([_, checked]) => checked);
    console.log(selectedDays)
    if (selectedDays.length === 0) {
      const confirmMessage = "You have not made any changes, are you sure you want to continue?";
      if (!window.confirm(confirmMessage)) {
        return;
      }
      else{
        alert('Changes saved successfully');
        return;
      }
    }
  
    
    alert('Changes saved successfully');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <Grid item sm={12}>
        <Grid container spacing={2}>
          <Grid item sm={0}>
            <DefaultScheduleButton
              variant="contained"
              disabled
              fullWidth
            >
              Default
            </DefaultScheduleButton>
          </Grid>
          <Grid item sm={0}>
            <NewScheduleButton
              variant="contained"
              fullWidth
            >
              <AddIcon /> New Schedule
            </NewScheduleButton>
          </Grid>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
      <br></br>
      <Grid container spacing={2}>
        <Grid item sm={6}>
      <div className="schedule-details">
      <div className="schedule-name">
        <span>Default</span>
        <SaveButton
              variant="contained"
              fullWidth
            >
              Save
        </SaveButton>
      </div>
      <br></br>
      <div className="day-checkboxes">
        <table>
          <tbody>
            <tr>
              <td>
              <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkboxStates.Monday}
                      onChange={(e) =>
                        setCheckboxStates((prevState) => ({
                          ...prevState,
                          Monday: e.target.checked,
                        }))
                      }
                    />
                  }
                  label="Monday"
                />
              </td>
              <td>
                {checkboxStates.Monday ? (
                  <ThemeProvider theme={theme}>
                    <div className="time-dropdown">
                      <FormControl>
                        <Select
                          labelId="start-time-label-Monday"
                          id="start-time-select-Monday"
                        >
                          {startTimeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <span className="time-separator">-</span>
                      <FormControl>
                        <Select
                          labelId="end-time-label-Monday"
                          id="end-time-select-Monday"
                        >
                          {endTimeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      </div>
                  </ThemeProvider>
                ) : (
                  <span>Unavailable</span>
                )}
              </td>
            </tr>
            <tr>
              <td>
              <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkboxStates.Tuesday}
                      onChange={(e) =>
                        setCheckboxStates((prevState) => ({
                          ...prevState,
                          Tuesday: e.target.checked,
                        }))
                      }
                    />
                  }
                  label="Tuesday"
                />
              </td>
              <td>
                {checkboxStates.Tuesday ? (
                  <ThemeProvider theme={theme}>
                    <div className="time-dropdown">
                      <FormControl>
                        <Select
                          labelId="start-time-label-Tuesday"
                          id="start-time-select-Tuesday"
                        >
                          {startTimeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <span className="time-separator">-</span>
                      <FormControl>
                        <Select
                          labelId="end-time-label-Tuesday"
                          id="end-time-select-Tuesday"
                        >
                          {endTimeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      </div>
                  </ThemeProvider>
                ) : (
                  <span>Unavailable</span>
                )}
              </td>
            </tr>
            <tr>
              <td>
              <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkboxStates.Wednesday}
                      onChange={(e) =>
                        setCheckboxStates((prevState) => ({
                          ...prevState,
                          Wednesday: e.target.checked,
                        }))
                      }
                    />
                  }
                  label="Wednesday"
                />
              </td>
              <td>
                {checkboxStates.Wednesday ? (
                  <ThemeProvider theme={theme}>
                    <div className="time-dropdown">
                      <FormControl>
                        <Select
                          labelId="start-time-label-Wednesday"
                          id="start-time-select-Wednesday"
                        >
                          {startTimeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <span className="time-separator">-</span>
                      <FormControl>
                        <Select
                          labelId="end-time-label-Wednesday"
                          id="end-time-select-Wednesday"
                        >
                          {endTimeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      </div>
                  </ThemeProvider>
                ) : (
                  <span>Unavailable</span>
                )}
              </td>
            </tr>
            <tr>
              <td>
              <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkboxStates.Thursday}
                      onChange={(e) =>
                        setCheckboxStates((prevState) => ({
                          ...prevState,
                          Thursday: e.target.checked,
                        }))
                      }
                    />
                  }
                  label="Thursday"
                />
              </td>
              <td>
                {checkboxStates.Thursday ? (
                  <ThemeProvider theme={theme}>
                    <div className="time-dropdown">
                      <FormControl>
                        <Select
                          labelId="start-time-label-Thursday"
                          id="start-time-select-Thursday"
                        >
                          {startTimeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <span className="time-separator">-</span>
                      <FormControl>
                        <Select
                          labelId="end-time-label-Thursday"
                          id="end-time-select-Thursday"
                        >
                          {endTimeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      </div>
                  </ThemeProvider>
                ) : (
                  <span>Unavailable</span>
                )}
              </td>
            </tr>
            <tr>
              <td>
              <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkboxStates.Friday}
                      onChange={(e) =>
                        setCheckboxStates((prevState) => ({
                          ...prevState,
                          Friday: e.target.checked,
                        }))
                      }
                    />
                  }
                  label="Friday"
                />
              </td>
              <td>
                {checkboxStates.Friday ? (
                  <ThemeProvider theme={theme}>
                    <div className="time-dropdown">
                      <FormControl>
                        <Select
                          labelId="start-time-label-Friday"
                          id="start-time-select-Friday"
                        >
                          {startTimeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <span className="time-separator">-</span>
                      <FormControl>
                        <Select
                          labelId="end-time-label-Friday"
                          id="end-time-select-Friday"
                        >
                          {endTimeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      </div>
                  </ThemeProvider>
                ) : (
                  <span>Unavailable</span>
                )}
              </td>
            </tr>
            <tr>
              <td>
              <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkboxStates.Saturday}
                      onChange={(e) =>
                        setCheckboxStates((prevState) => ({
                          ...prevState,
                          Saturday: e.target.checked,
                        }))
                      }
                    />
                  }
                  label="Saturday"
                />
              </td>
              <td>
                {checkboxStates.Saturday ? (
                  <ThemeProvider theme={theme}>
                    <div className="time-dropdown">
                      <FormControl>
                        <Select
                          labelId="start-time-label-Saturday"
                          id="start-time-select-Saturday"
                        >
                          {startTimeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <span className="time-separator">-</span>
                      <FormControl>
                        <Select
                          labelId="end-time-label-Saturday"
                          id="end-time-select-Saturday"
                        >
                          {endTimeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      </div>
                  </ThemeProvider>
                ) : (
                  <span>Unavailable</span>
                )}
              </td>
            </tr>
            <tr>
              <td>
              <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkboxStates.Sunday}
                      onChange={(e) =>
                        setCheckboxStates((prevState) => ({
                          ...prevState,
                          Sunday: e.target.checked,
                        }))
                      }
                    />
                  }
                  label="Sunday"
                />
              </td>
              <td>
                {checkboxStates.Sunday ? (
                  <ThemeProvider theme={theme}>
                    <div className="time-dropdown">
                      <FormControl>
                        <Select
                          labelId="start-time-label-Sunday"
                          id="start-time-select-Sunday"
                        >
                          {startTimeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <span className="time-separator">-</span>
                      <FormControl>
                        <Select
                          labelId="end-time-label-Sunday"
                          id="end-time-select-Sunday"
                        >
                          {endTimeOptions.map((option, index) => (
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      </div>
                  </ThemeProvider>
                ) : (
                  <span>Unavailable</span>
                )}
              </td>
            </tr>
            </tbody>
        </table>
      </div>
    </div>
    </Grid>
    <Grid item sm={6}>
    <div className="block-dates">
            <h2>Block Dates</h2>
            <p>Add dates when you will be unavailable to take calls</p>
            <BlockDatesButton
              variant="contained"
              fullWidth
            >
              Add Unavailable Dates
            </BlockDatesButton>
    </div>
    </Grid>
  </Grid>
    </>
  );
}