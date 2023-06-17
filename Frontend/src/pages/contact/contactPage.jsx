import "./contactPage.css";
import React from "react";
import ContactForm from "../../Components/contact/form/contactForm";
import ContactInfo from "../../Components/contact/info/contactInfo";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 430,
      md: 640,
      lg: 1100,
      xl: 1450,
    },
  },
});


function ContactPage() {
    return (
    <div className="App">
      <div className="container">
        <div className="left-div">
          <div className="form">
            <h1 className="form-header">
              GET IN
              <span style={{ marginLeft: "6px", color: "#5C469C" }}>
                TOUCH
              </span>{" "}
            </h1>
            <ThemeProvider theme={theme}>
            <ContactForm />
            </ThemeProvider>
          </div>
        </div>
        <div className="right-div">
            <div className="info">  
             <h1 className="info-header">
              CONTACT
              <span style={{ marginLeft: "6px", color: "#aba7b8" }}>
                US
              </span>{" "}
            </h1>
            <ThemeProvider theme={theme}>
              <ContactInfo />
              </ThemeProvider>

            </div>
          </div>
      </div>
    </div>
    );
}

export default ContactPage;