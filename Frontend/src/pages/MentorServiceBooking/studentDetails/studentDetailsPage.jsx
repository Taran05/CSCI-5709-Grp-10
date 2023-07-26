import React, { useState } from "react";
import {
  Paper,
  Typography,
  Divider,
  Box,
  TextField,
  Button,
} from "@mui/material";
import EventIcon from "@mui/icons-material/Event";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const StudentDetailsForm = ({}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [callAbout, setCallAbout] = useState("");
  const location = useLocation();
  const selectedTime = location.state.selectedTime;
  const selectedDate = location.state.selectedDate;
  const mentorId = location.state.mentorId;
  const serviceName = location.state.serviceName;
  const serviceDuration = location.state.serviceDuration;
  const servicePrice = location.state.servicePrice;
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCallAboutChange = (event) => {
    setCallAbout(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const details = {
      serviceName: serviceName,
      serviceDuration: serviceDuration,
      selectedDate,
      selectedTime,
      isPaid: false,
      mentorId: mentorId,
      studentName: name,
      studentEmail: email,
      callAbout,
    };

    // Send details to server, then navigate
    fetch("http://localhost:3001/api/saveBooking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((data) => {
        // Navigate to payment details page
        navigate("/paymentDetails", {
          state: {
            servicePrice: servicePrice,
            mentorId: mentorId,
          },
        });
      });
  };

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "20px",
        height: "100%",
        maxWidth: "500px",
        margin: "auto",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ color: "#3f3f3f", marginBottom: "25px" }}
      >
        Enter student's details
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <Typography variant="body1" sx={{ color: "#555" }}>
          Service Price: {servicePrice}
        </Typography>
        <Typography variant="body1" sx={{ color: "#555" }}>
          Meeting Time: {serviceDuration}
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Box sx={{ marginBottom: "25px" }}>
          <Typography variant="h6" gutterBottom sx={{ color: "#555" }}>
            Your Name
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={name}
            onChange={handleNameChange}
            required
            placeholder="Enter your name"
          />
        </Box>
        <Box sx={{ marginBottom: "25px" }}>
          <Typography variant="h6" gutterBottom sx={{ color: "#555" }}>
            Email
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Enter your email"
          />
        </Box>
        <Box sx={{ marginBottom: "25px" }}>
          <Typography variant="h6" gutterBottom sx={{ color: "#555" }}>
            What's this call about
          </Typography>
          <TextField
            variant="outlined"
            fullWidth
            value={callAbout}
            onChange={handleCallAboutChange}
            required
            placeholder="Enter the call details"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
            sx={{ fontSize: "18px", padding: "10px 30px", borderRadius: "5px" }}
          >
            Confirm and Pay
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default StudentDetailsForm;
