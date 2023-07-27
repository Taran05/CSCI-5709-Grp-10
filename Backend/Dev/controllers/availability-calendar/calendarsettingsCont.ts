  /**
 * @author Taranjot Singh <tr548284@dal.ca/B00945917>
 */ 
import { Request, Response } from "express";
import CalendarSettings, {
  ICalendarSettings,
} from '../../models/availability-calendar/calendarSettingsModel';

const saveCalendarSettings = async (req: Request, res: Response) => {
  const calendarSettingsData: ICalendarSettings = req.body;
  console.log(calendarSettingsData);
  try {
    const existingSettings = await CalendarSettings.findOne();
    console.log(existingSettings);
    if(existingSettings){
      existingSettings.calendarSettingsData = calendarSettingsData;
      await existingSettings.save();
      res.status(200).json({ message: 'Calendar Settings Updated Successfully.' });
    }
    else{
      const calendarSettings: ICalendarSettings = new CalendarSettings({
        calendarSettingsData,
      });
      await calendarSettings.save();
    }  
    res.status(201).json({ message: 'Calendar Settings Saved Successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save Calendar Settings" });
  }
};

const getCalendarSettings = async (_req: Request, res: Response) => {
  try {
    const calendarSettings: ICalendarSettings[] = await CalendarSettings.find();
    if (calendarSettings.length > 0) {
      const settings = calendarSettings[0];
      res.status(200).json({ calendarSettings: settings });
    } else {
      res.status(200).json({ calendarSettings: {} });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get calendar settings' });
  }
};

export default { saveCalendarSettings, getCalendarSettings };
