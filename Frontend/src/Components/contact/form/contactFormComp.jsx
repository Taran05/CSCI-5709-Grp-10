  /**
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */ 

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./contactFormComp.css";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isNameValid, setIsNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubjectValid, setIsSubjectValid] = useState(true);
  const [isMessageValid, setIsMessageValid] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsNameValid(!!name);
    setIsEmailValid(!!email);
    setIsSubjectValid(!!subject);
    setIsMessageValid(!!message);

    if (!name || !email || !subject || !message) {
      toast.error("Field(s) cannot remain blank");
      return;
    }

    if (!isValidEmail(email)) {
      setIsEmailValid(false);
      toast.error("Email Format Invalid");
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
          width: {
            xs: "25ch",
            sm: "35ch",
            md: "40ch",
            lg: "50ch",
          },
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
          helperText={!isNameValid && "Name cannot be blank"}
          sx={{
            "& .MuiInputBase-input": {
              fontSize: "1rem",
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
          helperText={!isEmailValid && "Invalid Email format"}
          
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
          helperText={!isSubjectValid && "Subject cannot be blank"}
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
          helperText={!isMessageValid && "Message cannot be blank"}
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
