export const setProgressBar = (status) =>{
    return {
        type : 'PROGRESS_BAR_STATUS',
        payload : status,
    }
}