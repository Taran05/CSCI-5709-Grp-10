const express = require('express');
const DefaultSchedule = require('../models/defaultScheduleModel');

const router = express.Router();

router.post('/api/saveDefaultSchedule', async (req, res) => {
  const defaultScheduleData = req.body;
  try {
    for (let index = 0; index < defaultScheduleData.length; index++) {
      const dayOfWeek = defaultScheduleData[index].day;
      const startTime = defaultScheduleData[index].startTime;
      const endTime = defaultScheduleData[index].endTime;
      console.log(dayOfWeek);
      console.log(startTime);
      console.log(endTime);

      if (startTime !== '' && endTime !== '') {
        const newSchedule = new DefaultSchedule({
          dayOfWeek,
          startTime,
          endTime,
        });

        await newSchedule.save();
      }

    }
    res.status(201).json({ message: 'Default Schedule saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save Default Schedule' });
  }
});

module.exports = router;
