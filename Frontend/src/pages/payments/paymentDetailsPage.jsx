import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Snackbar } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const StyledBox = styled(Box)({
  maxWidth: "400px",
  margin: "auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#F7F7F7",
});

const PaymentDetailsPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cvv, setCvv] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const location = useLocation();
  const mentorId = location.state.mentorId;
  const price = location.state.servicePrice;

  //const { bookingId } = useParams();
  const navigate = useNavigate();
  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  const handlePayButtonClick = () => {
    // Validate the input
    if (cardNumber.length !== 16) {
      setSnackbarMessage("Card number should be 16 digits");
      setSnackbarOpen(true);
      return;
    }
    if (cardHolderName === "") {
      setSnackbarMessage("Card holder name field should not be empty");
      setSnackbarOpen(true);
      return;
    }
    if (cvv.length !== 3) {
      setSnackbarMessage("CVV should be 3 numbers");
      setSnackbarOpen(true);
      return;
    }

    // If everything is fine, send a POST request
    fetch(`http://localhost:3001/payment/${mentorId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        cardNumber,
        cardHolderName,
        cvv,
      }),
    })
      .then((response) => {
        if (response.ok) {
          setSnackbarMessage("Payment successful");
          setSnackbarOpen(true);
          // Redirect to the home page after 2 seconds
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          setSnackbarMessage("Payment failed");
          setSnackbarOpen(true);
        }
      })
      .catch((error) => {
        setSnackbarMessage("Payment failed");
        setSnackbarOpen(true);
      });
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleCardHolderNameChange = (event) => {
    setCardHolderName(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  return (
    <StyledBox>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", marginBottom: "20px", color: "#333" }}
      >
        Complete Your Payment
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Typography variant="h6" color="text.secondary">
          Price: {price}
        </Typography>
        <Typography variant="h6" color="text.primary"></Typography>
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="card-number">Card Number</InputLabel>
          <OutlinedInput
            id="card-number"
            value={cardNumber}
            onChange={handleCardNumberChange}
            startAdornment={
              <InputAdornment position="start">
                <CreditCardIcon />
              </InputAdornment>
            }
            label="Card Number"
          />
        </FormControl>
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="card-holder-name">Card Holder Name</InputLabel>
          <OutlinedInput
            id="card-holder-name"
            value={cardHolderName}
            onChange={handleCardHolderNameChange}
            startAdornment={
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            }
            label="Card Holder Name"
          />
        </FormControl>
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="cvv">CVV</InputLabel>
          <OutlinedInput
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <LockIcon />
                </IconButton>
              </InputAdornment>
            }
            label="CVV"
          />
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePayButtonClick}
        >
          Pay
        </Button>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
      />
    </StyledBox>
  );
};

export default PaymentDetailsPage;
