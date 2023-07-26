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
                res.status(201).json({ message: 'Issue reported successfully' });
            } else {
                res.status(400).json({ error: 'Title and Description are required' });
            }
            
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to report issue' });
        }
    },
    getAllIssues: async (_req: Request, res: Response) => {
        try {
            const issues = await Issue.find();
            res.status(200).json(issues);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Failed to fetch issues' });
        }
    },
    getIssue: async (req: Request, res: Response) => {

        const id = req.params.id;
        try {
            const issue = await Issue.findById(id);
            if (issue) {
                res.json(issue);
            } else {
                res.status(400).json({ message: 'Issue not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ messaage: 'Failed to fetch issue'})
        }
    },
    updateIssue: async (req: Request, res: Response) => {

        const id = req.params.id;
        const { title, description } = req.body;

        try {
            const issue = await Issue.findById(id);
            if (!issue) {
                res.status(404).json({ error: 'Issue not found' });
                return ;
            }

            issue.title = title;
            issue.description = description;

            await issue.save();

            res.status(200).json({ message: 'Issue updated successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to update issue'})
        }
    },
    deleteIssue: async (req: Request, res: Response) => {

        const id = req.params.id;

        try {
            const deletedIssue = await Issue.findByIdAndDelete(id);

            if(!deletedIssue) {
                return res.status(404).json({ message: 'Issue not found' });
            }

            res.status(200).json({ message: 'Issue deleted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Failed to delete issue'});
        }
    }
}

export default issueController