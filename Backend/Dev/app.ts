import express, { Express } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import PropertiesReader from "properties-reader";
import { dirPath } from "./util/pathUtil";

const properties = PropertiesReader(
  dirPath.join(__dirname, "../dbconfig/properties.ini")
);

// Import the schemas
import defaultScheduleRoute from "./routes/defaultScheduleRoute";
import newScheduleRoute from "./routes/newScheduleRoute";
import blockDatesRoute from "./routes/blockDatesRoute";
import calendarSettingsRoute from "./routes/calendarsettingsRoute";
import { userRegisterRoute } from "./routes/userAuthentication/userRegistrationRoute";
import getServiceRoute from "./routes/getServiceRoute";
import { userLoginRoute } from "./routes/userAuthentication/userLoginRoutes";
import queriesRoutes from "./routes/queriesRoutes";
import availabilityRoute from "./routes/availabilityRoute";
import studentBookingRoute from "./routes/studentBookingRoute";

const app: Express = express();

//api configuration
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB

mongoose
  .connect(process.env.MONGODB_URI || `${properties.get("dev.MONGODB_URI")}`)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error: Error) => {
    console.log(`${properties.get("dev.MONGODB_URI")}`);

    console.error("Error connecting to MongoDB:", error.message);
  });

//api middlewares
app.use("/api/", defaultScheduleRoute);
app.use("/api/", newScheduleRoute);
app.use("/api/", blockDatesRoute);
app.use("/api/", calendarSettingsRoute);
app.use("/api/", userRegisterRoute);
app.use("/api/", userLoginRoute);
app.use("/api/", queriesRoutes);
app.use(getServiceRoute);
app.use("/api/", userLoginRoute);
app.use(availabilityRoute);
app.use(studentBookingRoute);

const port: number = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
