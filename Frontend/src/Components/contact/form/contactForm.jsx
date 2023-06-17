import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./contactForm.css";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useMediaQuery from "@mui/material/useMediaQuery";

import { useNavigate } from "react-router-dom";

export default function contactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubjectValid, setIsSubjectValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);

  const navigate = useNavigate();

  const isExtraSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsNameValid(!!name);
    setIsEmailValid(!!email);
    setIsSubjectValid(!!subject);
    setIsMessageValid(!!message);

    if (!name || !email || !subject || !message) {
      return;
    }

    if (!isValidEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    // Form submission successful
    console.log("Form submitted:", { name, email, subject, message });
    // Show success notification
    toast.success("Form submitted successfully!");
    // Reset form fields
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setIsNameValid(true);
    setIsEmailValid(true);
    setIsSubjectValid(true);
    setIsMessageValid(true);
    // Redirect to landing page after a delay
    setTimeout(() => {
      navigate("/");
    }, 2000); // Adjust the delay as needed
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
           m: 1,
           width: isExtraSmallScreen ? "25ch" : isSmallScreen ? "35ch" : isMediumScreen ? "40ch" : isLargeScreen ? "50ch" : "60ch",
          },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className="contact-form">
        <TextField
          required
          id="outlined-required"
          placeholder="Name"
          label="Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={name}
          onChange={(event) => setName(event.target.value)}
          error={!isNameValid}
          sx={{
            "& .MuiInputBase-input": {
              fontSize: isSmallScreen ? "0.875rem" : "1rem",
            },
          }}
        />
        <TextField
          required
          id="outlined-required"
          placeholder="xyz@gmail.com"
          label="Email"
          type="email"
          InputLabelProps={{
            shrink: true,
          }}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          error={!isEmailValid}
        />
        <TextField
          required
          id="outlined-required"
          placeholder="Subject"
          label="Subject"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          error={!isSubjectValid}
        />
        <TextField
          required
          id="outlined-required"
          placeholder="Message"
          label="Message"
          multiline
          rows={5}
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          error={!isMessageValid}
        />
      </div>
      <Button
        variant="contained"
        type="submit"
        sx={{
          bgcolor: "#1D267D",
          color: "white",
          padding: {
            xs: "8px 75px",
            md: "8px 220px",
          },
          fontSize: "1rem",
          width: "50%",
          marginTop: "3px",
          letterSpacing: "3px",
          "&:hover": {
            bgcolor: "#0C134F", // Set your desired hover color here
          },
        }}
      >
        Submit
      </Button>
      <ToastContainer position="top-center" />
    </Box>
  );
}
