import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
    name: "application",
    initialState: {
        applicants: []
    },
    reducers: {
        setAppliedApplicants: (state, action) => {
            state.applicants = action.payload;
        }
    }
});
export const { setAppliedApplicants } = applicationSlice.actions;
export default applicationSlice.reducer;