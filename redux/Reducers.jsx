// src/reducers/someReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  homeColor: "linear-gradient(rgba(7, 181, 148, 1), rgba(255, 255, 255, 1))",
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
        state.homeColor =
          "linear-gradient(rgba(7, 181, 148, 1), rgba(255, 255, 255, 1))";
      } else {
        if (countUnCompleted == arr.length) {
          state.homeColor =
            "linear-gradient(rgba(248, 35, 35, 1), rgba(255, 255, 255, 1))";
        } else {
          state.homeColor =
            "linear-gradient(rgba(248, 150, 35, 1), rgba(255, 255, 255, 1))";
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
