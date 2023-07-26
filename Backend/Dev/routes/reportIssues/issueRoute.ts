import express from 'express';
import issueController from '../../controllers/reportIssues/issueController';

const router = express.Router();

router.post('/createIssue', issueController.createIssue);
router.get('/getAllIssues', issueController.getAllIssues);
router.get('/getIssue/:id', issueController.getIssue);
// router.post('/updateIssue', issueController.updateIssue);
// router.post('deleteIssue', issueController.deleteIssue);

export const issueRoute = router;