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

// addDownloadHistory

export const addDownloadHistory = async(resume)=>{
    return await commonAPI("POST",`${baseUrl}/history`,resume)
}

// getDownloadHistory

export const getDownloadHistory = async()=>{
    return await commonAPI("GET",`${baseUrl}/history`,{})
}

// deleteDownloadHistory

export const deleteDownloadHistory = async(id)=>{
    return await commonAPI("DELETE",`${baseUrl}/history/${id}`,{})
}