import express, { Request, Response } from 'express';
import createNewScheduleModel, { ICustomSchedule } from '../models/newScheduleModel'; 

const router = express.Router();

router.post('/api/saveNewSchedule', async (req: Request, res: Response) => {
  const newScheduleData: ICustomSchedule[] = req.body;
  const scheduleName: string = newScheduleData[0].scheduleName;
  
  const NewSchedule = createNewScheduleModel(scheduleName);
  try {
    for (let index = 0; index < newScheduleData.length; index++) {
      const { dayOfWeek, startTime, endTime } = newScheduleData[index];

      if (startTime !== '' && endTime !== '') {
        const newSchedule: ICustomSchedule = new NewSchedule({
          dayOfWeek: dayOfWeek,
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

export default router;
