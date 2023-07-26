import express, { Request, Response } from 'express';
import DefaultSchedule, { IDefaultSchedule } from '../models/defaultScheduleModel';
import BlockedDate, { IBlockedDate } from '../models/blockDatesModel';

const router = express.Router();

router.get('/api/getDefaultAvailableDates', async (_req: Request, res: Response) => {
  try {
    const intlDateTimeFormatter = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    });
    const today = new Date();
    const defaultSchedules: IDefaultSchedule[] = await DefaultSchedule.find({ mentorID: 'Taran_Singh' });
    const blockedDates: IBlockedDate[] = await BlockedDate.find({ 'blockedDatesData.mentorID': 'Taran_Singh' });
    const availableDates: { date: string; day: string; availableHours: string[] }[] = [];

    const firstDayAfterCurrent = new Date(today);
    firstDayAfterCurrent.setDate(today.getDate() + 1);
    
    for (let i = 0; i < 30; i++) {
      const currentDate = new Date(firstDayAfterCurrent);
      currentDate.setDate(firstDayAfterCurrent.getDate() + i);
      const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
      const matchingSchedule = defaultSchedules.find((schedule) => schedule.day === day);
      
      if (matchingSchedule) {
        const { startTime, endTime } = matchingSchedule;
        const availableHours: string[] = [];
        const date = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' });
        console.log(date);

        const blockedDatesJSON = JSON.stringify(blockedDates);
        const blockedDatesObject = JSON.parse(blockedDatesJSON);
        const dates = blockedDatesObject[0].blockedDatesData.dates;

        if (!dates.includes(date)) {

          const startDateTimeString = date + ' ' + startTime;
          const endDateTimeString = date + ' ' + endTime;
          const startDateTime = new Date(startDateTimeString);
          const endDateTime = new Date(endDateTimeString);
  
          while (startDateTime < endDateTime) {
            availableHours.push(intlDateTimeFormatter.format(startDateTime));
            startDateTime.setHours(startDateTime.getHours() + 1);
          }

          availableDates.push({
            date,
            day,
            availableHours,
          });
      }
    }
  }
    res.status(200).json({ availableDates });
  }
catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get available dates' });
  }
});

export default router;