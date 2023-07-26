import React, { useEffect, useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Card,
  CircularProgress,
  Typography,
  Grid,
  Box,
  Divider,
} from "@mui/material";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

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
    <Grid
      container
      spacing={4}
      sx={{
        paddingLeft: "10%",
        paddingTop: "8%",
        paddingRight: "10%",
      }}
    >
      {serviceDetails.map((service, index) => (
        <Grid item xs={12} sm={6} md={6} key={index}>
          <Card
            elevation={5}
            sx={{
              height: "85%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              paddingBottom: "6%",
              marginTop: "5%",
              paddingLeft: "6%",
              paddingRight: "6%",
              borderRadius: "5px",
              textAlign: "center",
              position: "relative",
              transition: "0.3s",
              ":hover": {
                transform: "scale(1.03)",
                boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                cursor: "pointer",
              },
            }}
            onClick={() => handleServiceClick(service)}
          >
            <Box position="absolute" top="10px" left="10px">
              <CalendarMonthIcon color="disabled" />
            </Box>
            <Typography
              variant="h6"
              sx={{ marginTop: "15px", marginBottom: "auto" }}
            >
              {service.serviceName}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "auto",
              }}
            >
              <Typography variant="body1">{service.time}</Typography>
              <Typography variant="body1">{service.price}</Typography>
            </Box>
            <Box position="absolute" top="10px" right="10px">
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
