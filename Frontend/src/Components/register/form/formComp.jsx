/**
 * @author Amanjot Singh <am854663@dal.ca/B00942293>
 */
import "./formComp.css";
import axios from "axios";
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
import Alert from "@mui/material/Alert";
import Grid from "@mui/material/Grid";
import { CHECK_EMAIL_EXIST } from "../../../utils/apiUrls";
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

  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
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

    // Form submission successful
    console.log("Form submitted:", { firstName, lastName, email, password });
    // Reset form fields
    axios
      .get(`${CHECK_EMAIL_EXIST}/${email}`)
      .then((response) => {
        handleSnackbarOpen("Registration failed. Email Already Exist!");
      })
      .catch((err) => {
        // Redirect to the next form after 1.5 seconds
        handleSnackbarOpen("Data has been successfully saved. Redirecting...");

        setTimeout(() => {
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setIsFirstNameValid(true);
          setIsLastNameValid(true);
          setIsEmailValid(true);
          setIsPasswordValid(true);

          navigate("/about-you", {
            state: { email, firstName, lastName, password },
          });
        }, 1500);
      });
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
      className="register-box"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Set anchorOrigin to top center
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={
            snackbarMessage.includes("successful") ? "success" : "error"
          }
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Grid container spacing={0}>
        {/* <div className="form"> */}
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <TextField
            required
            sx={{ width: "100%" }}
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
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <TextField
            required
            sx={{ width: "100%" }}
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
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6}>
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
            helperText={
              !isEmailValid && email ? "Please enter a valid email address" : ""
            }
          />
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6}>
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
        </Grid>
        {/* </div> */}
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <Button
            variant="contained"
            type="submit"
            sx={{
              width: "95%",
              bgcolor: "#1D267D",
              color: "white",
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
        </Grid>
      </Grid>
    </Box>
  );
}
