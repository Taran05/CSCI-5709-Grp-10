const mongoose = require('mongoose');

const calendarSettingsSchema = new mongoose.Schema({
    calendarSettingsData: { type: Object, required: true },
});

const CalendarSettings = mongoose.model('CalendarSettings', calendarSettingsSchema);

module.exports = CalendarSettings;
