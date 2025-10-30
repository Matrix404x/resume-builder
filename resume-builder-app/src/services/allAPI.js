import commonAPI from "./common";
import baseUrl from "./baseurl";

// addResumeAPI
export const addResumeAPI = async(resume)=>{
    return await commonAPI("POST",`${baseUrl}/resumes`,resume)
}