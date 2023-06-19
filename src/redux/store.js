// store.js
// store.js
import { configureStore } from '@reduxjs/toolkit';
import reducers from './AppSlice';

const store = configureStore({
  reducer: {
    Slice: reducers,
    // Add more reducers as needed
  },
});

export default store;
