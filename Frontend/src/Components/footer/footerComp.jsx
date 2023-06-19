import React from "react";
import "./footerComp.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function FooterComp() {
  return (
    <footer className="footer" style={{ backgroundColor: "#1D267D" }}>
      <div className="footer-content">
        <div className="footer-icons">
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </div>
        <div className="footer-text">Learnly</div>
      </div>
    </footer>
  );
}

export default FooterComp;
