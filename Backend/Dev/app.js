const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const cors = require('cors');

// Import the defaultScheduleRoute
const defaultScheduleRoute = require('./routes/defaultScheduleRoute');

const app = express();

//api configration
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://Taran20:<PASSWORD>@learnly.ohqbsji.mongodb.net/learnly?retryWrites=true&w=majority', {
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

const port = 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
