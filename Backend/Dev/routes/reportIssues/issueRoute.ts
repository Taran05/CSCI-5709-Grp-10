import express from 'express';
import issueController from '../../controllers/reportIssues/issueController';

const router = express.Router();

router.post('/api/report', issueController.createIssue);

export const issueRoute = router;