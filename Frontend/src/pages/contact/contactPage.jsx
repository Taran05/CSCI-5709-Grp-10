import "./contactPage.css";
import React from "react";
import ContactFormComp from "../../Components/contact/form/contactFormComp";
import ContactInfoComp from "../../Components/contact/info/contactInfoComp";
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

function ContactPage() {
  return (
    <div className="Contact">
      <div className="contact-container">
        <div className="left-form">
          <div className="contact-form">
            <h1 className="contact-form-header">
              GET IN
              <span style={{ marginLeft: "6px", color: "#5C469C" }}>
                TOUCH
              </span>{" "}
            </h1>
            <ThemeProvider theme={theme}>
              <ContactFormComp />
            </ThemeProvider>
          </div>
        </div>
        <div className="right-info">
          <div className="info">
            <h1 className="info-header">
              CONTACT
              <span style={{ marginLeft: "6px", color: "#aba7b8" }}>
                US
              </span>{" "}
            </h1>
            <ThemeProvider theme={theme}>
              <ContactInfoComp />
            </ThemeProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
