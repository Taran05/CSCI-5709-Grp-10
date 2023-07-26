import express, { Request, Response } from "express";

const router = express.Router();

interface Service {
  serviceName: string;
  time: string;
  price: string;
}

router.get("/services/:mentorId", (req: Request, res: Response) => {
  let { mentorId } = req.params;
  console.log(mentorId);
  // For now, ignore mentorId and return the sample object

  const services: Service[] = [
    {
      serviceName: "Introductory Meeting",
      time: "20 minutes",
      price: "$40",
    },
    {
      serviceName: "Basic Consultation",
      time: "45 minutes",
      price: "$90",
    },
    {
      serviceName: "Extended Consultation",
      time: "90 minutes",
      price: "$180",
    },
    {
      serviceName: "Deep Dive Session",
      time: "120 minutes",
      price: "$220",
    },
    {
      serviceName: "Premium Package",
      time: "180 minutes",
      price: "$300",
    },
  ];

  res.json(services);
});

export default router;
