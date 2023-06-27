// counterReducer.js
import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "Slice",
  initialState: {
    isLoggedIn:false , 
    baseUrl: 'http://localhost:8080/api',


  },
  reducers: {
    handleIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    }
  },
});

export const {handleIsLoggedIn} = Slice.actions;
export default Slice.reducer;
