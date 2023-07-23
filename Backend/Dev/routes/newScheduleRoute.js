const express = require('express');
const createNewScheduleModel = require('../models/newScheduleModel');

const router = express.Router();

router.post('/api/saveNewSchedule', async (req, res) => {
  const newScheduleData = req.body;
  const scheduleName = newScheduleData[0].scheduleName;
  
  const NewSchedule = createNewScheduleModel(scheduleName);
  try {
    for (let index = 0; index < newScheduleData.length; index++) {
      const dayOfWeek = newScheduleData[index].day;
      const startTime = newScheduleData[index].startTime;
      const endTime = newScheduleData[index].endTime;

      if (startTime !== '' && endTime !== '') {

        const newSchedule = new NewSchedule({
          dayOfWeek,
          startTime,
          endTime,
        });

        await newSchedule.save();
      }

    }
    res.status(201).json({ message: 'New Schedule saved successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save New Schedule' });
  }
});

module.exports = router;
