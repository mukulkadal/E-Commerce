import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
  name: "navbar",
  initialState: {
    isOpen: false
  },
  reducers: {
    toggleNavbar: (state) =>{
    state.isOpen = !state.isOpen
} 

  },
});

// Action creators are generated for each case reducer function
export const { toggleNavbar } = navSlice.actions;

export default navSlice.reducer;
