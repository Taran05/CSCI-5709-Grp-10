import express, { Express } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// Import the schemas
import defaultScheduleRoute from "./routes/defaultScheduleRoute";
import newScheduleRoute from "./routes/newScheduleRoute";
import blockDatesRoute from "./routes/blockDatesRoute";
import calendarSettingsRoute from "./routes/calendarsettingsRoute";
import getServiceRoute from "./routes/getServiceRoute";
import availabilityRoute from "./routes/availabilityRoute";
import studentBookingRoute from "./routes/studentBookingRoute";

const app: Express = express();

//api configuration
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error: Error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

//api middlewares
app.use(defaultScheduleRoute);
app.use(newScheduleRoute);
app.use(blockDatesRoute);
app.use(calendarSettingsRoute);
app.use(getServiceRoute);
app.use(availabilityRoute);
app.use(studentBookingRoute);

const port: number = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
