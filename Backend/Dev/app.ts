import express, { Express } from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';

// Import the schemas
import defaultScheduleRoute from './routes/defaultScheduleRoute';
import newScheduleRoute from './routes/newScheduleRoute';
import blockDatesRoute from './routes/blockDatesRoute';
import calendarSettingsRoute from './routes/calendarsettingsRoute';
import queriesRoutes from './routes/queriesRoutes';

const app: Express = express();

//api configuration
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb+srv://Taran20:Taranjot_20@learnly.ohqbsji.mongodb.net/learnly?retryWrites=true&w=majority')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error: Error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

//api middlewares
app.use(defaultScheduleRoute);
app.use(newScheduleRoute);
app.use(blockDatesRoute);
app.use(calendarSettingsRoute);
app.use(queriesRoutes);

const port: number = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
