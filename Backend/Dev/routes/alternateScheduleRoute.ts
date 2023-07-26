import express, { Request, Response } from 'express';
import AlternateSchedule, { IAlternateSchedule } from '../models/alternateScheduleModel';
//import BlockedDate, { IBlockedDate } from '../models/blockDatesModel';

const router = express.Router();

router.post('/api/saveAlternateSchedule', async (req: Request, res: Response) => {
  const alternateScheduleData: IAlternateSchedule[] = req.body;
  const updatedSchedules: IAlternateSchedule[] = [];
  const deletedSchedules: string[] = []; // To keep track of deleted days
  try {
    for (let index = 0; index < alternateScheduleData.length; index++) {
      const { day, startTime, endTime, mentorID } = alternateScheduleData[index];
      console.log(day);
      console.log(startTime);
      console.log(endTime);
      console.log(mentorID);

      // Check if startTime and endTime are not empty and not equal to "NAN"
      if (startTime !== '' && endTime !== '' && startTime !== 'NAN' && endTime !== 'NAN') {
        const existingSchedule: IAlternateSchedule | null = await AlternateSchedule.findOne({
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
          const newSchedule: IAlternateSchedule = new AlternateSchedule({
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
        const deletedSchedule = await AlternateSchedule.deleteOne({
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
        const responseStatus = updatedSchedules.length === alternateScheduleData.length ? 200 : 201;
        message = responseStatus === 200 ? 'Alternate Schedule Updated Successfully.' : 'Alternate Schedule Created Successfully.';
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
    res.status(500).json({ error: 'Failed to save Alternate Schedule' });
  }
});


router.get('/api/getAlternateSchedule', async (_req: Request, res: Response) => {
  try {
    const alternateSchedule: IAlternateSchedule[] = await AlternateSchedule.find();
    res.status(200).json({ alternateSchedule });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get alternate schedule' });
  }
});

// router.post('/api/getAlternateAvailableDates', async (req: Request, res: Response) => {
//   try {
//     const alternateSchedules: IAlternateSchedule[] = await AlternateSchedule.find();
//     const blockedDates: IBlockedDate[] = await BlockedDate.find();
//     const requestedDates: { date: string; day: string }[] = req.body;
//     const availableDates: { date: string; day: string; availableHours: string[] }[] = [];
//     for(const requestedDate of requestedDates){
//       const { date, day } = requestedDate;
//       const matchingSchedule = alternateSchedules.find(
//         (schedule) => schedule.day === day
//       );
//       if (matchingSchedule) {
//         const { startTime, endTime } = matchingSchedule;
//         const availableHours: string[] = [];

//         const startDateTime = new Date(`2000-1-01 ${startTime}`);
//         const endDateTime = new Date(`2000-1-01 ${endTime}`);

//         while (startDateTime < endDateTime) {
//           availableHours.push(startDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
//           startDateTime.setHours(startDateTime.getHours() + 1);
//         }
        
//         const blockedDate = blockedDates.find((blockedDate) => blockedDate.date === date);
//         if (!blockedDate) {
//           availableDates.push({
//             date,
//             day,
//             availableHours,
//           });
//         }
//       }
//     }
//     res.status(200).json({ availableDates });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to get available dates' });
//   }
// });


export default router;
