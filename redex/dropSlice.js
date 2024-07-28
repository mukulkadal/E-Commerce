import { createSlice } from "@reduxjs/toolkit";

const dropSlice = createSlice({
    name: "dropdown",
    initialState: {
        isOpen: false
    },
    reducers:{
        toggleDropdown:(state) =>{
            state.isOpen = !state.isOpen
        }
    },
});


export const {toggleDropdown} = dropSlice.actions;
export default dropSlice.reducer;