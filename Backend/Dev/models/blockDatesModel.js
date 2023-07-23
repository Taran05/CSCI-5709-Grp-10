const mongoose = require('mongoose');

const blockDatesSchema = new mongoose.Schema({
  date: { type: String, required: true },
});

const BlockedDates = mongoose.model('BlockedDates', blockDatesSchema);

module.exports = BlockedDates;
