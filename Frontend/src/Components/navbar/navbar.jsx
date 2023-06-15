import React, { useEffect, useState } from "react";
import "./navbar.css";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    const url = location.pathname;
    setCurrentPath(url);
    console.log(url);
  }, [location]);

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Learnly</div>
        {currentPath === "/login" ? (
          <Link to="/register" className="nav-link">
            <Button
              variant="contained"
              sx={{ bgcolor: "black", color: "white" }}
              className="login-btn"
            >
              Register
            </Button>
          </Link>
        ) : (
          <Link to="/login" className="nav-link">
            <Button
              variant="contained"
              sx={{ bgcolor: "black", color: "white" }}
              className="login-btn"
            >
              Login
            </Button>
          </Link>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
