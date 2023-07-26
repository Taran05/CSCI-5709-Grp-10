import express, { Request, Response } from "express";
import DefaultSchedule, {
  IDefaultSchedule,
} from "../models/defaultScheduleModel";

const router = express.Router();

router.post("/saveDefaultSchedule", async (req: Request, res: Response) => {
  const defaultScheduleData: IDefaultSchedule[] = req.body;
  try {
    for (let index = 0; index < defaultScheduleData.length; index++) {
      const { dayOfWeek, startTime, endTime } = defaultScheduleData[index];
      console.log(dayOfWeek);
      console.log(startTime);
      console.log(endTime);

      if (startTime !== "" && endTime !== "") {
        const newSchedule: IDefaultSchedule = new DefaultSchedule({
          dayOfWeek: dayOfWeek,
          startTime,
          endTime,
        });

        await newSchedule.save();
      }
    }
    res.status(201).json({ message: "Default Schedule saved successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save Default Schedule" });
  }
});

export default router;
