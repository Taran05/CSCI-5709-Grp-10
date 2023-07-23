import React, { useState } from "react";
import "./blockdatesComp.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Calendar} from "react-multi-date-picker";
import { createTheme, styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import axios from 'axios';

export default function BlockDates() {
  const [showCalendarDialog, setShowCalendarDialog] = useState(false);
  const [selectedUnavailableDates, setSelectedUnavailableDates] = useState([]);

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

const BlockDatesButton = styled(Button)(({ theme }) => ({
    height: "28%",
    width: "100%",
    fontWeight: 600,
    marginTop: "10px",
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: "#1D267D",
    "&:hover": {
      backgroundColor: "#0C134F",
    },
  }));

  const handleCalendarDialogOpen = () => {
    setShowCalendarDialog(true);
  };

  const handleCalendarDialogClose = () => {
    setShowCalendarDialog(false);
  };

  const handleBlockDates = async () => {
    try{
      const dates = [];
      for (let index = 0; index < selectedUnavailableDates.length; index++) {
        const day = selectedUnavailableDates[index].day;
        const month = selectedUnavailableDates[index].month.name;
        const year = selectedUnavailableDates[index].year;
        const date = day+" "+month+" "+year;
        dates.push(date);
      }
      console.log(dates);
      await axios.post('http://localhost:3001/api/blockDates', dates);
      toast.success("Dates blocked successfully!");
      handleCalendarDialogClose();
    }
    catch (error) {
      console.error(error);
      toast.error('Failed to Block Dates');
   }
  };
 
  return (
    <>
      <Grid item sm={6}>
        <div className="block-dates">
          <h2>Block Dates</h2>
          <p>Add dates when you will be unavailable to take calls</p>
          <BlockDatesButton variant="contained" fullWidth onClick={handleCalendarDialogOpen}>
            Add Unavailable Dates
          </BlockDatesButton>
          
          <Dialog open={showCalendarDialog} onClose={handleCalendarDialogClose}>
            <DialogTitle align="center" fontSize={"18px"} fontWeight={"bold"}>Select Unavailable Dates</DialogTitle>
            <DialogContent>
              <Calendar
                value={selectedUnavailableDates}
                onChange={setSelectedUnavailableDates}
                multiple
                sort
                layout="landscape"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCalendarDialogClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleBlockDates} color="primary">
                Block Dates
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Grid>
    </>
  );
}
