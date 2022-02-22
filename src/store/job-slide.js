import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    changed: false,
}

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        replaceJobs(state, action){
            state.items = action.payload.items;
        },
        addJob(state, action){
            const newJob = action.payload;
            state.changed = true;
            state.items.unshift(newJob);
        }
    }
});

export const jobActions = jobSlice.actions;

export default jobSlice;