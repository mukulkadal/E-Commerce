import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from "./navSlice"
import dropdownReducer from "./dropSlice"


export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    dropdown: dropdownReducer,
  },

})