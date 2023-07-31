// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import reducerComp from './Reducers.jsx';

const store = configureStore({
  reducer: {
    sliceComp: reducerComp,
    // Add more slices (reducers) here if needed
  },
});

export default store;
