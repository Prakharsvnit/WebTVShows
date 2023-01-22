import { createSlice } from "@reduxjs/toolkit";

const showSlice = createSlice({
  name: "show",
  initialState: {
    showDetail: [],
  },
  reducers: {
    addShowDetail: (state, action) => {
      state.showDetail.push(action.payload);
    },
  },
});

export const { addShowDetail } = showSlice.actions;
export default showSlice.reducer;
