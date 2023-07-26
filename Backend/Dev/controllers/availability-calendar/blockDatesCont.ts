import { Request, Response } from "express";
import BlockedDates, { IBlockedDate } from '../../models/availability-calendar/blockDatesModel';

const blockDates = async (req: Request, res: Response) => {
  const blockedDatesData: IBlockedDate = req.body;
  console.log(blockedDatesData);
  try {
    const existingBlockedDates = await BlockedDates.findOne();
    console.log(existingBlockedDates);
    if(existingBlockedDates){
      existingBlockedDates.blockedDatesData = blockedDatesData;
      await existingBlockedDates.save();
      res.status(200).json({ message: 'Blocked Dates Updated Successfully.' });
    }
    else {
      const blockedDates: IBlockedDate = new BlockedDates({
        blockedDatesData,
      });
      await blockedDates.save();
      res.status(201).json({ message: 'Blocked Dates Saved Successfully.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to Save Block Dates' });
  }
};

const getUnavailableDates = async (_req: Request, res: Response) => {
  try{
    const blockedDates: IBlockedDate[] = await BlockedDates.find();
    res.status(200).json({ blockedDates });
  }
  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get Unavailable Dates' });
  }
};

export default { blockDates, getUnavailableDates };
