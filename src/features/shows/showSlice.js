import { createSlice } from "@reduxjs/toolkit";

export const showSlice = createSlice({
  name: "showDetails",
  initialState: {
    showsDetail: [],
  },
  reducer: {
    addShowDetails: (state, action) => {
      state.showsDetail = action.payload;
    },
  },
});

export const { addShowDetails } = showSlice.actions;
export default showSlice.reducer;
