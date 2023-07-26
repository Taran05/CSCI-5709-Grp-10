import React, { useEffect, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Card, Typography, Grid, Box, Divider } from "@mui/material";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./rightServiceViewComp.css"; // Import the CSS file

const RightServiceViewComp = ({ mentorId }) => {
  const [serviceDetails, setServiceDetails] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/services/${mentorId}`
        );
        setServiceDetails(response.data);
      } catch (error) {
        console.error("Failed to fetch mentor service details", error);
      }
    };
    fetchData();
  }, [mentorId]);

  const handleServiceClick = (service) => {
    navigate("/bookingSchedule", { state: { service, mentorId } });
  };

  return (
    <Grid container spacing={4} className="grid-container">
      {serviceDetails.map((service, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
          <Card
            elevation={5}
            className="service-card"
            onClick={() => handleServiceClick(service)}
          >
            <Box className="icon-box">
              <CalendarMonthIcon color="disabled" />
            </Box>
            <Typography variant="h6" className="service-name">
              {service.serviceName}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box className="detail-box">
              <Typography variant="body1">{service.time}</Typography>
              <Typography variant="body1">{service.price}</Typography>
            </Box>
            <Box className="icon-box-right">
              <KeyboardArrowRightIcon color="disabled" />
            </Box>
          </Card>
        </Grid>
      ))}
      {serviceDetails.length % 2 !== 0 && <Grid item xs={12} sm={6} md={6} />}
    </Grid>
  );
};

export default RightServiceViewComp;
