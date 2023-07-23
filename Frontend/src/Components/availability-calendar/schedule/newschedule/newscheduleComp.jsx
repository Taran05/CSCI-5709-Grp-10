import React, { useState, useEffect } from "react";
import "./newscheduleComp.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider, createTheme, styled} from "@mui/material/styles";
import { Button, Grid} from "@mui/material";
import { grey } from "@mui/material/colors";
import FormControlLabel from '@mui/material/FormControlLabel';
import { Checkbox, FormControl, MenuItem, Select } from '@mui/material';
import axios from 'axios';

export default function NewSchedule({scheduleName}) {

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

    const getInitialStateFromLocalStorage = () => {
        const initialState = JSON.parse(localStorage.getItem("checkboxStates"));
        return initialState || {
            Monday: { checked: false, startTime: '', endTime: '' },
            Tuesday: { checked: false, startTime: '', endTime: '' },
            Wednesday: { checked: false, startTime: '', endTime: '' },
            Thursday: { checked: false, startTime: '', endTime: '' },
            Friday: { checked: false, startTime: '', endTime: '' },
            Saturday: { checked: false, startTime: '', endTime: '' },
            Sunday: { checked: false, startTime: '', endTime: '' }
        };
    };

    const [checkboxStates, setCheckboxStates] = useState(getInitialStateFromLocalStorage);
    const [saveStatus, setSaveStatus] = useState(null);
    const [changesMade, setChangesMade] = useState(false);

    const startTimeOptions = [
        '12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM',
        '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM',
        '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM',
        '09:00 PM', '10:00 PM', '11:00 PM'
    ];

    const endTimeOptions = [
        '12:00 AM', '01:00 AM', '02:00 AM', '03:00 AM', '04:00 AM', '05:00 AM', '06:00 AM',
        '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM',
        '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM',
        '09:00 PM', '10:00 PM', '11:00 PM'
    ];

    const SaveButton = styled(Button)(({ theme }) => ({
        height: "100%",
        width: "7%",
        fontWeight: 600,
        marginLeft: "70%",
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: "#1D267D",
        "&:hover": {
          backgroundColor: "#0C134F",
        },
      }));

    const handleSaveChanges = async () => {

        const invalidDays = Object.entries(checkboxStates).filter(
            ([_, state]) => state.checked && (!state.startTime || !state.endTime)
        );

        if (invalidDays.length > 0) {
            toast.error("Please select the start & end times too!");
            return;
        }

        const newScheduleData = Object.entries(checkboxStates).filter(([_, checked]) => checked).map(([day, { startTime, endTime }]) => ({ day, startTime, endTime }));
        console.log(newScheduleData);

        const scheduleDataWithNames = newScheduleData.map(schedule => ({
            ...schedule,
            scheduleName: scheduleName,
          }));
          console.log(scheduleDataWithNames);

        // if (!changesMade) {
        //     toast.warning("No changes were made!");
        //     return;
        // }

        try {
            // Send the selectedDays data to the backend API
            await axios.post('http://localhost:3001/api/saveNewSchedule', scheduleDataWithNames);
            setSaveStatus('success');
            setChangesMade(true);
            toast.success(scheduleName + " Schedule Saved Successfully!");
            return;
        } catch (error) {
            setSaveStatus('error');
            console.error(error);
            toast.error('Failed to Save Schedule: '+scheduleName);
        }
    };

    useEffect(() => {
        if (saveStatus === 'success') {
            localStorage.setItem("checkboxStates", JSON.stringify(checkboxStates));
            setChangesMade(false);
        }
    }, [saveStatus, checkboxStates]);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item sm={6}>
                    <div className="schedule-details">
                        <div className="schedule-name">
                            <span>{scheduleName}</span>
                            <SaveButton
                                variant="contained"
                                fullWidth
                                onClick={handleSaveChanges}
                            >
                                Save
                            </SaveButton>
                        </div>
                        <br></br>
                        <div className="day-checkboxes">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={checkboxStates.Monday.checked}
                                                        onChange={(e) =>
                                                            setCheckboxStates((prevState) => ({
                                                                ...prevState,
                                                                Monday: {
                                                                    ...prevState.Monday,
                                                                    checked: e.target.checked,
                                                                },
                                                            }))
                                                        }
                                                    />
                                                }
                                                label="Monday"
                                            />
                                        </td>
                                        <td>
                                            {checkboxStates.Monday.checked ? (
                                                <ThemeProvider theme={theme}>
                                                    <div className="time-dropdown">
                                                        <FormControl>
                                                            <Select
                                                                labelId="start-time-label-Monday"
                                                                id="start-time-select-Monday"
                                                                value={checkboxStates.Monday.startTime}
                                                                onChange={(e) =>
                                                                    setCheckboxStates((prevState) => ({
                                                                        ...prevState,
                                                                        Monday: {
                                                                            ...prevState.Monday,
                                                                            startTime: e.target.value,
                                                                        },
                                                                    }))
                                                                }
                                                            >
                                                                {startTimeOptions.map((option, index) => (
                                                                    <MenuItem key={index} value={option}>
                                                                        {option}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                        <span className="time-separator">-</span>
                                                        <FormControl>
                                                            <Select
                                                                labelId="end-time-label-Monday"
                                                                id="end-time-select-Monday"
                                                                value={checkboxStates.Monday.endTime}
                                                                onChange={(e) =>
                                                                    setCheckboxStates((prevState) => ({
                                                                        ...prevState,
                                                                        Monday: {
                                                                            ...prevState.Monday,
                                                                            endTime: e.target.value,
                                                                        },
                                                                    }))
                                                                }
                                                            >
                                                                {endTimeOptions.map((option, index) => (
                                                                    <MenuItem key={index} value={option}>
                                                                        {option}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </ThemeProvider>
                                            ) : (
                                                <span>Unavailable</span>
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={checkboxStates.Tuesday.checked}
                                                        onChange={(e) =>
                                                            setCheckboxStates((prevState) => ({
                                                                ...prevState,
                                                                Tuesday: {
                                                                    ...prevState.Tuesday,
                                                                    checked: e.target.checked,
                                                                },
                                                            }))
                                                        }
                                                    />
                                                }
                                                label="Tuesday"
                                            />
                                        </td>
                                        <td>
                                            {checkboxStates.Tuesday.checked ? (
                                                <ThemeProvider theme={theme}>
                                                    <div className="time-dropdown">
                                                        <FormControl>
                                                            <Select
                                                                labelId="start-time-label-Tuesday"
                                                                id="start-time-select-Tuesday"
                                                                value={checkboxStates.Tuesday.startTime}
                                                                onChange={(e) =>
                                                                    setCheckboxStates((prevState) => ({
                                                                        ...prevState,
                                                                        Tuesday: {
                                                                            ...prevState.Tuesday,
                                                                            startTime: e.target.value,
                                                                        },
                                                                    }))
                                                                }
                                                            >
                                                                {startTimeOptions.map((option, index) => (
                                                                    <MenuItem key={index} value={option}>
                                                                        {option}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                        <span className="time-separator">-</span>
                                                        <FormControl>
                                                            <Select
                                                                labelId="end-time-label-Tuesday"
                                                                id="end-time-select-Tuesday"
                                                                value={checkboxStates.Tuesday.endTime}
                                                                onChange={(e) =>
                                                                    setCheckboxStates((prevState) => ({
                                                                        ...prevState,
                                                                        Tuesday: {
                                                                            ...prevState.Tuesday,
                                                                            endTime: e.target.value,
                                                                        },
                                                                    }))
                                                                }
                                                            >
                                                                {endTimeOptions.map((option, index) => (
                                                                    <MenuItem key={index} value={option}>
                                                                        {option}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </ThemeProvider>
                                            ) : (
                                                <span>Unavailable</span>
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={checkboxStates.Wednesday.checked}
                                                        onChange={(e) =>
                                                            setCheckboxStates((prevState) => ({
                                                                ...prevState,
                                                                Wednesday: {
                                                                    ...prevState.Wednesday,
                                                                    checked: e.target.checked,
                                                                },
                                                            }))
                                                        }
                                                    />
                                                }
                                                label="Wednesday"
                                            />
                                        </td>
                                        <td>
                                            {checkboxStates.Wednesday.checked ? (
                                                <ThemeProvider theme={theme}>
                                                    <div className="time-dropdown">
                                                        <FormControl>
                                                            <Select
                                                                labelId="start-time-label-Wednesday"
                                                                id="start-time-select-Wednesday"
                                                                value={checkboxStates.Wednesday.startTime}
                                                                onChange={(e) =>
                                                                    setCheckboxStates((prevState) => ({
                                                                        ...prevState,
                                                                        Wednesday: {
                                                                            ...prevState.Wednesday,
                                                                            startTime: e.target.value,
                                                                        },
                                                                    }))
                                                                }
                                                            >
                                                                {startTimeOptions.map((option, index) => (
                                                                    <MenuItem key={index} value={option}>
                                                                        {option}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                        <span className="time-separator">-</span>
                                                        <FormControl>
                                                            <Select
                                                                labelId="end-time-label-Wednesday"
                                                                id="end-time-select-Wednesday"
                                                                value={checkboxStates.Wednesday.endTime}
                                                                onChange={(e) =>
                                                                    setCheckboxStates((prevState) => ({
                                                                        ...prevState,
                                                                        Wednesday: {
                                                                            ...prevState.Wednesday,
                                                                            endTime: e.target.value,
                                                                        },
                                                                    }))
                                                                }
                                                            >
                                                                {endTimeOptions.map((option, index) => (
                                                                    <MenuItem key={index} value={option}>
                                                                        {option}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </ThemeProvider>
                                            ) : (
                                                <span>Unavailable</span>
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={checkboxStates.Thursday.checked}
                                                        onChange={(e) =>
                                                            setCheckboxStates((prevState) => ({
                                                                ...prevState,
                                                                Thursday: {
                                                                    ...prevState.Thursday,
                                                                    checked: e.target.checked,
                                                                },
                                                            }))
                                                        }
                                                    />
                                                }
                                                label="Thursday"
                                            />
                                        </td>
                                        <td>
                                            {checkboxStates.Thursday.checked ? (
                                                <ThemeProvider theme={theme}>
                                                    <div className="time-dropdown">
                                                        <FormControl>
                                                            <Select
                                                                labelId="start-time-label-Thursday"
                                                                id="start-time-select-Thursday"
                                                                value={checkboxStates.Thursday.startTime}
                                                                onChange={(e) =>
                                                                    setCheckboxStates((prevState) => ({
                                                                        ...prevState,
                                                                        Thursday: {
                                                                            ...prevState.Thursday,
                                                                            startTime: e.target.value,
                                                                        },
                                                                    }))
                                                                }
                                                            >
                                                                {startTimeOptions.map((option, index) => (
                                                                    <MenuItem key={index} value={option}>
                                                                        {option}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                        <span className="time-separator">-</span>
                                                        <FormControl>
                                                            <Select
                                                                labelId="end-time-label-Thursday"
                                                                id="end-time-select-Thursday"
                                                                value={checkboxStates.Thursday.endTime}
                                                                onChange={(e) =>
                                                                    setCheckboxStates((prevState) => ({
                                                                        ...prevState,
                                                                        Thursday: {
                                                                            ...prevState.Thursday,
                                                                            endTime: e.target.value,
                                                                        },
                                                                    }))
                                                                }
                                                            >
                                                                {endTimeOptions.map((option, index) => (
                                                                    <MenuItem key={index} value={option}>
                                                                        {option}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </ThemeProvider>
                                            ) : (
                                                <span>Unavailable</span>
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={checkboxStates.Friday.checked}
                                                        onChange={(e) =>
                                                            setCheckboxStates((prevState) => ({
                                                                ...prevState,
                                                                Friday: {
                                                                    ...prevState.Friday,
                                                                    checked: e.target.checked,
                                                                },
                                                            }))
                                                        }
                                                    />
                                                }
                                                label="Friday"
                                            />
                                        </td>
                                        <td>
                                            {checkboxStates.Friday.checked ? (
                                                <ThemeProvider theme={theme}>
                                                    <div className="time-dropdown">
                                                        <FormControl>
                                                            <Select
                                                                labelId="start-time-label-Friday"
                                                                id="start-time-select-Friday"
                                                                value={checkboxStates.Friday.startTime}
                                                                onChange={(e) =>
                                                                    setCheckboxStates((prevState) => ({
                                                                        ...prevState,
                                                                        Friday: {
                                                                            ...prevState.Friday,
                                                                            startTime: e.target.value,
                                                                        },
                                                                    }))
                                                                }
                                                            >
                                                                {startTimeOptions.map((option, index) => (
                                                                    <MenuItem key={index} value={option}>
                                                                        {option}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                        <span className="time-separator">-</span>
                                                        <FormControl>
                                                            <Select
                                                                labelId="end-time-label-Friday"
                                                                id="end-time-select-Friday"
                                                                value={checkboxStates.Friday.endTime}
                                                                onChange={(e) =>
                                                                    setCheckboxStates((prevState) => ({
                                                                        ...prevState,
                                                                        Friday: {
                                                                            ...prevState.Friday,
                                                                            endTime: e.target.value,
                                                                        },
                                                                    }))
                                                                }
                                                            >
                                                                {endTimeOptions.map((option, index) => (
                                                                    <MenuItem key={index} value={option}>
                                                                        {option}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </ThemeProvider>
                                            ) : (
                                                <span>Unavailable</span>
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={checkboxStates.Saturday.checked}
                                                        onChange={(e) =>
                                                            setCheckboxStates((prevState) => ({
                                                                ...prevState,
                                                                Saturday: {
                                                                    ...prevState.Saturday,
                                                                    checked: e.target.checked,
                                                                },
                                                            }))
                                                        }
                                                    />
                                                }
                                                label="Saturday"
                                            />
                                        </td>
                                        <td>
                                            {checkboxStates.Saturday.checked ? (
                                                <ThemeProvider theme={theme}>
                                                    <div className="time-dropdown">
                                                        <FormControl>
                                                            <Select
                                                                labelId="start-time-label-Saturday"
                                                                id="start-time-select-Saturday"
                                                                value={checkboxStates.Saturday.startTime}
                                                                onChange={(e) =>
                                                                    setCheckboxStates((prevState) => ({
                                                                        ...prevState,
                                                                        Saturday: {
                                                                            ...prevState.Saturday,
                                                                            startTime: e.target.value,
                                                                        },
                                                                    }))
                                                                }
                                                            >
                                                                {startTimeOptions.map((option, index) => (
                                                                    <MenuItem key={index} value={option}>
                                                                        {option}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                        <span className="time-separator">-</span>
                                                        <FormControl>
                                                            <Select
                                                                labelId="end-time-label-Saturday"
                                                                id="end-time-select-Saturday"
                                                                value={checkboxStates.Saturday.endTime}
                                                                onChange={(e) =>
                                                                    setCheckboxStates((prevState) => ({
                                                                        ...prevState,
                                                                        Saturday: {
                                                                            ...prevState.Saturday,
                                                                            endTime: e.target.value,
                                                                        },
                                                                    }))
                                                                }
                                                            >
                                                                {endTimeOptions.map((option, index) => (
                                                                    <MenuItem key={index} value={option}>
                                                                        {option}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </ThemeProvider>
                                            ) : (
                                                <span>Unavailable</span>
                                            )}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={checkboxStates.Sunday.checked}
                                                        onChange={(e) =>
                                                            setCheckboxStates((prevState) => ({
                                                                ...prevState,
                                                                Sunday: {
                                                                    ...prevState.Sunday,
                                                                    checked: e.target.checked,
                                                                },
                                                            }))
                                                        }
                                                    />
                                                }
                                                label="Sunday"
                                            />
                                        </td>
                                        <td>
                                            {checkboxStates.Sunday.checked ? (
                                                <ThemeProvider theme={theme}>
                                                    <div className="time-dropdown">
                                                        <FormControl>
                                                            <Select
                                                                labelId="start-time-label-Sunday"
                                                                id="start-time-select-Sunday"
                                                                value={checkboxStates.Sunday.startTime}
                                                                onChange={(e) =>
                                                                    setCheckboxStates((prevState) => ({
                                                                        ...prevState,
                                                                        Sunday: {
                                                                            ...prevState.Sunday,
                                                                            startTime: e.target.value,
                                                                        },
                                                                    }))
                                                                }
                                                            >
                                                                {startTimeOptions.map((option, index) => (
                                                                    <MenuItem key={index} value={option}>
                                                                        {option}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                        <span className="time-separator">-</span>
                                                        <FormControl>
                                                            <Select
                                                                labelId="end-time-label-Sunday"
                                                                id="end-time-select-Sunday"
                                                                value={checkboxStates.Sunday.endTime}
                                                                onChange={(e) =>
                                                                    setCheckboxStates((prevState) => ({
                                                                        ...prevState,
                                                                        Sunday: {
                                                                            ...prevState.Sunday,
                                                                            endTime: e.target.value,
                                                                        },
                                                                    }))
                                                                }
                                                            >
                                                                {endTimeOptions.map((option, index) => (
                                                                    <MenuItem key={index} value={option}>
                                                                        {option}
                                                                    </MenuItem>
                                                                ))}
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </ThemeProvider>
                                            ) : (
                                                <span>Unavailable</span>
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <ToastContainer position="top-center" />
                </Grid>
            </Grid>
        </>);
}