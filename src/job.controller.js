import { getJobDetailsRepo, apiDataFetchRepo, removeData } from './job.repository.js';
export async function getJobDetails(req, res) {
    const data = req.body;
    const requiredData = await getJobDetailsRepo(data);
    console.log("HAHA", requiredData);
    // res.status(200).send(requiredData);
    return res.status(200).json(requiredData);
}

export async function apiDataFetch(req, res) {
    const data = await apiDataFetchRepo();
    return res.status(200).json(data);
}

export async function freeDatabase(req, res) {
    const data = await removeData();
    return res.status(200).json(data);
}