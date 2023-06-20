// counterReducer.js
import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "Slice",
  initialState: {
    isLoggedIn:false

  },
  reducers: {
    handleIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    }
  },
});

export const {handleIsLoggedIn} = Slice.actions;
export default Slice.reducer;
