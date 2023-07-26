import { Request, Response } from 'express'; 
import Issue, { IIssue } from '../../models/issueModel';

const issueController = {
    createIssue: async (req: Request, res: Response) => {
        const { title, description } = req.body;
        try {
            if (title && description) {
                const newIssue: IIssue = new Issue({
                    title,
                    description
                });
                await newIssue.save();
                res.status(201).json({ message: 'Issue reported successfully.' });
            } else {
                res.status(400).json({ error: 'Title and Description are required.' });
            }
            
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to report issue.' });
        }
    }
}

export default issueController