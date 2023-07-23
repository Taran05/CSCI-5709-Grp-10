import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./calendar.css";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import EventIcon from '@mui/icons-material/Event';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { createTheme, styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import axios from 'axios';

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
  { value: "GMT-10:00", label: "(GMT-10:00) Hawaii" },
  { value: "GMT-8:00", label: "(GMT-8:00) Alaska" },
  { value: "GMT-7:00", label: "(GMT-7:00) Pacific Time" },
  { value: "GMT-6:00", label: "(GMT-6:00) Mountain Time" },
  { value: "GMT-5:00", label: "(GMT-5:00) Central Time" },
  { value: "GMT-4:00", label: "(GMT-4:00) Eastern Time" },
  { value: "GMT-3:00", label: "(GMT-3:00) Atlantic Time" },
  { value: "GMT-2:00", label: "(GMT-2:00) Greenland" },
  { value: "GMT-1:00", label: "(GMT-1:00) Cape Verde Islands" },
  { value: "GMT+0:00", label: "(GMT+0:00) UTC" },
  { value: "GMT+1:00", label: "(GMT+1:00) London" },
  { value: "GMT+2:00", label: "(GMT+2:00) Berlin" },
  { value: "GMT+3:00", label: "(GMT+3:00) Istanbul" },
  { value: "GMT+4:00", label: "(GMT+4:00) Abu Dhabi" },
  { value: "GMT+5:30", label: "(GMT+5:30) New Delhi" },
  { value: "GMT+6:00", label: "(GMT+6:00) Dhaka" },
  { value: "GMT+7:00", label: "(GMT+7:00) Bangkok" },
  { value: "GMT+8:00", label: "(GMT+8:00) Perth" },
  { value: "GMT+9:00", label: "(GMT+9:00) Tokyo" },
  { value: "GMT+10:00", label: "(GMT+10:00) Sydney" },
  { value: "GMT+11:00", label: "(GMT+11:00) Soloman Islands" },
  { value: "GMT+12:00", label: "(GMT+12:00) Auckland" },
  { value: "GMT+13:00", label: "(GMT+13:00) Nuku'alofa" },
];

const bookingPeriods = [
  { value: "1 week", label: "1 week" },
  { value: "2 weeks", label: "2 weeks" },
  { value: "3 weeks", label: "3 weeks" },
  { value: "4 weeks", label: "4 weeks" },
  { value: "2 months", label: "2 months" },
  { value: "3 months", label: "3 months" },
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

  const handleSaveCalendarSettings = async () => {
    console.log("Selected Timezone:", timezone);
    console.log("Meeting Link:", meetingLink);
    console.log("Booking Period:", bookingPeriod);
    const noticePeriod = noticePeriodValue +" "+ noticePeriodUnit;
    console.log("Notice Period:", noticePeriod);

    if (meetingLink.trim() !== "" && !/^https?:\/\//.test(meetingLink)) {
      toast.error("Invalid meeting link format. Please use a valid URL starting with 'http://' or 'https://'.");
      return;
    }

    try{
      const calendarSettingsData = {
        timezone,
        meetingLink,
        bookingPeriod,
        noticePeriod,
      }
      await axios.post('http://localhost:3001/api/saveCalendarSettings', calendarSettingsData);
      toast.success("Data saved!");
    }
    catch(error){
      console.log(error);
      toast.error('Failed to Save Calendar Settings');
    }
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
    <ToastContainer position="top-center" />
    <SaveButton
              variant="contained"
              fullWidth
              onClick={handleSaveCalendarSettings}
            >
              Save Calendar Settings
        </SaveButton>
    </>
  );
}
