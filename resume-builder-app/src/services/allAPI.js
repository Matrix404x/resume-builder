import commonAPI from "./common";
import baseUrl from "./baseurl";

// addResumeAPI - PUSH
export const addResumeAPI = async(resume)=>{
    return await commonAPI("POST",`${baseUrl}/resumes`,resume)
}

// editResumeAPI - PUT

export const editResumeAPI = async(id,resume)=>{
    return await commonAPI("PUT",`${baseUrl}/resume/${id}`,resume)
}