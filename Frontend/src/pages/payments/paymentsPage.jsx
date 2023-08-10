/**
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */
import "./paymentsPage.css";
import React, { useEffect } from "react";
import PaymentsComp from "../../Components/payments/paymentsComp";
import { useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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

function PaymentsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = async () => {
      const localUser = JSON.parse(localStorage.getItem("user"));
      console.log("Printing local user:", localUser);

      if (!localUser) {
        navigate("/login");
      }
    };

    checkLogin();
  }, []);

  return <ThemeProvider theme={theme}><PaymentsComp></PaymentsComp></ThemeProvider>;
}

export default PaymentsPage;
