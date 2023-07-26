import express, { Request, Response } from "express";

const router = express.Router();

interface Availability {
  date: string;
  day: string;
  availableItems: string[];
}

router.get("/availability/:mentorId", (req: Request, res: Response) => {
  const { mentorId } = req.params;
  console.log(mentorId);

  const dateAvailability: Availability[] = [
    {
      date: "Jul 25",
      day: "Mon",
      availableItems: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
    },
    {
      date: "Jul 26",
      day: "Tue",
      availableItems: ["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"],
    },
    {
      date: "Jul 27",
      day: "Wed",
      availableItems: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"],
    },
    {
      date: "Jul 28",
      day: "Thu",
      availableItems: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
    },
    {
      date: "Jul 29",
      day: "Fri",
      availableItems: ["8:00 AM", "9:00 AM", "10:00 AM", "12:00 PM"],
    },
    {
      date: "Jul 30",
      day: "Sat",
      availableItems: ["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"],
    },
    {
      date: "Jul 31",
      day: "Sun",
      availableItems: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
    },
    {
      date: "Aug 1",
      day: "Mon",
      availableItems: ["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"],
    },
    {
      date: "Aug 2",
      day: "Tue",
      availableItems: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"],
    },
    {
      date: "Aug 3",
      day: "Wed",
      availableItems: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
    },
    {
      date: "Aug 4",
      day: "Thu",
      availableItems: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
    },
    {
      date: "Aug 5",
      day: "Fri",
      availableItems: ["2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"],
    },
    {
      date: "Aug 6",
      day: "Sat",
      availableItems: ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM"],
    },
    {
      date: "Aug 7",
      day: "Sun",
      availableItems: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
    },
    {
      date: "Aug 8",
      day: "Mon",
      availableItems: ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"],
    },
  ];

  res.json(dateAvailability);
});

export default router;
