import express, { Request, Response } from "express";
import BlockedDates, { IBlockedDate } from "../models/blockDatesModel";

const router = express.Router();

router.post("/blockDates", async (req: Request, res: Response) => {
  const dates: string[] = req.body;
  console.log(dates);
  try {
    for (let index = 0; index < dates.length; index++) {
      const date = dates[index];
      const blockedDates: IBlockedDate = new BlockedDates({
        date,
      });
      await blockedDates.save();
    }
    res.status(201).json({ message: "Blocked dates saved successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save block dates" });
  }
});

export default router;
