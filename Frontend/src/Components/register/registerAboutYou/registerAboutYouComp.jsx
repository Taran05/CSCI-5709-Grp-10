// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import FormStep1 from "../stepForms/stepForm1/stepForm1Comp";
// import FormStep2 from "../stepForms/stepForm2/stepForm2Comp";
// import Snackbar from "@mui/material/Snackbar";
// import Alert from "@mui/material/Alert";
// import axios from "axios";
// import LoadingProgressComp from "../loadingProgress/loadingProgressComp";
// import { useNavigate, useLocation } from "react-router-dom";

// const steps = ["Basic Information", "Your Expertise"];

// const RegisterAboutYouComp = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const [isStep1Valid, setIsStep1Valid] = React.useState(false);
//   const [isStep2Valid, setIsStep2Valid] = React.useState(false);
//   const [snackbarOpen, setSnackbarOpen] = React.useState(false);
//   const [snackbarMessage, setSnackbarMessage] = React.useState("");
//   const [formData, setFormData] = React.useState({
//     pageLink: "",
//     plan: "",
//     expertise: [],
//   });
//   const [loadingFinished, setLoadingFinished] = React.useState(false);

//   const formDataRef = React.useRef({
//     pageLink: "",
//     plan: "",
//     expertise: [],
//   });

//   const handleNext = () => {
//     if (activeStep === 0 && !isStep1Valid) {
//       handleSnackbarOpen("Select an option");
//       return;
//     }

//     if (activeStep === 1 && !isStep2Valid) {
//       handleSnackbarOpen("Select an option");
//       return;
//     }

//     if (activeStep === steps.length - 1) {
//       // If the last step is completed, save the form data and set loadingFinished to true
//       setLoadingFinished(true);
//       // Save the form data in the formDataRef
//       formDataRef.current = { ...formData };
//       return;
//     }

//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//     setIsStep1Valid(false);
//     setIsStep2Valid(false);
//     setLoadingFinished(false); // Reset loadingFinished state
//     setFormData({
//       pageLink: "",
//       plan: "",
//       expertise: [],
//     });
//   };

//   const handleSnackbarOpen = (message) => {
//     setSnackbarMessage(message);
//     setSnackbarOpen(true);
//   };

//   const handleSnackbarClose = () => {
//     setSnackbarOpen(false);
//   };
//   const handleStep1Complete = (isValid) => {
//     setIsStep1Valid(isValid);
//   };

//   const handleStep2Complete = (isValid) => {
//     setIsStep2Valid(isValid);
//   };

//   // Render the appropriate form for the active step
//   const renderStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <FormStep1
//             formData={formData}
//             setFormData={setFormData}
//             onStepComplete={handleStep1Complete}
//           />
//         );
//       case 1:
//         return (
//           <FormStep2
//             formData={formData}
//             setFormData={setFormData}
//             onStepComplete={handleStep2Complete}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   // Redirect to "/dashboard" when loadingFinished is true
//   React.useEffect(() => {
//     if (loadingFinished) {
//       const user = {
//         firstName: location.state.firstName,
//         lastName: location.state.lastName,
//         email: location.state.email,
//         password: location.state.password,
//         expertise: formData.expertise,
//         userName: formData.pageLink,
//         reason: formData.plan,
//       };
//       // Save data to localStorage
//       localStorage.setItem("user", user);

//       // Delay the redirect for demonstration purposes
//       setTimeout(() => {
//         navigate("/dashboard");
//       }, 2000);
//     }
//   }, [loadingFinished, navigate]);

