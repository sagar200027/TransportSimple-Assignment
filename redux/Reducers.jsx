// src/reducers/someReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const sliceComp = createSlice({
  name: "sliceComp",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = sliceComp.actions;
export default sliceComp.reducer;
