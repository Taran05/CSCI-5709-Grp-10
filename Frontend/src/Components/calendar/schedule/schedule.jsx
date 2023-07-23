import React, { useState } from "react";
import "./schedule.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createTheme, styled } from "@mui/material/styles";
import { Button, Grid, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import AddIcon from '@mui/icons-material/Add';
import DefaultSchedule from "./defaultschedule/defaultschedule";
import BlockDates from "./blockdates/blockdates";
import NewSchedule from "./newschedule/newschedule";

export default function Schedule() {

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

  const [showNewScheduleDialog, setShowNewScheduleDialog] = useState(false);
  const [newScheduleName, setNewScheduleName] = useState("");
  const [newSchedules, setNewSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const DefaultScheduleButton = styled(Button)(({ theme }) => ({
    height: "100%",
    width: "100%",
    fontWeight: 600,
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: "#1D267D",
    "&:hover": {
      backgroundColor: "#0C134F",
    },
  }));

  const ScheduleButton = styled(Button)(({ theme }) => ({
    height: "100%",
    width: "100%",
    fontWeight: 600,
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: "#1D267D",
    "&:hover": {
      backgroundColor: "#0C134F",
    },
  }));

  const NewScheduleButton = styled(Button)(({ theme }) => ({
    height: "100%",
    width: "100%",
    fontWeight: 600,
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: grey[50],
    "&:hover": {
      backgroundColor: "#D4ADFC",
    },
  }));

  const handleNewScheduleDialogOpen = () => {
    setShowNewScheduleDialog(true);
  };

  const handleNewScheduleDialogClose = () => {
    setShowNewScheduleDialog(false);
  };

  const handleCreateNewSchedule = () => {
    if (!newScheduleName) {
      toast.error("Please enter a schedule name!");
      return;
    }
    const newSchedule = {
      scheduleName: newScheduleName,
      scheduleData: {} // You can add additional properties here as needed
    };
    setNewSchedules(prevSchedules => [...prevSchedules, newSchedule]);
    handleNewScheduleDialogClose();
    setNewScheduleName("");
    toast.success("New Schedule Created : " + newScheduleName);
  };

  return (
    <>
      <Grid item sm={12}>
        <Grid container spacing={2}>
          <Grid item sm={0}>
            <DefaultScheduleButton
              variant="contained"
              disabled={!selectedSchedule}
              fullWidth
              onClick={() => setSelectedSchedule(null)}
            >
              Default
            </DefaultScheduleButton>
          </Grid>
          {newSchedules.map((schedule, index) => (
            <Grid item sm={0} key={index}>
              {/* Display the new button for each created schedule */}
              <ScheduleButton
                variant="contained"
                fullWidth
                disabled={selectedSchedule === schedule.scheduleName}
                onClick={() => setSelectedSchedule(schedule.scheduleName)}
              >
                {schedule.scheduleName}
              </ScheduleButton>
            </Grid>
          ))}
          <Grid item sm={0}>
            <NewScheduleButton
              variant="contained"
              fullWidth
              onClick={handleNewScheduleDialogOpen}
            >
              <AddIcon /> New Schedule
            </NewScheduleButton>
          </Grid>
        </Grid>
      </Grid>

      <Dialog open={showNewScheduleDialog} onClose={handleNewScheduleDialogClose}>
        <DialogTitle>Create New Schedule</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Schedule Name"
            fullWidth
            value={newScheduleName}
            onChange={(e) => setNewScheduleName(e.target.value)}
            inputProps={{ style: { cursor: "default" } }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNewScheduleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCreateNewSchedule} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <br></br>
      <br></br>
      <br></br>
      <Grid container spacing={2}>
        {selectedSchedule ? (
          <Grid item sm={6}>
            {newSchedules.map((schedule, index) => {
              if (selectedSchedule === schedule.scheduleName) {
                return (
                  <div key={index}>
                     <NewSchedule scheduleName={schedule.scheduleName} />
                  </div>
                );
              }
              return null;
            })}
          </Grid>
        ) : (
          <Grid item sm={6}>
            <DefaultSchedule />
          </Grid>
        )}
        <Grid>
          <BlockDates />
        </Grid>
      </Grid>
    </>
  );
}