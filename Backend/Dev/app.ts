import express, { Express } from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';

// Import the schemas
import defaultScheduleRoute from './routes/defaultScheduleRoute';
import alternateScheduleRoute from './routes/alternateScheduleRoute';
import blockDatesRoute from './routes/blockDatesRoute';
import calendarSettingsRoute from './routes/calendarsettingsRoute';
import getDatesFromDefaultScheduleRoute from './util/getDatesFromDefaultScheduleRoute';

const app: Express = express();

//api configuration
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || '')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error: Error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

//api middlewares
app.use(defaultScheduleRoute);
app.use(alternateScheduleRoute);
app.use(blockDatesRoute);
app.use(calendarSettingsRoute);
app.use(getDatesFromDefaultScheduleRoute);

const port: number = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
