import express from 'express';
import { getJobDetails, apiDataFetch, freeDatabase } from './job.controller.js';

const router = express.Router();

router.post("/job", (req, res) => {
    getJobDetails(req, res);
});

router.get('/job', (req, res) => {
    apiDataFetch(req, res);
})

router.delete('/job/remove', (req, res) => {
    freeDatabase(req, res);
})
export default router;