import express, { Request, Response } from 'express';
import DefaultSchedule, { IDefaultSchedule } from '../models/defaultScheduleModel';

const router = express.Router();

router.post('/api/saveDefaultSchedule', async (req: Request, res: Response) => {
  const defaultScheduleData: IDefaultSchedule[] = req.body;
  const updatedSchedules: IDefaultSchedule[] = [];
  const deletedSchedules: string[] = []; // To keep track of deleted days
  try {
    for (let index = 0; index < defaultScheduleData.length; index++) {
      const { day, startTime, endTime, mentorID } = defaultScheduleData[index];
      console.log(day);
      console.log(startTime);
      console.log(endTime);
      console.log(mentorID);

      // Check if startTime and endTime are not empty and not equal to "NAN"
      if (startTime !== '' && endTime !== '' && startTime !== 'NAN' && endTime !== 'NAN') {
        const existingSchedule: IDefaultSchedule | null = await DefaultSchedule.findOne({
          mentorID,
          day,
        });
        console.log("Existing Schedule : " + existingSchedule);
        if (existingSchedule) {
          existingSchedule.startTime = startTime;
          existingSchedule.endTime = endTime;
          const updatedSchedule = await existingSchedule.save();
          updatedSchedules.push(updatedSchedule);
        } else {
          const newSchedule: IDefaultSchedule = new DefaultSchedule({
            day,
            startTime,
            endTime,
            mentorID
          });
          const savedSchedule = await newSchedule.save();
          updatedSchedules.push(savedSchedule);
        }
      } else {
        // Check if the day exists in the database, and if it does, delete it
        const deletedSchedule = await DefaultSchedule.deleteOne({
          mentorID,
          day,
        });
        if (deletedSchedule.deletedCount > 0) {
          deletedSchedules.push(day);
        }
      }
    }

    if (updatedSchedules.length === 0 && deletedSchedules.length === 0) {
      res.status(400).json({ message: 'No valid schedules found to update or create or delete.' });
    } else {
      let message = '';
      if (updatedSchedules.length > 0) {
        const responseStatus = updatedSchedules.length === defaultScheduleData.length ? 200 : 201;
        message = responseStatus === 200 ? 'Default Schedule Updated Successfully.' : 'Default Schedule Created Successfully.';
      }
      if (deletedSchedules.length > 0) {
        message += ` Deleted days: ${deletedSchedules.join(', ')}`;
      }
      res.status(200).json({
        message,
        updatedSchedules,
        deletedSchedules,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save Default Schedule' });
  }
});


router.get('/api/getDefaultSchedule', async (_req: Request, res: Response) => {
  try {
    const defaultSchedule: IDefaultSchedule[] = await DefaultSchedule.find();
    res.status(200).json({ defaultSchedule });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get default schedule' });
  }
});

export default router;
