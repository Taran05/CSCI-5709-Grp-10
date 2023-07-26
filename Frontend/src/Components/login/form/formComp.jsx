/**
 * @author Amanjot Singh <am854663@dal.ca/B00942293>
 */

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./formComp.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormHelperText } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { LOGIN_USER } from "../../../utils/apiUrls";
import { useNavigate } from "react-router-dom";

export default function FormComp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEmailValid(!!email);
    setIsPasswordValid(!!password);

    if (!email || !password) {
      return;
    }

    console.log("Form submitted:", { email, password });
    setEmail("");
    setPassword("");
    setIsEmailValid(true);
    setIsPasswordValid(true);
    axios
      .post(LOGIN_USER, { email, password })
      .then((response) => {
        if (response.status === 200) {
          handleSnackbarOpen("Login successful. Redirecting...");

          localStorage.setItem("user", JSON.stringify(response.data.user));

          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          handleSnackbarOpen("Login failed. Wrong Credentials!");
        }
      })
      .catch((error) => {
        handleSnackbarOpen("Login failed. Wrong Credentials!");
      });
  };

  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
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
      <div className="form">
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
            !isEmailValid
              ? email
                ? "Please enter a valid email address"
                : "Please enter your email"
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
            {!isPasswordValid
              ? password
                ? "Password should be more than 8 digits"
                : "Please enter your password"
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
      {/* Snackbar to show success or error message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={
            snackbarMessage === "Login successful. Redirecting..."
              ? "success"
              : "error"
          }
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
