const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');

// Import the schemas
const defaultScheduleRoute = require('./routes/defaultScheduleRoute');
const newScheduleRoute = require('./routes/newScheduleRoute');
const blockDatesRoute = require('./routes/blockDatesRoute');
const calendarSettingsRoute = require('./routes/calendarsettingsRoute');

const app = express();

//api configration
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

//api middlewares

app.use(defaultScheduleRoute);
app.use(newScheduleRoute);
app.use(blockDatesRoute);
app.use(calendarSettingsRoute);

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
