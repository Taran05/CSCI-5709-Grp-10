// controller.ts
import { Request, Response } from 'express';
import Queries from '../models/queriesModel';

// Controller function to get data from MongoDB
const getQueries = async (req: Request, res: Response) => {
  // const { mentorId } = req.body;
  console.log(req.body);

  try {
    const data = await Queries.find();//{ mentorId: mentorId });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to update the content of a specific entry
const sendResponse = async (req: Request, res: Response) => {
  console.log("in sedResponse api:",req.body);

  const { _id, response } = req.body;
  const isResponded = true;

  try {
    const updatedQuery = await Queries.findByIdAndUpdate(_id, { response, isResponded }, { new: true });
    if (!updatedQuery) {
      return res.status(404).json({ error: 'Query not found' });
    }
    res.status(200).json(updatedQuery);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to save new content
export const saveQuery = async (req: Request, res: Response) => {

    console.log("Save Query called");
    const { name, title, email, content, mentorId } = req.body;
    const isResponded: Boolean = false;
    const response: String = "";

    const today = new Date();

    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const time = `${month}/${day}`;
    console.log(time);

    try {
      const newData = new Queries({  name, title, email, content, time, isResponded, response, mentorId });
      const savedData = await newData.save();
      res.status(201).json(savedData);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  const deleteQuery = async (req: Request, res: Response) => {
    const { _id } = req.body; // Assuming the _id value is passed as a parameter in the URL
  
    try {
      // Assuming DataModel is the Mongoose model representing the collection in MongoDB
      const deletedData = await Queries.findByIdAndDelete(_id);
  
      if (!deletedData) {
        return res.status(404).json({ error: 'Data not found' });
      }
  
      res.status(200).json({ message: 'Data deleted successfully', deletedData });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  

export default {
    getQueries,
    sendResponse,
    saveQuery,
    deleteQuery
}