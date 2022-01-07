import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: [],
    changed: false,
}

const jobSlice = createSlice({
    name: 'jobs',
    initialState: initialState,
    reducers: {
        replaceJobs(state, action){
            state.jobs = action.payload.jobs;
        },
        addJob(state, action){
            const newJob = action.payload;
            state.changed = true;
            state.jobs.push(newJob);
        }
    }
});

export const jobActions = jobSlice.actions;

export default jobSlice;