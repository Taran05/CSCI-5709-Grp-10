import express, { Request, Response } from "express";
import CalendarSettings, {
  ICalendarSettings,
} from "../models/calendarSettingsModel";

const router = express.Router();

router.post("/saveCalendarSettings", async (req: Request, res: Response) => {
  const calendarSettingsData: ICalendarSettings = req.body;
  console.log(calendarSettingsData);
  try {
    const calendarSettings: ICalendarSettings = new CalendarSettings({
      calendarSettingsData,
    });

    await calendarSettings.save();

    res.status(201).json({ message: "Calendar Settings saved successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save Calendar Settings" });
  }
});

export default router;
