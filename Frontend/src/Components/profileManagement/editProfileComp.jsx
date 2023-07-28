import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import getAllUsernames from "../../utils/getAllUsers"; // Import the function to get usernames
import { GET_MENTOR_DETAILS } from "../../utils/apiUrls";
import { PUT_USER_DATA } from "../../utils/apiUrls";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [disPlayName, setdisPlayName] = React.useState("");
  const [aboutYou, setAboutYou] = React.useState("");
  const [isIdUnique, setIsIdUnique] = React.useState(true);
  const [userName, setUsername] = React.useState(true);
  const [usernames, setUsernames] = React.useState([]); // State variable to store the usernames
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const handleTextFieldChange = (event) => {
    const user = event.target.value.trim();

    // Check if the entered ID is unique
    setIsIdUnique(!usernames.includes(user.toLowerCase()));

    // Set the username state
    setUsername(user);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    // Fetch the usernames from the API using the function

    const fetchUsernames = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user")); // Adjust this line according to how your user object is structured
        const currentUsername = user.userName;
        const allUsernames = await getAllUsernames();
        const usernames = allUsernames.filter(
          (username) => username != currentUsername
        );
        setUsernames(usernames);
      } catch (error) {
        console.error("Error fetching usernames:", error);
        setUsernames([]); // Return an empty array in case of an error
      }
    };
    fetchUsernames();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("user")); // Adjust this line according to how your user object is structured
    const currentUsername = user.userName;

    console.log("here");
    // Your data to send to the API
    const dataToSend = {
      newUserName: userName,
      currentUsername: currentUsername,
      firstName,
      lastName,
      email,
      displayName: disPlayName,
      aboutYou,
    };

    axios
      .put(PUT_USER_DATA, dataToSend)
      .then((response) => {
        handleSnackbarOpen("Information Saved...");

        const newUser = {
          email: email,
          firstName: firstName,
          userName: userName,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  React.useEffect(() => {
    // Get the username from the user object in local storage
    const user = JSON.parse(localStorage.getItem("user")); // Adjust this line according to how your user object is structured
    const username = user.userName;

    // Send a GET request to the API with the username
    axios
      .get(`${GET_MENTOR_DETAILS}/${username}`)
      .then((response) => {
        const data = response.data.user;

        // Set the states with the received data
        setUsername(data.username);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        setdisPlayName(data.displayName);
        setAboutYou(data.aboutYou);
      })
      .catch((error) => console.error(error));
  }, []); // An empty dependencies array means this useEffect will run once after the component mounts
  // An empty dependencies array means this useEffect will run once after the component mounts

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Account" {...a11yProps(0)} />
          <Tab label="Profile" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <form onSubmit={handleSubmit}>
        <CustomTabPanel value={value} index={0}>
          <TextField
            label="Should be unique"
            id="outlined-start-adornment"
            sx={{
              width: "38.8ch",
              "@media (max-width: 600px)": {
                width: "100%",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">learnly.io/</InputAdornment>
              ),
            }}
            onChange={handleTextFieldChange}
            error={!isIdUnique}
            value={userName}
            helperText={!isIdUnique ? "Username already exists!" : ""}
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
            sx={{ marginTop: "1em", width: "38.8ch" }}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <Button
            variant="contained"
            type="submit"
            sx={{
              bgcolor: "#1D267D",
              color: "white",
              width: "44ch",
              marginTop: "7px",
              letterSpacing: "3px",
              "&:hover": {
                bgcolor: "#0C134F",
              },
            }}
          >
            Submit
          </Button>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="form">
            <TextField
              sx={{ paddingRight: 3, paddingBottom: 2 }}
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
            />
            <TextField
              required
              id="disPlayName"
              placeholder="Your Display Name"
              label="Display Name"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              sx={{ marginBottom: "1em", width: "49ch" }}
              value={disPlayName}
              onChange={(event) => setdisPlayName(event.target.value)}
            />
            <TextField
              id="filled-multiline-static"
              label="About You"
              multiline
              rows={4}
              sx={{ width: "49ch" }}
              value={aboutYou}
              onChange={(event) => setAboutYou(event.target.value)}
              variant="filled"
            />
            <br />
            <Button
              variant="contained"
              type="submit"
              sx={{
                bgcolor: "#1D267D",
                width: "56ch",
                color: "white",
                marginTop: "7px",
                letterSpacing: "3px",
                "&:hover": {
                  bgcolor: "#0C134F",
                },
              }}
            >
              Submit
            </Button>
          </div>
        </CustomTabPanel>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={
            snackbarMessage === "Information Saved..." ? "success" : "error"
          }
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