//   return (
//     <Box sx={{ width: "100%" }}>
//       <Stepper activeStep={activeStep}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       {activeStep === steps.length ? (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }}>
//             All steps completed - you&apos;re finished
//           </Typography>
//           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//             <Box sx={{ flex: "1 1 auto" }} />
//             <Button onClick={handleReset}>Reset</Button>
//           </Box>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           {renderStepContent(activeStep)}
//           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//             <Button
//               color="inherit"
//               disabled={activeStep === 0}
//               onClick={handleBack}
//               sx={{ mr: 1 }}
//             >
//               Back
//             </Button>
//             <Box sx={{ flex: "1 1 auto" }} />
//             <Button onClick={handleNext}>
//               {activeStep === steps.length - 1 ? "Finish" : "Next"}
//             </Button>
//           </Box>
//         </React.Fragment>
//       )}
//       <Snackbar
//         open={snackbarOpen}
//         autoHideDuration={6000}
//         onClose={handleSnackbarClose}
//         anchorOrigin={{ vertical: "top", horizontal: "center" }} // Set anchorOrigin to top center
//       >
//         <Alert
//           onClose={handleSnackbarClose}
//           severity="error"
//           sx={{ width: "100%" }}
//         >
//           {snackbarMessage}
//         </Alert>
//       </Snackbar>
//       {loadingFinished && <LoadingProgressComp />}{" "}
//       {/* Show the loading spinner when loadingFinished is true */}
//     </Box>
//   );
// };

// export default RegisterAboutYouComp;

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormStep1 from "../stepForms/stepForm1/stepForm1Comp";
import FormStep2 from "../stepForms/stepForm2/stepForm2Comp";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import axios from "axios";
import LoadingProgressComp from "../loadingProgress/loadingProgressComp";
import { useNavigate, useLocation } from "react-router-dom";
import { REGISTER_USER } from "../../../utils/apiUrls";
const steps = ["Basic Information", "Your Expertise"];

const RegisterAboutYouComp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeStep, setActiveStep] = React.useState(0);
  const [isStep1Valid, setIsStep1Valid] = React.useState(false);
  const [isStep2Valid, setIsStep2Valid] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [snackbarMessage, setSnackbarMessage] = React.useState("");
  const [formData, setFormData] = React.useState({
    pageLink: "",
    plan: "",
    expertise: [],
  });
  const [loadingFinished, setLoadingFinished] = React.useState(false);

  const formDataRef = React.useRef({
    pageLink: "",
    plan: "",
    expertise: [],
  });

  const handleNext = () => {
    if (activeStep === 0 && !isStep1Valid) {
      handleSnackbarOpen("Select an option");
      return;
    }

    if (activeStep === 1 && !isStep2Valid) {
      handleSnackbarOpen("Select an option");
      return;
    }

    if (activeStep === steps.length - 1) {
      formDataRef.current = { ...formData };

      // If the last step is completed, save the form data and set loadingFinished to true
      handleFormSubmit(); // Call handleFormSubmit function to submit the form data
      return;
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setIsStep1Valid(false);
    setIsStep2Valid(false);
    setLoadingFinished(false); // Reset loadingFinished state
    setFormData({
      pageLink: "",
      plan: "",
      expertise: [],
    });
  };

  const handleSnackbarOpen = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleStep1Complete = (isValid) => {
    setIsStep1Valid(isValid);
  };

  const handleStep2Complete = (isValid) => {
    setIsStep2Valid(isValid);
  };

  // Function to submit the form data to the API
  const handleFormSubmit = () => {
    const user = {
      firstName: location.state.firstName,
      lastName: location.state.lastName,
      email: location.state.email,
      password: location.state.password,
      expertise: formData.expertise,
      userName: formData.pageLink.toLowerCase(),
      reason: formData.plan,
    };
    console.log(user);
    axios
      .post(REGISTER_USER, user)
      .then((response) => {
        if (response.status === 200) {
          // Save data to localStorage
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setLoadingFinished(true);
        } else {
          handleSnackbarOpen("Registration failed. Email Already Exist!");
        }
      })
      .catch((error) => {
        handleSnackbarOpen("Registration failed. Email Already Exist!");
      });
  };

  // Redirect to "/dashboard" when loadingFinished is true
  React.useEffect(() => {
    if (loadingFinished) {
      // Delay the redirect for demonstration purposes
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  }, [loadingFinished, navigate]);

  // Render the appropriate form for the active step
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <FormStep1
            formData={formData}
            setFormData={setFormData}
            onStepComplete={handleStep1Complete}
          />
        );
      case 1:
        return (
          <FormStep2
            formData={formData}
            setFormData={setFormData}
            onStepComplete={handleStep2Complete}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {renderStepContent(activeStep)}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }} // Set anchorOrigin to top center
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      {loadingFinished && <LoadingProgressComp />}{" "}
      {/* Show the loading spinner when loadingFinished is true */}
    </Box>
  );
};

export default RegisterAboutYouComp;
