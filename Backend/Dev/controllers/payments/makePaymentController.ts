import StudentBooking from "../../models/StudentBooking";
import { Request as ExpressRequest, Response } from "express";

interface RequestWithMentorIdParams extends ExpressRequest {
  params: {
    mentorId: string;
  };
}

export const makePayment = async (
  req: RequestWithMentorIdParams,
  res: Response
) => {
  const mentorId = req.params.mentorId;

  try {
    await StudentBooking.updateMany({ mentorId: mentorId }, { isPaid: true });
    res.send({ message: "Payment successful" });
  } catch (error) {
    res.status(500).send({ error: "Payment failed" });
  }
};
