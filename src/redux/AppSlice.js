// counterReducer.js
import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "Slice",
  initialState: {
    isLoggedIn:false , 
    baseUrl: 'https://ecom-mern-f2ub.onrender.com/api',
    isOpenDialog:false , 
    returnDialogconfirmation : false 


  },
  reducers: {
    handleIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    closeModalDialog :(state, action)=> {
      // state.returnDialogconfirmation = false
      state.isOpenDialog = false

    },

     openModalDialog :(state , action)=> {
      state.returnDialogconfirmation = false
      state.isOpenDialog = true

    }, 
    handelreturnDialogconfirmation :(state , action )=>{
      state.returnDialogconfirmation = action.payload
      console.log("===>",action.payload)

    }
    
  },
});

export const {handleIsLoggedIn , closeModalDialog ,openModalDialog, handelreturnDialogconfirmation} = Slice.actions;
export default Slice.reducer;
