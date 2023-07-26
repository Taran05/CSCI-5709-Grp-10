import { Request, Response } from 'express';
import AlternateSchedule, { IAlternateSchedule } from '../../models/availability-calendar/alternateScheduleModel';
import BlockedDate, { IBlockedDate } from '../../models/availability-calendar/blockDatesModel';

const saveAlternateSchedule = async (req: Request, res: Response) => {
  const alternateScheduleData: IAlternateSchedule[] = req.body;
  const updatedSchedules: IAlternateSchedule[] = [];
  const deletedSchedules: string[] = []; // To keep track of deleted days
  try {
    for (let index = 0; index < alternateScheduleData.length; index++) {
      const { day, startTime, endTime, mentorId } = alternateScheduleData[index];
      console.log(day);
      console.log(startTime);
      console.log(endTime);
      console.log(mentorId);

      // Check if startTime and endTime are not empty and not equal to "NAN"
      if (startTime !== '' && endTime !== '' && startTime !== 'NAN' && endTime !== 'NAN') {
        const existingSchedule: IAlternateSchedule | null = await AlternateSchedule.findOne({
          mentorId,
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
            mentorId
          });
          const savedSchedule = await newSchedule.save();
          updatedSchedules.push(savedSchedule);
        }
      } else {
        // Check if the day exists in the database, and if it does, delete it
        const deletedSchedule = await AlternateSchedule.deleteOne({
          mentorId,
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
};


const getAlternateSchedule = async (req: Request, res: Response) => {
  const { mentorId } = req.query;
  try {
    const alternateSchedule: IAlternateSchedule | null = await AlternateSchedule.findOne({
      mentorId: mentorId as string,
    });
    res.status(200).json({ alternateSchedule });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get alternate schedule' });
  }
};

const getAlternateAvailableDates = async (_req: Request, res: Response) => {
  try {
    const intlDateTimeFormatter = new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
    }); 
    const today = new Date();
    const alternateSchedules: IAlternateSchedule[] = await AlternateSchedule.find({ mentorId: 'testuser99' });
    const blockedDates: IBlockedDate[] = await BlockedDate.find({ 'blockedDatesData.mentorId': 'testuser99' });
    const availableDates: { date: string; day: string; availableHours: string[] }[] = [];

    const firstDayAfterCurrent = new Date(today);
    firstDayAfterCurrent.setDate(today.getDate() + 1);
    
    for (let i = 0; i < 30; i++) {
      const currentDate = new Date(firstDayAfterCurrent);
      currentDate.setDate(firstDayAfterCurrent.getDate() + i);
      const day = currentDate.toLocaleDateString('en-US', { weekday: 'long' });
      const matchingSchedule = alternateSchedules.find((schedule) => schedule.day === day);
      
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
};


export default { saveAlternateSchedule, getAlternateSchedule, getAlternateAvailableDates };
