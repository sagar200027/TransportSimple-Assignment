// src/reducers/someReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  homeColor: "#07B594",
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
      arr.map((item) => {
        console.log("status", item);
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
      console.log(
        "status arr 2",
        countCompleted,
        countUnCompleted,
        state.homeColor
      );
    },
  },
});

export const { setUser, homeBgColor } = sliceComp.actions;
export default sliceComp.reducer;
