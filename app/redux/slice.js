const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  breakTime: null,
  playTime: null,
  postionNumber: null,
};

const Slice = createSlice({
  name: "gameSlice",
  initialState,
  reducers: {
    updateBreakTime: (state, action) => {
      state.breakTime = action.payload;
    },
    updatePlayTime: (state, action) => {
      state.playTime = action.payload;
    },

    updatePostionNumber: (state, action) => {
      state.postionNumber = action.payload;
    },
  },
});

export default Slice.reducer;
export const { updateBreakTime, updatePlayTime, updatePostionNumber } =
  Slice.actions;
