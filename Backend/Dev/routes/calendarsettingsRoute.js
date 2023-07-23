const express = require('express');
const CalendarSettings = require('../models/calendarSettingsModel');

const router = express.Router();

router.post('/api/saveCalendarSettings', async (req, res) => {
  const calendarSettingsData = req.body;
  console.log(calendarSettingsData);
  try {
        const calendarSettings = new CalendarSettings({
          calendarSettingsData
        });

        await calendarSettings.save();
      
    res.status(201).json({ message: 'Calendar Settings saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save Calendar Settings' });
  }
});

module.exports = router;
