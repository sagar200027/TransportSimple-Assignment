// src/reducers/someReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  homeColor: "",
};

const sliceComp = createSlice({
  name: "sliceComp",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      state.user = actions.payload;
    },
    homeBgColor: (state, actions) => {
      const arr = actions.payload;
      // console.log("status arr", arr);
      let countCompleted = 0;
      let countUnCompleted = 0;
      const countArr = arr.map(({ item }) => {
        if (item == "completed") {
          countCompleted++;
        } else {
          countUnCompleted++;
        }
      });
      if (countCompleted == arr.length) {
        state.homeColor = "#07B594";
      } else {
        if (countUnCompleted == arr.length) {
          state.homeColor = "#F82323";
        } else {
          state.homeColor = "#F89623";
        }
      }
      // console.log("status arr 2", state.homeColor);
    },
  },
});

export const { setUser, homeBgColor } = sliceComp.actions;
export default sliceComp.reducer;
