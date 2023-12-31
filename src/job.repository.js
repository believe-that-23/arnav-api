import { jobModel } from "./job.schema.js";

export async function getJobDetailsRepo(data){
    const jobDetail = new jobModel(data);
    return await jobDetail.save();
}

export async function apiDataFetchRepo(){
    return await jobModel.find();
}

export async function removeData() {
    return await jobModel.deleteMany({});
}