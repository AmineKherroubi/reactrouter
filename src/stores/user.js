import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState : {
        profileValue : {}
    },
    reducers : {
        updateProfileValue: (state,newValue) => {
            state.profileValue = newValue.payload
        }
    }
});

export const {updateProfileValue} = userSlice.actions;
export default userSlice.reducer