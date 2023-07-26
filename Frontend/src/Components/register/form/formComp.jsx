/**
 * @author Amanjot Singh <am854663@dal.ca/B00942293>
 */

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { FormHelperText } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const ids = ["aman82", "jj98"];

export default function FormComp() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFirstNameValid, setIsFirstNameValid] = useState(true);
  const [isLastNameValid, setIsLastNameValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isIdUnique, setIsIdUnique] = useState(true);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsFirstNameValid(!!firstName);
    setIsLastNameValid(!!lastName);
    setIsEmailValid(!!email);
    setIsPasswordValid(!!password);

    if (!firstName || !lastName || !email || !password) {
      return;
    }

    if (!isValidEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    if (!isValidPassword(password)) {
      setIsPasswordValid(false);
      return;
    }

    if (ids.includes(email)) {
      setIsIdUnique(false);
      return;
    }

    // Form submission successful
    console.log("Form submitted:", { firstName, lastName, email, password });
    // Reset form fields

    setIsSnackbarOpen(true); // Show the sliding Snackbar

    // Redirect to the next form after 1.5 seconds
    setTimeout(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setIsFirstNameValid(true);
      setIsLastNameValid(true);
      setIsEmailValid(true);
      setIsPasswordValid(true);
      setIsIdUnique(true);
      setIsSnackbarOpen(false);
      navigate("/about-you", {
        state: { email, firstName, lastName, password },
      });
    }, 1500);
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const isValidPassword = (value) => {
    return value.length >= 8;
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={2000} // Auto hide the Snackbar after 2 seconds
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Let's get started!
        </MuiAlert>
      </Snackbar>

      <div className="form">
        <TextField
          required
          id="outlined-required"
          placeholder="First Name"
          label="First Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          error={!isFirstNameValid}
          helperText={!isFirstNameValid && "Please enter your first name"}
        />
        <TextField
          required
          id="outlined-required"
          placeholder="Last Name"
          label="Last Name"
          type="text"
          InputLabelProps={{
            shrink: true,
          }}
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
          error={!isLastNameValid}
          helperText={!isLastNameValid && "Please enter your last name"}
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
          error={!isEmailValid || !isIdUnique}
          helperText={
            !isEmailValid && email
              ? "Please enter a valid email address"
              : !isIdUnique && email
              ? "ID already exists"
              : ""
          }
        />

        <FormControl
          error={!isPasswordValid}
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
        >
          <InputLabel
            htmlFor="outlined-adornment-password"
            InputLabelProps={{
              shrink: true,
            }}
          >
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <FormHelperText>
            {!isPasswordValid && password
              ? "Password should be more than 8 digits"
              : ""}
          </FormHelperText>
        </FormControl>
      </div>
      <Button
        variant="contained"
        type="submit"
        sx={{
          bgcolor: "#1D267D",
          color: "white",
          padding: {
            xs: "8px 75px",
            md: "8px 190px",
          },
          fontSize: "1rem",
          marginTop: "3px",
          letterSpacing: "3px",
          "&:hover": {
            bgcolor: "#0C134F", // Set your desired hover color here
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
}
