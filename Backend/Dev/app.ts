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
import { userLoginRoute } from "./routes/userAuthentication/userLoginRoutes";

const app: Express = express();

//api configuration
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB

mongoose
  .connect(properties.get("dev.MONGODB_URI")?.toString() || "", {})
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

const port: number = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
