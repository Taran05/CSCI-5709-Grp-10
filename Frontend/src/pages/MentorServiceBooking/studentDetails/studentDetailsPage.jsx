/**
 * @author Shivam Lakhanpal <sh475218@dal.ca/B00932887>
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */
import React, { useState } from "react";
import { Paper, Typography, Box, Snackbar, Alert } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import FormInput from "../../../Components/MentorServiceBooking/studentDetails/formInput";
import FormButton from "../../../Components/MentorServiceBooking/studentDetails/formButton";
import { SAVE_STUDENT_BOOKING } from "../../../utils/apiUrls";
import { v4 as uuidv4 } from "uuid";

const StudentDetailsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [callAbout, setCallAbout] = useState("");
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const selectedTime = location.state.selectedTime;
  const selectedDate = location.state.selectedDate;
  const mentorId = location.state.mentorId;
  const serviceName = location.state.serviceName;
  const serviceDuration = location.state.serviceDuration;
  const servicePrice = location.state.servicePrice;
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("error");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCallAboutChange = (event) => {
    setCallAbout(event.target.value);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim() || !callAbout.trim()) {
      setSnackbarMessage("All fields must be filled out");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    if (!validateEmail(email)) {
      setSnackbarMessage("Please enter a valid email");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }
    setLoading(true);
    const bookingId = uuidv4();
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
      price: "",
      bookingId: bookingId,
      isCancelled: false,
      isDefaultSchedule: true,
    };

    // Send details to server, then navigate
    fetch(SAVE_STUDENT_BOOKING, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        if (data.error) {
          setSnackbarMessage(data.error);
          setSnackbarOpen(true);
        } else {
          setSnackbarMessage(
            "Student details saved successfully. Redirecting to payments page"
          );
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          setTimeout(() => {
            navigate("/paymentDetails", {
              state: {
                servicePrice: servicePrice,
                mentorId: mentorId,
                bookingId: bookingId,
              },
            });
          }, 4000);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
        setSnackbarMessage("An error occurred while saving the booking.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
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
        Enter <span style={{ color: "#5C469C" }}>student's</span> details
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
          Service Price: ${servicePrice}
        </Typography>
        <Typography variant="body1" sx={{ color: "#555" }}>
          Meeting Time: {serviceDuration} minutes
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Your Name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
        <FormInput
          label="Email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
        />
        <FormInput
          label="What's this call about"
          value={callAbout}
          onChange={handleCallAboutChange}
          placeholder="Enter the call details"
        />
        <FormButton buttonText="Confirm and Pay" handleSubmit={handleSubmit} />
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default StudentDetailsForm;
