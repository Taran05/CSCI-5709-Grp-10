/**
* @author Taranjot Singh <tr548284@dal.ca/B00945917>
*/
import { Request, Response } from "express";
import BlockedDates from '../../models/availability-calendar/blockDatesModel';

interface BlockedDatesRequest extends Request {
  body: {
    mentorId: string;
    dates: [string];
  };
}

const blockDates = async (req: BlockedDatesRequest, res: Response) => {
  console.log(req.body);
  const { mentorId, dates } = req.body;
  console.log(mentorId);
  console.log(dates);
  try {
    let blockedDates = await BlockedDates.findOne({ mentorId });
    console.log(blockedDates);
    if (blockedDates) {
      blockedDates.mentorId = mentorId;
      blockedDates.dates = dates;
    }
    else {
      blockedDates = new BlockedDates({
        mentorId,
        dates,
      });
    }
    await blockedDates.save();
    res.send({ message: "Blocked dates saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save blocked dates' });
  }
};

const getUnavailableDates = async (req: BlockedDatesRequest, res: Response) => {
  const { mentorId } = req.query;
  try {
    const blockedDates = await BlockedDates.findOne({ mentorId });
    if(blockedDates){
      res.status(200).json({ blockedDates });
    }
    else {
      res.status(404).json({ message: 'Blocked dates not found' });
    }
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get Unavailable Dates' });
  }
};

export default { blockDates, getUnavailableDates };
