import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./calendar.css";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import EventIcon from '@mui/icons-material/Event';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
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

const timezones = [
  { value: "GMT-3:00", label: "(GMT-3:00) Brasilia" },
  { value: "GMT+5:30", label: "(GMT+5:30) Mumbai" },
  // Add more timezones as needed
];

const bookingPeriods = [
  { value: "1w", label: "1 week" },
  { value: "2w", label: "2 weeks" },
  { value: "1m", label: "1 month" },
  // Add more booking periods as needed
];

const noticePeriodUnits = [
  { value: "minutes", label: "Minutes" },
  { value: "hours", label: "Hours" },
  { value: "days", label: "Days" },
  { value: "weeks", label: "Weeks" },
];

const SaveButton = styled(Button)(({ theme }) => ({
  height: "100%",
  width: "74%",
  fontWeight: 600,
 
  marginTop: "3%",
  color: theme.palette.getContrastText(grey[900]),
  backgroundColor: "#1D267D",
  "&:hover": {
    backgroundColor: "#0C134F",
  },
}));

export default function Calendar() {
  const [timezone, setTimezone] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [bookingPeriod, setBookingPeriod] = useState("");
  const [noticePeriodValue, setNoticePeriodValue] = useState("");
  const [noticePeriodUnit, setNoticePeriodUnit] = useState("");

  const handleTimezoneChange = (event) => {
    setTimezone(event.target.value);
  };

  const handleMeetingLinkChange = (event) => {
    setMeetingLink(event.target.value);
  };

  const handleBookingPeriodChange = (event) => {
    setBookingPeriod(event.target.value);
  };

  const handleNoticePeriodChange = (event) => {
    setNoticePeriodValue(event.target.value);
  };

  const handleNoticePeriodUnitChange = (event) => {
    setNoticePeriodUnit(event.target.value);
  };

  return (
    <>
    <table>
      <tbody>
        <tr>
          <td className="customTableCell">
            <h3 style={{ display: "flex", alignItems: "center" }}><LocationOnIcon style={{ verticalAlign: "middle", marginRight: 8 }}/>Timezone</h3>
            <h4>Required for timely communications</h4>
          </td>
          <td className="customTableCell">
            <FormControl fullWidth>
              <InputLabel htmlFor="timezone-select">Select Timezone</InputLabel>
              <Select
                value={timezone}
                onChange={handleTimezoneChange}
                label="Timezone"
                inputProps={{
                  name: 'timezone',
                  id: 'timezone-select',
                }}
                style={{ width: 400 }}
              >
                {timezones.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </td>
        </tr>
        <tr>
          <td>
            <h3 style={{ display: "flex", alignItems: "center" }}><InsertLinkIcon style={{ verticalAlign: "middle", marginRight: 8 }}/>Personal meeting link</h3>
            <h4>All your 1:1 meetings will be redirected to this URL</h4>
          </td>
          <td>
          <TextField
              fullWidth
              label="Add Meeting Link"
              variant="outlined"
              value={meetingLink}
              onChange={handleMeetingLinkChange}
              style={{ width: 400 }}
            />     
          </td>
        </tr>
        <tr>
          <td>
            <h3 style={{ display: "flex", alignItems: "center" }}><EventIcon style={{ verticalAlign: "middle", marginRight: 8 }}/>Booking Period</h3>
            <h4>How far in the future can attendees book</h4>
          </td>
          <td>
            <FormControl fullWidth>
              <InputLabel htmlFor="booking-period-select">Select Booking Period</InputLabel>
              <Select
                value={bookingPeriod}
                onChange={handleBookingPeriodChange}
                label="Booking Period"
                inputProps={{
                  name: 'bookingPeriod',
                  id: 'booking-period-select',
                }}
                style={{ width: 400 }}
              >
                {bookingPeriods.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </td>
        </tr>
        <tr>
          <td>
            <h3 style={{ display: "flex", alignItems: "center" }}><EventNoteIcon style={{ verticalAlign: "middle", marginRight: 8 }}/>Notice Period</h3>
            <h4>Set the minimum amount of notice that is required</h4>         
          </td>
          <td>
          <div style={{ display: "flex", alignItems: "center" }}>
              <TextField
                fullWidth
                type="number"
                label="Add Notice"
                value={noticePeriodValue}
                onChange={handleNoticePeriodChange}
                inputProps={{
                  min: 0,
                }}
                style={{ width: 250 }}
              />
              <FormControl style={{ minWidth: 150 }}>
              <InputLabel htmlFor="booking-period-select">Period</InputLabel>
                <Select
                  value={noticePeriodUnit}
                  onChange={handleNoticePeriodUnitChange}
                  label="Period"
                  inputProps={{
                    name: 'noticePeriodUnit',
                    id: 'notice-period-unit',
                  }}
                  
                >
                  {noticePeriodUnits.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <SaveButton
              variant="contained"
              fullWidth
            >
              Save Calendar Settings
        </SaveButton>
    </>
  );
}
