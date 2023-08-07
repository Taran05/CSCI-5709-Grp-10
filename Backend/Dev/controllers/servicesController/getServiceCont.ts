/**
 * @author Shivam Lakhanpal <sh475218@dal.ca/B00932887>
 */

import { Request, Response } from "express";

interface Service {
  serviceName: string;
  time: string;
  price: string;
}

/*
 * An express async function to handle the service request.
 * This function returns the details of the services offered by a mentor.
 * This is a mock data as services feature is not available
 *
 * @async
 * @function
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 */
const getService = async (req: Request, res: Response) => {
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
};

export default { getService };
