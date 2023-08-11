/**
 * This module handles the controller functions for switching and getting selected schedules.
 * Author: Taranjot Singh <tr548284@dal.ca/B00945917>
 */

import { Request, Response } from "express";
import StudentBooking from "../../models/StudentBooking";

/**
 * Switches the mentor's schedule between default and alternate.
 * @param req - Express request object.
 * @param res - Express response object.
 */
const switchSchedule = async (req: Request, res: Response) => {
    const { mentorId, scheduleName } = req.body;
    console.log(mentorId);
     console.log(scheduleName);
    try {
        if(scheduleName == "alternate"){
            let calendarSettings = await StudentBooking.updateMany({mentorId}, {isDefaultSchedule : false});
            console.log(calendarSettings);
            res.send({ message: "Switched to alternate schedule!" });
        }
        else{
            let calendarSettings = await StudentBooking.updateMany({mentorId}, {isDefaultSchedule : true});
            console.log(calendarSettings);
            res.send({ message: "Switched to default schedule!" });
        }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to switch schedule" });
  }
};

/**
 * Get the mentor's currently selected schedule (default or alternate).
 * @param req - Express request object.
 * @param res - Express response object.
 */
const getSelectedSchedule = async (req: Request, res: Response) => {
    console.log("Get selected schedule called");
    const { mentorId } = req.query;
    console.log(mentorId);
    try {
      const switchScheduleSettings = await StudentBooking.findOne({mentorId});
        res.status(200).json({ switchScheduleSettings });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to get selected schedule' });
    }
  };

export default { switchSchedule, getSelectedSchedule };