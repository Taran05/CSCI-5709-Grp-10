import express, { Request, Response } from "express";

const router = express.Router();

interface Availability {
  date: string;
  day: string;
  availableItems: string[];
}

router.get("/availability/:mentorId", (req: Request, res: Response) => {
  const { mentorId } = req.params;

  const dateAvailability: Availability[] = [
    {
      date: "Jul 25",
      day: "Mon",
      availableItems: [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
      ],
    },
    {
      date: "Jul 26",
      day: "Tue",
      availableItems: [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
      ],
    },
    {
      date: "Jul 27",
      day: "Wed",
      availableItems: [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
      ],
    },
    {
      date: "Jul 28",
      day: "Thu",
      availableItems: [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
      ],
    },
    {
      date: "Jul 29",
      day: "Fri",
      availableItems: [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
      ],
    },
    {
      date: "Jul 30",
      day: "Sat",
      availableItems: [
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
      ],
    },
    // and so on for other dates...
  ];

  res.json(dateAvailability);
});

export default router;
